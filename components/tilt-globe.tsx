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

export function TiltGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
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
        globe.update({ phi, theta });
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

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
      </div>
    </div>
  );
}
