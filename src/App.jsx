import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(80%_60%_at_50%_0%,rgba(129,140,248,0.12),transparent_60%),radial-gradient(60%_40%_at_80%_10%,rgba(236,72,153,0.08),transparent_60%)]">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-gray-200/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-base font-semibold tracking-tight text-gray-900">Aadya Madankar</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#projects" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">Let’s talk</a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-gray-200/70 bg-white/70 py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Aadya Madankar — AI Engineer. Built with love and a dash of on‑page AI.
      </footer>
    </div>
  );
}

export default App;
