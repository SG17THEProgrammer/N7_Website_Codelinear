import { clsx } from "clsx";

type AssetSlotProps = {
  className?: string;
  variant?: "hero" | "dashboard" | "phone" | "pattern" | "article";
  label?: string;
};

export function AssetSlot({ className, variant = "dashboard", label }: AssetSlotProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden border border-cyan/10 bg-[#06262b] shadow-card",
        variant === "phone" ? "rounded-[28px]" : "rounded-[8px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(5,191,255,.36),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.16),transparent_32%),linear-gradient(145deg,#06272c,#020f12)]" />
      {variant === "hero" && (
        <div className="absolute inset-7 rounded-[12px] bg-[linear-gradient(105deg,rgba(238,178,122,.62),rgba(234,248,255,.16)_52%,rgba(5,191,255,.25))]" />
      )}
      {variant === "dashboard" && <DashboardLines />}
      {variant === "phone" && <PhoneLines />}
      {variant === "pattern" && <PatternMark />}
      <span className="absolute bottom-4 right-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.38]">
        {label ?? "Asset"}
      </span>
    </div>
  );
}

function DashboardLines() {
  return (
    <div className="absolute inset-5 grid grid-rows-[auto_1fr_auto] gap-4">
      <div className="flex gap-2">
        <span className="h-2.5 w-16 rounded-full bg-rose-300/80" />
        <span className="h-2.5 w-24 rounded-full bg-yellow-200/80" />
        <span className="h-2.5 flex-1 rounded-full bg-cyan/50" />
      </div>
      <div className="grid grid-cols-[1.2fr_.8fr] gap-4">
        <div className="rounded bg-white/88 p-3">
          <div className="h-20 rounded border border-slate-200 bg-[repeating-linear-gradient(90deg,#d9eef7_0_1px,transparent_1px_28px),repeating-linear-gradient(0deg,#d9eef7_0_1px,transparent_1px_18px)]" />
          <div className="mt-3 grid grid-cols-5 gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-2 rounded-full bg-slate-300" />
            ))}
          </div>
        </div>
        <div className="rounded bg-white/88 p-3">
          <div className="mx-auto h-20 w-20 rounded-full border-[12px] border-cyan border-r-rose-400 border-t-yellow-300" />
          <div className="mt-3 space-y-2">
            <span className="block h-2 rounded-full bg-slate-300" />
            <span className="block h-2 w-2/3 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="h-2 rounded-full bg-white/[0.65]" />
        ))}
      </div>
    </div>
  );
}

function PhoneLines() {
  return (
    <div className="absolute inset-[10px] rounded-[22px] border-[5px] border-[#0b1114] bg-[#f8fcff] p-4 text-slate-900">
      <div className="mx-auto mb-5 h-3 w-16 rounded-b-xl bg-[#0b1114]" />
      <div className="mb-5 h-16 rounded-lg bg-slate-100" />
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-full bg-cobalt/85" />
            <span className="h-2 flex-1 rounded-full bg-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PatternMark() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-[#02171b]">
      <div className="grid grid-cols-2 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative h-20 w-20">
            <span className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 bg-cyan" />
            <span className="absolute inset-y-0 left-1/2 w-5 -translate-x-1/2 bg-cyan" />
            <span className="absolute inset-4 bg-[#02171b]" />
          </div>
        ))}
      </div>
    </div>
  );
}
