import React, { useMemo, useRef, useState } from 'react';
import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';

// Lightweight on-device "AI" helper: pattern-based responses to common portfolio queries.
// Keeps the site fully client-side while making every interaction feel AI-assisted.
const useAadyaAssistant = () => {
  const respond = (input) => {
    const q = input.toLowerCase();
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return "Hey there! I'm Aadya's site assistant. Ask about projects, skills, or how I build with LLMs.";
    }
    if (q.includes('projects') || q.includes('work')) {
      return 'Aadya focuses on applied LLMs (RAG, agents, tool-use), evaluation harnesses, and search systems. Scroll up to Selected Work for highlights!';
    }
    if (q.includes('skills') || q.includes('stack') || q.includes('tools')) {
      return 'Core strengths: Python, TypeScript, FastAPI, React, vector DBs, orchestration, offline/online evals, and ML systems at scale.';
    }
    if (q.includes('contact') || q.includes('email')) {
      return "You can reach Aadya via email or LinkedIn below. She's open to collaborations and impactful AI roles.";
    }
    if (q.includes('rag') || q.includes('agent') || q.includes('llm')) {
      return 'For LLM features, Aadya emphasizes grounding with RAG, structured tool-calls, telemetry, and safety filters + human-in-the-loop where needed.';
    }
    return "Great question! While this is a lightweight on-device assistant, I can guide you: check the sections above or use the links below to connect.";
  };
  return { respond };
};

const Contact = () => {
  const { respond } = useAadyaAssistant();
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your on-page AI guide. Ask me about Aadya's work, skills, or availability." }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    const value = inputRef.current?.value?.trim();
    if (!value) return;
    const userMsg = { role: 'user', content: value };
    const reply = { role: 'assistant', content: respond(value) };
    setMessages((m) => [...m, userMsg, reply]);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s Build with AI</h2>
        <p className="mt-4 text-lg text-gray-700">
          Interested in collaborating or hiring? Drop a message. The assistant below can answer quick questions too.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Contact Card */}
        <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
          <p className="mt-2 text-gray-700">I typically respond within a day.</p>
          <div className="mt-6 space-y-3">
            <a
              href="mailto:hello@aadya.ai"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition hover:border-gray-300"
            >
              <Mail className="h-5 w-5 text-indigo-600" /> hello@aadya.ai
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition hover:border-gray-300"
            >
              <Github className="h-5 w-5 text-gray-900" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 transition hover:border-gray-300"
            >
              <Linkedin className="h-5 w-5 text-[#0A66C2]" /> LinkedIn
            </a>
          </div>
        </div>

        {/* AI Assistant */}
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-sm">
          <div className="border-b border-gray-100 bg-gradient-to-r from-fuchsia-50 via-indigo-50 to-cyan-50 px-6 py-4">
            <div className="flex items-center gap-2 text-indigo-700">
              <MessageCircle className="h-5 w-5" />
              <p className="font-medium">Ask Aadya (On‑page AI)</p>
            </div>
          </div>

          <div className="flex-1 space-y-4 p-6">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'assistant' ? 'text-gray-800' : 'text-gray-900'}>
                <div
                  className={
                    'inline-block max-w-full rounded-2xl px-4 py-3 ' +
                    (m.role === 'assistant'
                      ? 'bg-indigo-50 text-indigo-900'
                      : 'bg-gray-900 text-white')
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-gray-100 p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask about projects, skills, availability..."
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
