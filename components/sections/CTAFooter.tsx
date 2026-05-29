import { ArrowRight } from "lucide-react";
import { footerLinkGroups, footerLocations } from "./data";

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
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="btn-secondary" href="mailto:hello@n7.example">CONTACT US</a>
            <a className="btn-primary" href="mailto:hello@n7.example">REQUEST DEMO</a>
          </div>
        </div>
      </section>
      <footer className="bg-ink py-20 md:py-24">
        <div className="container-n7 grid lg:grid-cols-[260px_1fr] gap-16 items-stretch">

          {/* LEFT SIDE - N7 full height */}
          <div className="h-full flex items-start">
            <div className="text-[210px] font-semibold leading-none md:text-[230px] -mt-10 -ml-6">
              <span className="bg-[linear-gradient(90deg,#03b0f2_0%,#4fd4ff_45%,#0284c7_100%)] bg-clip-text text-transparent transition-all duration-500 hover:bg-[linear-gradient(90deg,#67d7ff_0%,#03b0f2_50%,#0369a1_100%)]">
                N7
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-16">

            {/* TOP: LOCATIONS */}
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {footerLocations.map((location) => (
                <address key={location.city + location.address} className="not-italic">
                  <h3 className="text-[17px] font-medium text-white">
                    {location.city}
                  </h3>
                  <p className="mt-6 max-w-[310px] text-[16px] leading-[1.38] text-white/60">
                    {location.address}
                  </p>
                </address>
              ))}
            </div>

            {/* MIDDLE: LINKS */}
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {footerLinkGroups.map((group) => (
                <nav key={group.title} aria-label={group.title}>
                  <h3 className="mb-5 text-[17px] font-medium text-white">
                    {group.title}
                  </h3>

                  <ul className="space-y-3.5">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="group grid max-w-[215px] grid-cols-[1fr_18px] items-start gap-4 text-[16px] leading-[1.25] text-white/60 transition hover:text-white"
                        >
                          <span>{link}</span>
                          <ArrowRight
                            className="mt-0.5 text-cyan transition group-hover:translate-x-1"
                            size={17}
                            strokeWidth={1.8}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            {/* BOTTOM: COPYRIGHT */}
            <div className="border-t border-line pt-8 text-[11px] text-white/[0.32]">
              Copyright (c) 2022 by Linktia Infosystems Limited - [CB7 and N7 as Commercial Brand] - [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}