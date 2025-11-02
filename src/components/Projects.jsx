import React from 'react';
import { Code, Globe, Github } from 'lucide-react';

const projects = [
  {
    title: 'Voice Agent with Tools',
    description:
      'Hybrid voice agent with function-calling for calendar, email triage, and knowledge base search. Low-latency streaming & barge‑in.',
    tags: ['LLM', 'Realtime', 'Tools', 'RAG'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Evaluation Harness',
    description:
      'Unified offline/online LLM evals with rubrics, golden sets, pairwise ranking, and auto-metrics across tasks.',
    tags: ['Eval', 'Observability', 'MLOps'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Vector Search Service',
    description:
      'High-throughput semantic search with hybrid BM25+embeddings, ingestion workers, and freshness SLAs.',
    tags: ['Search', 'Embeddings', 'Systems'],
    link: '#',
    repo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Selected Work</h2>
        <p className="mt-4 text-lg text-gray-700">
          Real-world, production-ready AI projects. Each card includes a quick summary and the core themes.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm transition hover:shadow-md"
          >
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 opacity-60" />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={p.link}
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-2 text-white transition hover:bg-black"
                >
                  <Globe className="h-4 w-4" /> Live
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-2 text-gray-800 transition hover:border-gray-400"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
