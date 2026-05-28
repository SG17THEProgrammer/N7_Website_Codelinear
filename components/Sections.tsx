import { ArrowRight, ChevronDown, ChevronRight, CircleCheck, Sparkles } from "lucide-react";
import { AssetSlot } from "./AssetSlot";

const features = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System"
];

const icons = [
  "/images/icons/circle.png",
  "/images/icons/cross.png",
  "/images/icons/star.png",
  "/images/icons/diamond.png",
  "/images/icons/x.png"
]

const phoneFeatures = [
  ["Fully compliant with regulatory requirements", "The application is set up with digital onboarding, KYC automation, card management and transaction monitoring."],
  ["It is digitized & secure", "A light mobile-first experience with fast authentication, clear account states and operational safety."],
  ["No technical barriers", "Cloud-ready integration patterns with payment, compliance and customer platforms."]
];

const posts = [
  "How to transition from a traditional to a digital bank",
  "How to transition from a traditional to a digital bank",
  "How to transition from a traditional to a digital bank"
];

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-4">
      <nav className="container-n7">
        <div className="mx-auto flex h-9 max-w-[620px] items-center justify-between rounded-[5px] border border-white/[0.14] bg-[#06191d]/80 px-4 backdrop-blur-xl text-upper ">
          <a className="text-[13px] font-bold tracking-[-0.03em]" href="#top">
            N7
          </a>
          <div className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.1em] text-white/[0.52] sm:flex">
            <a className="transition text-white" href="#solutions"><span className="flex items-center">Solutions <ChevronDown /></span></a>
            <a className="transition text-white" href="#banking"><span className="flex items-center">Resources <ChevronDown /></span></a>
            <a className="transition text-white" href="#case-studies">About Us</a>
            {/* <a className="transition hover:text-white" href="#contact">Contact</a> */}
          </div>
          <a
            className="rounded-[3px] border border-white/[0.18] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white hover:text-blue-500 sm:px-4 sm:tracking-[0.1em]"
            href="#contact"
          >
            <span className="hidden sm:inline">
              Request Demo
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}

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
            <a className="btn-primary hover:bg-white hover:text-blue-500" href="#contact" >Request Demo</a>
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
          {/* <AssetSlot className="absolute left-0 top-[292px] h-[88px] w-[245px] rounded-[6px] md:top-[168px]" variant="dashboard" label="Card" /> */}
          {/* <AssetSlot className="absolute right-0 top-[250px] h-[116px] w-[190px] rounded-[6px] md:top-[126px]" variant="dashboard" label="Widget" /> */}
        </div>
      </div>
    </section>
  );
}

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
              {/* <div className="mb-5 grid h-8 w-8 place-items-center rounded border border-cyan/20 text-cyan">
                <Sparkles size={16} strokeWidth={1.6} />
              </div> */}
              <div className="flex justify-between items-center w-[70%] text-gray-400 text-xs">
                <img src={icons[index]} alt="icon" className="mb-4" />
                <span>{index === 3 || index === 4 ? "NBFC" : ""}</span>
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-white">{feature}</h3>
              <p className="body-copy mt-4">
                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-cyan uppercase"
                href="#contact"
              >
                <span className="relative inline-block">
                  learn
                  <span className="absolute left-0 -bottom-0.5 h-[1px] w-[70%] bg-cyan"></span>
                </span>
                more
                <ArrowRight size={13} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreBanking() {
  return (
    <section className="overflow-hidden border-b border-line bg-ink py-24">
      <div className="container-n7 grid items-center gap-14 md:grid-cols-[.88fr_1.12fr]">
        <div>
          <h2 className="section-title max-w-[520px]">A complete cloud-based core banking.</h2>
          <p className="body-copy mt-5 max-w-[430px]">
            Modernize your bank with a scalable platform designed for product, account, transaction and customer workflows.
          </p>
          <a className="btn-primary mt-8 hover:text-blue-500 hover:bg-white" href="#contact" >REQUEST DEMO</a>
          <br />
          <a
            className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold text-cyan uppercase"
            href="#contact"
          >
            <span className="relative inline-block">
              learn
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-[70%] bg-cyan"></span>
            </span>
            more
            <ArrowRight size={13} />
          </a>
        </div>
        {/* <AssetSlot className="h-[265px] w-full md:w-[400px] md:translate-x-8" variant="dashboard" label="Dashboard" /> */}
        <img src={"/images/dashboard/lapGraph.jpg"} alt="error" className="bg:transparent" />
      </div>
    </section>
  );
}

