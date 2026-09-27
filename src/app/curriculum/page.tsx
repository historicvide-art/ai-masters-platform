'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

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
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300 transition">
          <FiArrowLeft /> Back home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Curriculum</p>
          <h1 className="mb-8 text-5xl font-black md:text-7xl">A roadmap to research and impact.</h1>
          <p className="mb-12 max-w-3xl text-xl text-slate-300">
            Our 12-month curriculum is designed to take you from foundational concepts to cutting-edge research and practical deployment. Each module builds upon the previous, creating a coherent progression toward mastery.
          </p>

          <div className="grid gap-6">
            {modules.map((module, idx) => (
              <motion.div
                key={module}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800/50 p-6 hover:border-cyan-400 transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-slate-950">
                    {idx + 1}
                  </div>
                  <h2 className="text-xl font-bold">{module}</h2>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-16 rounded-2xl border border-slate-700 bg-slate-900/50 p-8">
            <h2 className="mb-6 text-2xl font-bold">What You'll Master</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Advanced neural network architectures',
                'Large language model fundamentals',
                'Ethical AI and governance frameworks',
                'Research methodology and publication',
                'Production-grade system design',
                'Human-centered AI development',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FiCheck className="mt-1 flex-shrink-0 text-cyan-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
