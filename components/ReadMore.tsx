import { ArrowRight } from "lucide-react";

export const ReadMore = ({ msg = "Learn More" , align = "left" , per=0}) => {
  return (
  <div
  className={`${
    align === "left" ? "text-left" : "text-right"
  }`}
  style={align !== "left" ? { marginRight: `${per}em` } : {}}
>
    <a
      className="group mt-4 inline-flex items-center text-[12px] font-semibold text-cyan uppercase"
      href="#contact"
    >
      <span className="relative inline-flex items-center gap-2 pb-1">
        {msg}

        <ArrowRight
          size={13}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

        {/* underline */}
        <span className="absolute left-0 bottom-0 h-[1px] w-[22%] bg-cyan transition-all duration-300 ease-out group-hover:w-[100%]"></span>
      </span>
    </a>
    </div>
  );
};