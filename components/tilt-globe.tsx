"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * A 3D dotted globe (cobe, WebGL, ~5KB) for the dark landing theme.
 *
 * Cobe renders the sphere; this component only supplies the view angles. The
 * globe starts facing India, spins slowly on its own, and can be dragged to
 * rotate it in either axis. Dragging pauses the auto-spin.
 *
 * Cobe's options are provided at creation; in v2 the animation is driven by
 * calling `globe.update()` ourselves, which is what the rAF loop does. The
 * loop also keeps redrawing for a few seconds after mount: cobe uploads its
 * map texture in an Image.onload and does not redraw, so without that warm-up
 * the sphere stays blank until the first pointer move.
 */

/** Cobe phi/theta that centre India. Derived from cobe's marker projection. */
const BASE_PHI = 3.335;
const BASE_THETA = 0.36;

/** Routes out of Mumbai to London, Singapore and New York. */
const CITIES: [number, number][] = [
  [19.076, 72.8777],
  [51.507, -0.128],
  [1.352, 103.82],
  [40.713, -74.006],
];
/** Endpoint pairs, taken in rotation so packets fly between varied cities. */
const PAIRS: [number, number][] = [
  [0, 1],
  [2, 3],
  [1, 2],
  [3, 1],
  [0, 2],
  [2, 0],
  [1, 3],
  [3, 0],
];
const route = (cycle: number, slot: number) => {
  const [a, b] = PAIRS[Math.abs(cycle * 3 + slot) % PAIRS.length];
  return { from: CITIES[a], to: CITIES[b] };
};
const STATIC_ROUTES = [route(0, 0), route(0, 1), route(0, 2)];

const toVec = ([lat, lon]: [number, number]): [number, number, number] => {
  const a = (lat * Math.PI) / 180;
  const b = (lon * Math.PI) / 180;
  return [Math.cos(a) * Math.cos(b), Math.cos(a) * Math.sin(b), Math.sin(a)];
};

/** Great-circle point a fraction t of the way from → to. */
function along(
  from: [number, number],
  to: [number, number],
  t: number,
): [number, number] {
  const a = toVec(from);
  const b = toVec(to);
  const ang = Math.acos(
    Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])),
  );
  const s1 = Math.sin((1 - t) * ang) / Math.sin(ang);
  const s2 = Math.sin(t * ang) / Math.sin(ang);
  const x = a[0] * s1 + b[0] * s2;
  const y = a[1] * s1 + b[1] * s2;
  const z = a[2] * s1 + b[2] * s2;
  const n = Math.hypot(x, y, z);
  return [((Math.asin(z / n) * 180) / Math.PI), ((Math.atan2(y / n, x / n) * 180) / Math.PI)];
}

/**
 * Screen position (0-100 within the square canvas) of a lat/lon at cobe's
 * current phi/theta, mirroring cobe's own projection so the SVG trail sits
 * exactly where the markers are drawn.
 */
function project(
  lat: number,
  lon: number,
  phi: number,
  theta: number,
): [number, number, boolean] {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180 - Math.PI;
  const cl = Math.cos(la);
  const R = 0.8; // cobe draws the sphere at 80% of the canvas
  const x = R * -cl * Math.cos(lo);
  const y = R * Math.sin(la);
  const z = R * cl * Math.sin(lo);

  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const cp = Math.cos(phi);
  const sp = Math.sin(phi);

  const c = cp * x + sp * z;
  const s = sp * st * x + ct * y - cp * st * z;
  const front = -sp * ct * x + st * y + cp * ct * z >= 0;
  return [(c + 1) * 50, (-s + 1) * 50, front || c * c + s * s >= 0.64];
}

