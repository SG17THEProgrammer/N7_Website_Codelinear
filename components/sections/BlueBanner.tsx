export function BlueBanner({ light = false }: { light?: boolean }) {
  const backgroundTextClass = light
  ? "top-[-2.3rem] text-[170px] leading-[0.82] tracking-[-0.08em] text-transparent bg-[linear-gradient(to_bottom,rgba(0,120,185,0.20)_0%,rgba(0,95,150,0.10)_45%,rgba(0,47,87,0.015)_100%)] bg-clip-text [-webkit-text-stroke:1px_rgba(0,95,150,0.16)] sm:text-[250px] md:top-[-3.8rem] md:right-[3rem] md:text-[400px]"
  : "top-[-1.2rem] text-[370px] leading-[0.82] tracking-[-0.09em] text-transparent bg-[linear-gradient(to_bottom,rgba(0,120,185,0.20)_0%,rgba(0,95,150,0.10)_45%,rgba(0,47,87,0.015)_100%)] bg-clip-text [-webkit-text-stroke:1px_rgba(0,95,150,0.16)] sm:text-[250px] md:left-[30%] md:top-[-3.8rem] md:text-[400px] w-[200%]";

  return (
    <section className={light ? "bg-mist py-16" : "bg-ink py-20"}>
      <div className="container-n7">
        <div className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(110deg,#021a24,#032532_65%,#05466b)] px-7 py-10  md:px-20 md:py-20">
          <div
            className={`pointer-events-none absolute select-none whitespace-nowrap text-transparent ${backgroundTextClass}`}
            aria-hidden="true"
          >
            {light ? "N7" : "CB7"}
          </div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-[470px] text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] md:text-[40px]">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="mt-6 text-white/[0.58]">CB7 helps your financial institution improve the client experience, <br /> automate and optimize procedures, simplify banking operations</p>
            </div>
            <a className="btn-secondary border-white/40 bg-white/5" href="#contact">CONTACT US</a>
            <a className="btn-primary" href="#contact">REQUEST DEMO</a>
          </div>
        </div>
      </div>
    </section>
  );
}