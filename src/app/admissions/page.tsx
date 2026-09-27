import Link from 'next/link';

const modules = [
  'Foundations of AI and Intelligence Systems',
  'Advanced Machine Learning and Optimisation',
  'Responsible AI and Governance',
  'Human-AI Collaboration',
  'Generative Systems and Creative Intelligence',
  'Capstone: Research-to-Production Mentoring',
];

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Curriculum</p>
        <h1 className="mb-8 text-5xl font-black md:text-7xl">A roadmap to research and impact.</h1>

        <div className="grid gap-6">
          {modules.map((module, idx) => (
            <div key={module} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Module {idx + 1}</span>
              <h2 className="text-2xl font-bold">{module}</h2>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="inline-flex items-center rounded-full border border-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
