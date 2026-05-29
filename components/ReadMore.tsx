import { ArrowRight } from "lucide-react";

export const ReadMore = ({
  msg = "Learn More",
  align = "left",
}) => {
  return (
    <div
      className={`mt-4 flex w-full ${
        align === "right" ? "justify-end" : "justify-start"
      }`}
    >
      <a
        className="group inline-flex items-center text-[12px] font-semibold text-cyan uppercase"
        href="#contact"
      >
        <span className="relative inline-flex items-center gap-2 pb-1">
          {msg}

          <ArrowRight
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

          <span className="absolute left-0 bottom-0 h-[1px] w-[22%] bg-cyan transition-all duration-300 ease-out group-hover:w-full" />
        </span>
      </a>
    </div>
  );
};