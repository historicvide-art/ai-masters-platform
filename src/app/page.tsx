'use client';

import { useState, useEffect } from 'react';
import { FiArrowUpRight, FiMenu, FiX, FiPlay, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';

const tracks = [
  { title: 'Quantum Intelligence', desc: 'Next-generation AI architecture and quantum-ready algorithms' },
  { title: 'Ethical Emergence', desc: 'Responsible systems, alignment research, societal impact' },
  { title: 'Neural Symbiosis', desc: 'Human-AI collaboration, cognitive enhancement, adaptive systems' }
];

const programs = [
  { icon: '🧠', title: 'Deep Learning Lab', students: '12 cohorts', focus: 'Foundation theory' },
  { icon: '⚡', title: 'Emergent Systems', students: '8 cohorts', focus: 'Complex adaptation' },
  { icon: '🔬', title: 'Research Studio', students: 'unlimited', focus: 'Frontier work' }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return <main className="bg-slate-950 text-white overflow-hidden">
    {/* Navigation */}
    <nav className={`fixed z-50 w-full px-6 py-5 md:px-12 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.a href="#top" className="flex items-center gap-3 text-sm font-bold tracking-[.2em]"
          whileHover={{ scale: 1.05 }}>
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xs font-black text-slate-950">Ξ</span>
          <span className="hidden sm:inline">NEXIAL</span>
        </motion.a>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          {['Programme', 'Research', 'Faculty', 'Admissions'].map(item => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ color: '#06b6d4' }} className="hover:text-cyan-400 transition">{item}</motion.a>
          ))}
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
        <motion.a href="#admissions" whileHover={{ scale: 1.05 }} className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 px-6 py-3 rounded-full text-xs font-bold">
          Apply now <FiArrowUpRight />
        </motion.a>
      </div>
    </nav>

    {/* Mobile Menu */}
    {open && (
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed inset-0 z-40 flex flex-col justify-center gap-8 bg-slate-950 px-8 text-3xl font-bold md:hidden pt-20">
        {['Programme', 'Research', 'Faculty', 'Admissions'].map(item => (
          <motion.a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} whileHover={{ x: 10 }}>{item}</motion.a>
        ))}
      </motion.div>
    )}

    {/* Hero Section */}
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 md:px-12 py-24">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

      <motion.div className="relative z-10 text-center max-w-5xl" variants={containerVariants} initial="hidden" animate="visible">
        <motion.p variants={itemVariants} className="text-xs font-bold uppercase tracking-[.3em] text-cyan-400 mb-6 flex items-center justify-center gap-3">
          <span className="w-12 h-px bg-cyan-400" /> Intelligence evolved <span className="w-12 h-px bg-cyan-400" />
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none bg-gradient-to-r from-cyan-200 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          NEXIAL
        </motion.h1>

        <motion.p variants={itemVariants} className="text-2xl md:text-4xl font-light text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          An intensive master's degree for architects of intelligent systems. Research-driven. Industry-connected. Globally-impactful.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a href="#programme" whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 rounded-full font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            Explore the programme <FiArrowUpRight />
          </motion.a>
          <motion.a href="#admissions" whileHover={{ scale: 1.05 }} className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-cyan-400/10 transition">
            Apply to 2026 cohort
          </motion.a>
        </motion.div>

        <motion.p variants={itemVariants} className="mt-16 text-slate-500 text-sm uppercase tracking-widest">
          12-month intensive • London-based • Applications open now
        </motion.p>
      </motion.div>

      <motion.div className="absolute bottom-10 left-10 text-sm uppercase tracking-widest text-slate-600 hidden lg:block" animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
        Scroll to explore ↓
      </motion.div>
    </section>

    {/* Programme Section */}
    <section id="programme" className="relative py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-cyan-400 mb-4">01 — The Programme</p>
          <h2 className="text-6xl md:text-8xl font-black leading-tight mb-6">Three Specializations.<br/><span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">One Purpose.</span></h2>
          <p className="text-xl text-slate-400 max-w-2xl">Master cutting-edge AI research. Build with purpose. Lead the next generation of intelligent systems.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => setActiveTrack(idx)}
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeTrack === idx
                  ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-cyan-400'
              }`}
            >
              <h3 className="text-2xl font-bold mb-3">{track.title}</h3>
              <p className="text-slate-400 text-sm">{track.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Programmes Cards */}
    <section className="py-32 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl md:text-7xl font-black mb-16">Study Formats</motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="p-10 bg-slate-800/80 rounded-2xl border border-slate-700 hover:border-cyan-400 transition group"
            >
              <div className="text-5xl mb-4">{prog.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
              <p className="text-cyan-400 text-sm font-bold mb-4">{prog.students}</p>
              <p className="text-slate-400 text-sm">{prog.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Research Section */}
    <section id="research" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-cyan-400 mb-4">02 — Research</p>
          <h2 className="text-6xl md:text-8xl font-black leading-tight">Frontier Work.<br/><span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Real Impact.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-6xl font-black text-cyan-400/40">
              [AI Labs]
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-4xl font-bold mb-6">Collaborate with leading researchers</h3>
            <ul className="space-y-4 text-slate-300">
              {['Live projects from industry partners', 'Access to state-of-the-art compute', 'Publish in top venues', 'Build production systems'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Faculty Section */}
    <section id="faculty" className="py-32 px-6 md:px-12 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl md:text-7xl font-black mb-16">Learn from pioneers</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-slate-800/80 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mb-4" />
              <h4 className="font-bold mb-1">Dr. Name</h4>
              <p className="text-xs text-cyan-400 mb-2">Specialization</p>
              <p className="text-sm text-slate-400">Research focus and credentials</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Admissions Section */}
    <section id="admissions" className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-600/10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-cyan-400 mb-4">03 — Admissions 2026</p>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">Your Next<br/>Chapter Starts<br/><span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">Here</span></h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">We seek curious, driven individuals ready to shape the future of AI. No background required—only passion and rigor.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { label: 'Applications Open', value: '01 October 2025' },
              { label: 'Cohort Begins', value: 'September 2026' },
              { label: 'Location', value: 'London + Global' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-xs text-cyan-400 font-bold mb-2 uppercase">{item.label}</p>
                <p className="text-xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.a href="mailto:admissions@nexial.ai" whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 rounded-full font-bold text-sm uppercase tracking-wider">
            Start your application <FiArrowUpRight />
          </motion.a>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-slate-800 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">NEXIAL</h4>
            <p className="text-sm text-slate-400">Master the intelligence age</p>
          </div>
          {[
            { title: 'Programme', links: ['Overview', 'Tracks', 'Faculty'] },
            { title: 'Connect', links: ['Admissions', 'Research', 'Events'] },
            { title: 'Social', links: ['Twitter', 'LinkedIn', 'GitHub'] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-bold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 NEXIAL Institute. Built for the future.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition"><FiTwitter /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FiLinkedin /></a>
            <a href="#" className="hover:text-cyan-400 transition"><FiGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  </main>;
}
