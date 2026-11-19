const LOGOS = [
  "ORBITAL",
  "FORGEWORKS",
  "NIMBUS LABS",
  "HALCYON",
  "VANTAGE",
  "KIOSK & CO",
  "NORTHWIND",
];

export function SocialProof() {
  return (
    <section className="relative z-[1] border-y border-white/[0.06] py-14">
      <div className="wrap">
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.1em] text-ash-soft">Trusted by teams building the future</p>
      </div>
      <div className="group overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] [-webkit-mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-label="Teams using VilSend">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div className="flex items-center gap-[clamp(32px,5vw,72px)] pr-[clamp(32px,5vw,72px)]" key={copy} aria-hidden={copy === 1}>
              {LOGOS.map((logo) => (
                <span key={logo} className="whitespace-nowrap font-serif text-[clamp(18px,2vw,26px)] text-ash opacity-70 transition-[opacity,color] duration-300 hover:text-paper hover:opacity-100">{logo}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
