import { CircleCheck } from "lucide-react";
import { ReadMore } from "../ReadMore";
import { mobileBullets, phoneFeatures, phones } from "./data";

export function MobileBanking() {
  return (
    <section id="banking" className="relative overflow-hidden bg-mist py-24 text-ink md:py-32">
      <div className="absolute -left-40 top-24 h-[650px] w-[650px] rounded-full border border-cyan/20" />
      <div className="absolute left-24 top-64 h-[420px] w-[420px] rounded-full border border-cyan/15" />
      <div className="container-n7 relative">
        <div className="grid gap-12 md:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className="max-w-[420px] text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[48px]">
              Digital banking <br /> out-of-the-box
            </h2>
            <p className="mt-5 max-w-[405px] text-[14px] leading-7 text-slate-600">
              N7 helps your financial institution improve the client experience, automate and optimize procedures.
            </p>
            <a className="btn-primary mt-8" href="#contact">REQUEST DEMO</a>
            <br />
            <ReadMore msg="learn more" align="left" />
          </div>
          <div className="grid gap-20">
            {phoneFeatures.map(([title, text], index) => (
              <div key={title} className="grid items-center gap-9 sm:grid-cols-[205px_minmax(0,1fr)]">
                <img
                  src={phones[index]}
                  alt=""
                  className={`mx-auto h-[405px] w-[205px] object-contain mix-blend-darken ${index % 2 === 0 ? "sm:order-1" : "sm:order-2"}`}
                />

                <div className={index % 2 === 0 ? "sm:order-2" : "sm:order-1"}>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-4 max-w-[410px] text-[13px] leading-7 text-slate-600">{text}</p>
                  <ul className="mt-5 space-y-3 text-[12px] leading-5 text-slate-600">
                    {mobileBullets[index].map((elem, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CircleCheck className="h-6 w-6 fill-blue-500 stroke-white shrink-0 mt-[2px]" />
                        <span className="mt-0.5">{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}