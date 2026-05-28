import { ReadMore } from "../ReadMore";
import { features, icons } from "./data";

export function Solutions() {
  return (
    <section id="solutions" className="border-b border-line bg-ink py-24 md:py-32">
      <div className="container-n7 grid gap-14 md:grid-cols-[.9fr_1.3fr]">
        <div>
          <h2 className="max-w-[360px] text-[31px] font-semibold leading-[1.12] tracking-[-0.035em]">
            All of our solutions are tailor-made to your needs
          </h2>
          <a className="btn-secondary mt-9 hover:bg-white hover:text-blue-500" href="#contact">REQUEST DEMO</a>
        </div>
        <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article key={feature} className={index === 4 ? "sm:col-span-1" : ""}>
              <div className="flex justify-between items-center w-[70%] text-gray-400 text-xs">
                <img src={icons[index]} alt="icon" className="mb-4" />
                <span>{index === 3 || index === 4 ? "NBFC" : ""}</span>
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">{feature}</h3>
              <p className="body-copy mt-4">
                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.
              </p>
              <ReadMore msg="learn more" align="left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}