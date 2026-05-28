export function BlueBanner({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "bg-mist py-16" : "bg-ink py-20"}>
      <div className="container-n7">
        <div className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#021a24,#032532_65%,#05466b)] px-7 py-10 shadow-glow md:px-14 md:py-14">
          <div className="absolute inset-y-0 right-0 w-[82%] border-l border-white/[0.14] text-[180px] font-semibold leading-none tracking-[0.2em] text-transparent [-webkit-text-stroke:2px_rgba(37,99,235,0.22)] md:text-[400px] -mt-[5rem]">
            CB7
          </div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-[470px] text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] md:text-[40px]">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="mt-4 text-white/[0.58]">CB7 helps your financial institution improve the client experience, <br /> automate and optimize procedures, simplify banking operations</p>
            </div>
            <a className="btn-secondary border-white/40 bg-white/5" href="#contact">CONTACT US</a>
            <a className="btn-secondary border-white/40 bg:blue-700" href="#contact">REQUEST DEMO</a>
          </div>
        </div>
      </div>
    </section>
  );
}