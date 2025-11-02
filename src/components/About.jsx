import React from 'react';
import { Brain, Cpu, BarChart3 } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: Brain,
      title: 'Applied LLMs',
      desc: 'Retrieval-augmented generation, tool-use, agents, and safety guardrails tuned for production.'
    },
    {
      icon: Cpu,
      title: 'ML Systems',
      desc: 'Feature stores, experiment tracking, CI/CD for models, and efficient serving & monitoring.'
    },
    {
      icon: BarChart3,
      title: 'Impact & Metrics',
      desc: 'Driving measurable outcomes with offline/online evals, AB testing, and telemetry pipelines.'
    }
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Aadya</h2>
        <p className="mt-4 text-lg text-gray-700">
          I build AI that ships. My craft blends research intuition with robust engineering: data pipelines, training, evaluation, and scalable serving. I love turning ambiguous ideas into delightful, reliable AI features.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-700">{desc}</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