export function Efficiency() {
  const bullets = ["Customer-On Boarding", "CRM Activities", "Managing deposits and withdrawals", "Configuring New Banking Products", "Transaction management", "Loan disbursal and Loan management", "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."];

  return (
    <section className="overflow-hidden border-b border-line bg-ink py-24">
      <div className="container-n7 grid items-center gap-16 md:grid-cols-[1fr_1fr]">
        {/* <AssetSlot className="h-[330px] w-full md:w-[520px] md:-translate-x-10" variant="dashboard" label="Operations" /> */}
        <img src={"/images/dashboard/kyc.jpg"} alt="error" />
        <div>
          <h2 className="max-w-[520px] text-[27px] font-semibold leading-[1.16] tracking-[-0.025em]">
            Run a more efficient, flexible and digitally connected core banking system
          </h2>
          <p className="mt-4">What will you get:</p>
          <div className="mt-3 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-[12px] leading-5 text-white/[0.58]"
              >
                <CircleCheck className="h-4 w-4 fill-blue-500 text-white shrink-0 mt-[2px]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlueBanner({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "bg-mist py-16" : "bg-ink py-20"}>
      <div className="container-n7">
        <div className="relative overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#1e3a8a,#2563eb_55%,#1d4ed8)] px-7 py-10 shadow-glow md:px-14 md:py-14">
          <div className="absolute inset-y-0 right-0 w-[78%]  border-l border-white/[0.14] text-[180px] font-semibold leading-none tracking-[0.2em] text-white/[0.08] md:text-[400px] -mt-4">
            CB7
          </div>
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>

              <h2 className="max-w-[470px] text-[30px] font-semibold leading-[1.15] tracking-[-0.035em] md:text-[40px]">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="mt-4 text-white/[0.58]">CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations</p>

            </div>
            <a className="btn-secondary border-white/40 bg-white/5" href="#contact">CONTACT US</a>
            <a className="btn-secondary border-white/40 bg-white/5" href="#contact">REQUEST DEMO</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  return (
    <div className="overflow-hidden bg-white py-4 text-ink">
      <div className="marquee-track flex w-max gap-9 whitespace-nowrap text-[25px] font-semibold tracking-[-0.03em]">
        {Array.from({ length: 2 }).map((_, group) => (
          <div key={group} className="flex gap-9">
            <span className="text-cyan">N7</span><span>✳</span><span>Say</span><span>👋</span><span>to the new way of banking</span><span className="text-cyan">CB7</span><span>✳</span><span>Say</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileBanking() {
  return (
    <section id="banking" className="relative overflow-hidden bg-mist py-24 text-ink md:py-32">
      <div className="absolute -left-40 top-24 h-[650px] w-[650px] rounded-full border border-cyan/20" />
      <div className="absolute left-24 top-64 h-[420px] w-[420px] rounded-full border border-cyan/15" />
      <div className="container-n7 relative">
        <div className="grid gap-12 md:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className="max-w-[420px] text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] md:text-[48px]">
              Digital banking out-of-the-box
            </h2>
            <p className="mt-5 max-w-[405px] text-[14px] leading-7 text-slate-600">
              N7 gives digital financial institutions the tools to launch fast and scale cleanly.
            </p>
            <a className="btn-primary mt-8" href="#contact">ABOUT N7</a>
          </div>
          <div className="grid gap-16">
            {phoneFeatures.map(([title, text], index) => (
              <div key={title} className={`grid items-center gap-9 sm:grid-cols-[210px_1fr] ${index === 1 ? "sm:ml-48" : index === 2 ? "sm:ml-20" : ""}`}>
                <AssetSlot className="mx-auto h-[405px] w-[205px] bg-white" variant="phone" label="Phone" />
                <div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em]">{title}</h3>
                  <p className="mt-4 max-w-[410px] text-[13px] leading-7 text-slate-600">{text}</p>
                  <ul className="mt-5 space-y-3 text-[12px] leading-5 text-slate-600">
                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-cyan" />Management Security System</li>
                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-cyan" />Fully Contactless API System</li>
                    <li className="flex gap-3"><span className="mt-1.5 h-2 w-2 rounded-full bg-cyan" />Customer Information System</li>
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

export function Articles() {
  return (
    <section className="border-b border-line bg-ink py-24">
      <div className="container-n7 grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <h2 className="max-w-[390px] text-[27px] font-semibold leading-[1.15] tracking-[-0.03em]">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a className="btn-secondary mt-8" href="#case-studies">VIEW NEWS</a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <ArticleCard large />
          {posts.slice(1).map((post) => <ArticleCard key={post} title={post} />)}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ large = false, title = "How to transition from a traditional to a digital bank" }) {
  return (
    <article className={large ? "group sm:row-span-2" : "group"}>
      {large && <AssetSlot className="mb-5 h-[220px]" variant="pattern" label="" />}
      <div className="rounded-[6px] border border-cyan/10 bg-[#031b1f] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan/35">
        <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-cyan">N7 insights</p>
        <h3 className="text-[20px] font-semibold leading-[1.18] tracking-[-0.03em]">{title}</h3>
        <a className="mt-7 flex h-8 items-center justify-between rounded-[4px] border border-white/12 px-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/70 transition group-hover:border-cyan group-hover:text-cyan" href="#contact">
          Read more <ChevronRight size={14} />
        </a>
      </div>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-line bg-ink py-24">
      <div className="container-n7">
        <h2 className="mb-12 text-center text-[32px] font-semibold tracking-[-0.035em]">Our Case Studies</h2>
        <div className="mx-auto grid max-w-[910px] items-center gap-10 md:grid-cols-[1fr_1fr]">
          <AssetSlot className="h-[285px]" variant="pattern" label="" />
          <div>
            <p className="eyebrow">Case studies</p>
            <h3 className="mt-4 max-w-[390px] text-[34px] font-semibold leading-[1.08] tracking-[-0.04em]">
              How we help brand reach out to more people
            </h3>
            <a className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-cyan" href="#contact">
              Discover more <ArrowRight size={13} />
            </a>
            <div className="mt-10 h-8 rounded-[4px] border border-cyan/[0.18]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTAFooter() {
  return (
    <>
      <section id="contact" className="border-b border-line bg-ink py-24">
        <div className="container-n7 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-[500px] text-[35px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="body-copy mt-5 max-w-[540px]">
              Let your customers move faster with a complete cloud-based banking foundation.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="btn-secondary" href="mailto:hello@n7.example">CONTACT US</a>
            <a className="btn-primary" href="mailto:hello@n7.example">ABOUT N7</a>
          </div>
        </div>
      </section>
      <footer className="bg-ink py-20">
        <div className="container-n7 grid gap-12 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
          <div className="text-[150px] font-semibold leading-none tracking-[-0.12em] text-cyan md:text-[190px]">N7</div>
          {["Company", "Data", "Contact"].map((group) => (
            <div key={group}>
              <h3 className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white">{group}</h3>
              <p className="body-copy max-w-[240px]">
                Cloud banking, payment operations, digital onboarding and customer management for the next generation of finance.
              </p>
            </div>
          ))}
        </div>
        <div className="container-n7 mt-14 border-t border-line pt-8 text-[11px] text-white/[0.32]">
          © 2026 N7 Banking. All rights reserved.
        </div>
      </footer>
    </>
  );
}
