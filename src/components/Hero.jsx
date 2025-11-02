import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for aura, do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute -inset-x-32 top-0 h-72 bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),transparent)] blur-2xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/40 bg-white/60 px-4 py-2 text-sm text-purple-700 backdrop-blur">
          <Sparkles className="h-4 w-4" />
          AI Voice Agent Aura — Real-time, Futuristic, Minimal
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl">
          Aadya Madankar
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-lg text-gray-700 sm:text-xl">
          AI Engineer crafting intelligent products — from applied LLMs and multi-agent systems to end‑to‑end ML platforms. Every interaction on this site is enhanced by AI.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleScrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Explore Work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/70 px-6 py-3 text-gray-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-gray-400"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
