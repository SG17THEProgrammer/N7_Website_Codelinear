import { CircleCheck } from "lucide-react";

const efficiencyBullets = [
  "Customer-On Boarding",
  "CRM Activities",
  "Managing deposits and withdrawals",
  "Configuring New Banking Products",
  "Transaction management",
  "Loan disbursal and Loan management",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
];

export function Efficiency() {
  return (
    <section className="overflow-hidden border-b border-line bg-ink py-24">
      <div className="container-n7 grid items-center gap-16 md:grid-cols-[1fr_1fr]">
        <img src="/images/dashboard/kyc.png" alt="error" />
        <div>
          <h2 className="max-w-[520px] text-[27px] font-semibold leading-[1.16] tracking-[-0.025em]">
            Run a more efficient, flexible and digitally connected core banking system
          </h2>
          <p className="mt-4">What will you get:</p>
          <div className="mt-3 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {efficiencyBullets.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[12px] leading-5 text-white/[0.58]">
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