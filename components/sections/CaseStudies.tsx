import { ReadMore } from "../ReadMore";

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-line bg-ink py-24">
      <div className="container-n7">
        <h2 className="mb-12 text-center text-[32px] font-semibold tracking-[-0.035em]">Our Case Studies</h2>
        <div className="mx-auto grid max-w-[910px] items-center gap-10 md:grid-cols-[1fr_1fr] bg-[#031b1f] px-20 py-5 rounded-[20px]">
          <img src="/images/icons/fourx.png" alt="" className="rounded-[10px]" />
          <div>
            <p className="eyebrow">GETTING STARTED </p>
            <h3 className="mt-4 max-w-[390px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
              How we help brand reach out to more people
            </h3>
            <p className="mt-6 text-white/[0.58] font-medium">Zoomerr</p>
            <a
              href="#"
              className="mt-12 flex h-10 items-center justify-center rounded-[10px] border border-cyan/25 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60 transition hover:border-white hover:text-blue-500 hover:bg-white"
            >
              Read More
            </a>
          </div>
        </div>
        <ReadMore msg="view all" align="right" per={4} />
      </div>
    </section>
  );
}