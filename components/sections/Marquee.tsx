export function Marquee() {
  return (
    <div className="overflow-hidden bg-white py-4 text-ink">
      <div className="marquee-track flex w-max gap-9 whitespace-nowrap text-[25px] font-semibold tracking-[-0.03em]">
        {Array.from({ length: 2 }).map((_, group) => (
          <div key={group} className="flex gap-9">
            <span className="text-cyan">N7</span><span>*</span><span>Say</span><span>hi</span><span>to the new way of banking</span><span className="text-cyan">CB7</span><span>*</span><span>Say</span>
          </div>
        ))}
      </div>
    </div>
  );
}