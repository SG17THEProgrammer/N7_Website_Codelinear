import { ReadMore } from "../ReadMore";

export function CoreBanking() {
  return (
    <section className="overflow-hidden border-b border-line bg-ink py-24">
      <div className="container-n7 grid items-center gap-14 md:grid-cols-[.88fr_1.12fr]">
        <div>
          <h2 className="section-title max-w-[520px]">A complete cloud-based core banking.</h2>
          <p className="body-copy mt-5 max-w-[430px]">
            Modernize your bank with a scalable platform designed for product, account, transaction and customer workflows.
          </p>
          <a className="btn-primary mt-8 hover:text-blue-500 hover:bg-white" href="#contact">REQUEST DEMO</a>
          <br />
          <ReadMore msg="learn more" align="left" />
        </div>
        <img src="/images/dashboard/amldash.png" alt="error" className="bg:transparent" />
      </div>
    </section>
  );
}