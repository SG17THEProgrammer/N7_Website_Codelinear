import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 pt-4">
      <nav className="container-n7">
        <div className="mx-auto flex h-12 max-w-[620px] items-center justify-between rounded-[5px] bg-[#212527]/50 px-4 backdrop-blur-md text-upper ">
          <a className="text-xl font-semibold tracking-[-0.03em]" href="#top">
            N7
          </a>
          <div className="flex items-center gap-4 sm:gap-8 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.1em] text-white/[0.52]">
            <a className="transition text-white" href="#solutions">
              <span className="flex items-center">
                Solutions <ChevronDown size={14} />
              </span>
            </a>

            <a className="transition text-white" href="#banking">
              <span className="flex items-center">
                Resources <ChevronDown size={14} />
              </span>
            </a>

            <a className="transition text-white" href="#case-studies">
              About Us
            </a>
          </div>
          <a
            className="rounded-[3px] border border-white-500 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition hover:text-blue-500 hover:bg-white sm:px-4 sm:tracking-[0.1em]"
            href="#contact"
          >
            <span className="hidden sm:inline">Request Demo</span>
          </a>
        </div>
      </nav>
    </header>
  );
}