export function TiltGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const overlay = useRef<SVGSVGElement>(null);
  const aim = useRef({ phi: 0, theta: 0 });
  const drag = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;

    let width = el.offsetWidth;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let phi = BASE_PHI;
    let theta = BASE_THETA;

    const globe = createGlobe(el, {
      devicePixelRatio: dpr,
      width,
      height: width,
      phi,
      theta,
      // Dark mode: the ocean is transparent and only the land dots are drawn.
      // baseColor is the dots; glowColor is the sphere's halo.
      dark: 1,
      diffuse: 1.2,
      mapSamples: 24000,
      mapBrightness: 6,
      baseColor: [0.83, 1, 0.14], // lime
      markerColor: [0.83, 1, 0.14],
      glowColor: [0.3, 0.55, 0.94], // cobalt-light
    });

    // cobe re-parents the canvas, so query the overlay element directly.
    const trailEls = Array.from(
      overlay.current?.querySelectorAll<SVGPathElement>("[data-trail]") ?? [],
    );
    const glowEls = Array.from(
      overlay.current?.querySelectorAll<SVGPathElement>("[data-trail-glow]") ??
        [],
    );
    const dotEls = Array.from(
      overlay.current?.querySelectorAll<SVGGElement>("[data-dot]") ?? [],
    );

    /** Places a neon dot; dots 0-3 are cities, the rest are packets. */
    const placeDot = (
      i: number,
      lat: number,
      lon: number,
      alpha: number,
    ) => {
      const g = dotEls[i];
      if (!g) return;
      const [x, y, visible] = project(lat, lon, phi, theta);
      g.setAttribute("opacity", visible && alpha > 0 ? alpha.toFixed(2) : "0");
      if (visible && alpha > 0)
        g.setAttribute(
          "transform",
          `translate(${x.toFixed(2)} ${y.toFixed(2)})`,
        );
    };

    /** Draws the trail from → to, up to fraction t, on the current view. */
    const drawTrail = (
      i: number,
      from: [number, number],
      to: [number, number],
      t: number,
    ) => {
      let d = "";
      if (t > 0.001) {
        const K = 36;
        let pen = false;
        for (let k = 0; k <= K; k++) {
          const [lat, lon] = along(from, to, (k / K) * t);
          const [x, y, visible] = project(lat, lon, phi, theta);
          if (!visible) {
            pen = false;
            continue;
          }
          d += `${pen ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
          pen = true;
        }
      }
      trailEls[i]?.setAttribute("d", d);
      glowEls[i]?.setAttribute("d", d);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let spin = 0;
    const warmUntil = performance.now() + 3000;
    let raf = 0;
    const tick = () => {
      // ~1 revolution per minute; pauses while the user drags.
      if (!reduce && !drag.current) spin += 0.0016;
      const dPhi = BASE_PHI + spin + aim.current.phi - phi;
      const dTheta = BASE_THETA + aim.current.theta - theta;
      const moving = Math.abs(dPhi) > 0.0005 || Math.abs(dTheta) > 0.0005;

      if (moving) {
        phi += dPhi * 0.08;
        theta += dTheta * 0.08;
      }
      if (moving || performance.now() < warmUntil) {
        const now = performance.now();
        const pulse = reduce ? 1 : 0.55 + 0.45 * Math.sin(now / 320);

        // The trail follows the packets' exact great-circle path, then is held
        // briefly after landing before it disappears.
        const CYCLE = 7000;
        const TRAVEL = 0.55;
        const HOLD = 0.8;

        if (!reduce) {
          CITIES.forEach((c, i) => placeDot(i, c[0], c[1], pulse));

          for (let i = 0; i < 3; i++) {
            const progress = now / CYCLE + i / 3;
            const p = progress % 1;
            const r = route(Math.floor(progress), i);
            const t = p >= HOLD ? 0 : Math.min(1, p / TRAVEL);
            drawTrail(i, r.from, r.to, t);

            [0, 0.08].forEach((lag, j) => {
              const tt = t - lag;
              if (tt > 0) {
                const [lat, lon] = along(r.from, r.to, tt);
                placeDot(4 + i * 2 + j, lat, lon, 1);
              } else placeDot(4 + i * 2 + j, 0, 0, 0);
            });
          }
        }

        globe.update({ phi, theta });
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Static full routes when motion is reduced (the view never moves).
    if (reduce) {
      STATIC_ROUTES.forEach((r, i) => drawTrail(i, r.from, r.to, 1));
      CITIES.forEach((c, i) => placeDot(i, c[0], c[1], 1));
    }

    const ro = new ResizeObserver(() => {
      width = el.offsetWidth;
      globe.update({ width, height: width });
    });
    ro.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      globe.destroy();
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    drag.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const last = drag.current;
    if (!last) return;
    aim.current.phi += (e.clientX - last.x) * 0.006;
    aim.current.theta = Math.max(
      -0.9,
      Math.min(0.9, aim.current.theta + (e.clientY - last.y) * 0.006),
    );
    drag.current = { x: e.clientX, y: e.clientY };
  };

  const endDrag = () => {
    drag.current = null;
  };

  return (
    <div
      className="relative flex w-full cursor-grab touch-pan-y justify-center select-none active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cobalt/25 blur-3xl"
      />
      {/* Rim light hugging the sphere's left limb, behind the canvas (the sphere
          is 80% of the canvas, hence inset-[10%]). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_12%_50%,rgba(200,230,255,0.9),rgba(77,139,240,0.5)_18%,transparent_42%)] blur-2xl [mask-image:linear-gradient(to_right,#000_35%,transparent_58%)]"
      />
      <div className="relative aspect-square w-full">
        <canvas ref={canvas} className="h-full w-full" aria-hidden />
        <svg
          ref={overlay}
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <filter
              id="cobe-trail-glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="1.2" />
            </filter>
            <filter
              id="cobe-neon"
              x="-300%"
              y="-300%"
              width="700%"
              height="700%"
            >
              <feGaussianBlur stdDeviation="2" result="wide" />
              <feGaussianBlur stdDeviation="0.6" result="tight" />
              <feMerge>
                <feMergeNode in="wide" />
                <feMergeNode in="wide" />
                <feMergeNode in="tight" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <path
                data-trail-glow={i}
                fill="none"
                stroke="#D4FF24"
                strokeWidth="0.8"
                strokeOpacity="0.35"
                strokeLinecap="round"
                filter="url(#cobe-trail-glow)"
              />
              <path
                data-trail={i}
                fill="none"
                stroke="#D4FF24"
                strokeWidth="0.3"
                strokeLinecap="round"
              />
            </g>
          ))}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <g key={i} data-dot opacity="0">
              <circle
                r={i < 4 ? 0.7 : 0.9}
                fill="#D4FF24"
                filter="url(#cobe-neon)"
              />
              <circle r={i < 4 ? 0.28 : 0.36} fill="#FFFFFF" />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
