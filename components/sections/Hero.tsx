import { AssetSlot } from "../AssetSlot";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-ink pb-24 pt-28 md:pb-32 md:pt-32">
      <div className="absolute inset-0 bg-radial-blue opacity-90" />
      <div className="container-n7 relative grid items-center gap-12 md:grid-cols-[1.02fr_.98fr]">
        <div>
          <h1 className="w-[calc(100vw-40px)] max-w-[610px] text-[30px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:w-auto sm:text-[58px] md:text-[66px]">
            The new foundation of modern banking
          </h1>
          <p className="mt-5 max-w-[520px] text-[14px] leading-7 text-white/50">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          <div className="mt-9 flex flex-wrap gap-4 uppercase">
            <a className="btn-primary hover:bg-white hover:text-blue-500" href="#contact">Request Demo</a>
            <a className="btn-secondary hover:bg-white hover:text-blue-500" href="#solutions">CONTACT US</a>
          </div>
          <div className="mt-16">
            <p className="text-[12px] font-medium text-white/50">Trusted by :</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/[0.28] sm:gap-x-7 sm:text-[11px]">
              <span>Shells</span><span>Smart Finder</span><span>Zoomerr</span><span>ArtVenue</span><span>kontrastr</span><span>WAVESMARATHON</span>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[360px] md:overflow-visible">
          <AssetSlot className="float-slow absolute right-0 top-2 h-[255px] w-full max-w-[405px]" variant="hero" label="Header image" />
        </div>
      </div>
    </section>
  );
}