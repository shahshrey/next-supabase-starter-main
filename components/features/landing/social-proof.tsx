const COMPANIES = ["Northbeam", "Kettle & Co", "Lumen Labs", "Fieldwork", "Postmark Studio"];

export function SocialProof() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16">
      <p className="text-muted-foreground text-center text-xs font-medium tracking-widest uppercase">
        Keeping the lists straight at
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {COMPANIES.map((company) => (
          <span
            key={company}
            className="text-muted-foreground/70 text-lg font-semibold tracking-tight"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}
