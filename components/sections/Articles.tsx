import { ReadMore } from "../ReadMore";
import { posts } from "./data";

type ArticleCardProps = {
  large?: boolean;
  title?: string;
  meta?: string;
};

function ArticleCard({
  large = false,
  title = "How to transition from a traditional to a digital bank",
  meta = "David Grohl 17/08/24"
}: ArticleCardProps) {
  if (large) {
    return (
      <article className="group rounded-[24px] bg-[#031b1f] p-6">
        <div className="grid items-center gap-8 sm:grid-cols-[320px_1fr]">
          <img src="/images/icons/fourx.png" alt="" className="w-full rounded-[10px] object-cover" />
          <div className="flex flex-col">
            <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-cyan">Getting Started</p>
            <h3 className="max-w-[420px] text-[30px] font-medium leading-[1.15] tracking-[-0.03em] text-white">
              {title}
            </h3>
            <p className="mt-5 text-[14px] text-cyan/70">{meta}</p>
            <a
              href="#"
              className="mt-10 flex h-10 items-center justify-center rounded-[10px] border border-cyan/25 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60 transition hover:border-white hover:text-blue-500 hover:bg-white"
            >
              Read More
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group rounded-[24px] bg-[#031b1f] p-8">
      <p className="mb-5 text-[10px] uppercase tracking-[0.18em] text-cyan">Getting Started</p>
      <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.03em] text-white">{title}</h3>
      <p className="mt-5 text-[14px] text-cyan/70">{meta}</p>
      <a
        href="#"
        className="mt-12 flex h-10 items-center justify-center rounded-[10px] border border-cyan/25 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/60 transition hover:border-white hover:text-blue-500 hover:bg-white"
      >
        Read More
      </a>
    </article>
  );
}

export function Articles() {
  return (
    <section className="border-b border-line bg-ink py-24">
      <div className="container-n7">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="max-w-[390px] text-[27px] font-semibold leading-[1.15] tracking-[-0.03em]">
              Get yourself up-to-speed on all the things happening in fintech
            </h2>

            <a className="btn-secondary mt-8" href="#case-studies">
              INSIGHTS
            </a>
          </div>

          <div className="grid gap-6">
            <ArticleCard large />

            <div className="grid gap-6 sm:grid-cols-2">
              {posts.slice(0, 2).map(([title, meta], idx) => (
                <ArticleCard key={idx} title={title} meta={meta} />
              ))}
            </div>
          </div>
        </div>

        {/* move inside container */}
        <ReadMore msg="Read all Insights" align="right" />
      </div>
    </section>
  );
}