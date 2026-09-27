'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from 'react-icons/fi';

const tracks = [
  {
    title: 'Quantum Intelligence',
    desc: 'Design high-performance models, adaptive architectures, and decision systems tailored for complex environments.',
  },
  {
    title: 'Ethical Emergence',
    desc: 'Build trustworthy AI systems by exploring alignment, governance, and human-centered intelligence design.',
  },
  {
    title: 'Neural Symbiosis',
    desc: 'Create systems that amplify human capability through multimodal interaction, augmentation, and human-AI collaboration.',
  },
];

const programs = [
  { icon: '🧠', title: 'Deep Learning Lab', students: '12 cohorts', focus: 'Foundation theory and advanced modelling' },
  { icon: '⚡', title: 'Emergent Systems', students: '8 cohorts', focus: 'Adaptive systems and real-world deployment' },
  { icon: '🔬', title: 'Research Studio', students: 'Unlimited', focus: 'Frontier experimentation and publication' },
];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="bg-slate-950 text-white overflow-hidden">
      <nav
        className={`fixed z-50 w-full px-6 py-5 md:px-12 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-sm font-bold tracking-[0.2em]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-xs font-black text-slate-950">
              Ξ
            </span>
            <span className="hidden sm:inline">NEXIAL</span>
          </Link>

          <div className="hidden items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] md:flex">
            <Link href="#programme" className="hover:text-cyan-400 transition">Programme</Link>
            <Link href="#research" className="hover:text-cyan-400 transition">Research</Link>
            <Link href="/curriculum" className="hover:text-cyan-400 transition">Curriculum</Link>
            <Link href="/admissions" className="hover:text-cyan-400 transition">Admissions</Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="text-xl md:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          <Link
            href="/admissions"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-xs font-bold text-slate-950 md:flex"
          >
            Apply now <FiArrowUpRight />
          </Link>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-slate-950 px-8 text-3xl font-bold md:hidden"
        >
          <Link href="#programme" onClick={() => setOpen(false)}>Programme</Link>
          <Link href="#research" onClick={() => setOpen(false)}>Research</Link>
          <Link href="/curriculum" onClick={() => setOpen(false)}>Curriculum</Link>
          <Link href="/admissions" onClick={() => setOpen(false)}>Admissions</Link>
        </motion.div>
      )}

      <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 pt-20 md:px-12">
        <div className="absolute left-[-8rem] top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-[-8rem] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400"
          >
            <span className="h-px w-12 bg-cyan-400" /> Intelligence evolved <span className="h-px w-12 bg-cyan-400" />
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-7xl font-black leading-none text-transparent md:text-8xl lg:text-9xl"
          >
            NEXIAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-2xl font-light leading-relaxed text-slate-300 md:text-4xl"
          >
            An intensive master’s degree for architects of intelligent systems. Research-driven, globally connected, and built for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              href="#programme"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950"
            >
              Explore the programme <FiArrowUpRight />
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-full border-2 border-cyan-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              Apply to 2026 cohort
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-sm uppercase tracking-[0.25em] text-slate-500"
          >
            12-month intensive • London-based • Applications open now
          </motion.p>
        </motion.div>
      </section>

      <section id="programme" className="relative px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">01 — The Programme</p>
            <h2 className="mb-6 text-6xl font-black leading-tight md:text-8xl">
              Three Specializations.
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">One Purpose.</span>
            </h2>
            <p className="max-w-2xl text-xl text-slate-400">Master cutting-edge AI research. Build with purpose. Lead the next generation of intelligent systems.</p>
          </motion.div>

          <div className="mb-20 grid gap-8 md:grid-cols-3">
            {tracks.map((track, idx) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                onClick={() => setActiveTrack(idx)}
                className={`cursor-pointer rounded-2xl p-8 transition-all duration-300 ${
                  activeTrack === idx
                    ? 'border-2 border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-600/20'
                    : 'border border-slate-700 bg-slate-800/50 hover:border-cyan-400'
                }`}
              >
                <h3 className="mb-3 text-2xl font-bold">{track.title}</h3>
                <p className="text-sm text-slate-400">{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/50 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-5xl font-black md:text-7xl">
            Study Formats
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-10 transition hover:border-cyan-400"
              >
                <div className="mb-4 text-5xl">{prog.icon}</div>
                <h3 className="mb-2 text-2xl font-bold">{prog.title}</h3>
                <p className="mb-4 text-sm font-bold text-cyan-400">{prog.students}</p>
                <p className="text-sm text-slate-400">{prog.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="relative overflow-hidden px-6 py-32 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">02 — Research</p>
            <h2 className="text-6xl font-black leading-tight md:text-8xl">
              Frontier Work.
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Real Impact.</span>
            </h2>
          </motion.div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex aspect-square items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-6xl font-black text-cyan-400/40">
                [AI Labs]
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="mb-6 text-4xl font-bold">Collaborate with leading researchers</h3>
              <ul className="space-y-4 text-slate-300">
                {['Live projects from industry partners', 'Access to state-of-the-art compute', 'Publish in top venues', 'Build production systems'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheck className="mt-1 flex-shrink-0 text-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="faculty" className="bg-slate-900/50 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-5xl font-black md:text-7xl">
            Learn from pioneers
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-slate-700 bg-slate-800/80 p-6 transition hover:border-cyan-400"
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
                <h4 className="mb-1 font-bold">Dr. Name</h4>
                <p className="mb-2 text-xs font-bold uppercase text-cyan-400">Specialization</p>
                <p className="text-sm text-slate-400">Research focus and credentials</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="relative overflow-hidden px-6 py-32 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-600/10" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">03 — Admissions 2026</p>
            <h2 className="mb-8 text-6xl font-black leading-tight md:text-8xl">
              Your Next
              <span className="block">Chapter Starts</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Here</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-300">
              We seek curious, driven individuals ready to shape the future of AI. No background required—only passion and rigor.
            </p>

            <div className="mx-auto mb-12 grid max-w-3xl gap-6 md:grid-cols-3">
              {[
                { label: 'Applications Open', value: '01 October 2025' },
                { label: 'Cohort Begins', value: 'September 2026' },
                { label: 'Location', value: 'London + Global' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 p-6"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/admissions"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950"
            >
              Start your application <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-12 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-bold">NEXIAL</h4>
              <p className="text-sm text-slate-400">Master the intelligence age</p>
            </div>

            {[
              { title: 'Programme', links: ['Overview', 'Tracks', 'Faculty'] },
              { title: 'Connect', links: ['Admissions', 'Research', 'Events'] },
              { title: 'Social', links: ['Twitter', 'LinkedIn', 'GitHub'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-sm font-bold">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-400 transition hover:text-cyan-400">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
            <p>© 2026 NEXIAL Institute. Built for the future.</p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <a href="#" className="transition hover:text-cyan-400"><FiTwitter /></a>
              <a href="#" className="transition hover:text-cyan-400"><FiLinkedin /></a>
              <a href="#" className="transition hover:text-cyan-400"><FiGithub /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
