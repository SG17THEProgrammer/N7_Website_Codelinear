import { ChevronDown } from "lucide-react";

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
          </div>
          <a
            className="rounded-[3px] border border-white/[0.18] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white hover:text-blue-500 sm:px-4 sm:tracking-[0.1em]"
            href="#contact"
          >
            <span className="hidden sm:inline">Request Demo</span>
          </a>
        </div>
      </nav>
    </header>
  );
}