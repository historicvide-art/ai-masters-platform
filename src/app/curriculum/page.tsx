import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">About NEXIAL</p>
        <h1 className="mb-8 text-5xl font-black md:text-7xl">Building the next generation of intelligence.</h1>
        <p className="mb-8 max-w-3xl text-xl text-slate-300">
          NEXIAL is a research-led university programme designed for people who want to shape the future of AI with rigor, creativity, and societal responsibility.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ['Research-first', 'Grounded in frontier innovation and practical deployment'],
            ['Human-centered', 'Designed for ethical systems and meaningful impact'],
            ['Global mindset', 'Collaboration across disciplines, nations, and industries'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <h2 className="mb-3 text-xl font-bold">{title}</h2>
              <p className="text-slate-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="inline-flex items-center rounded-full border border-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
