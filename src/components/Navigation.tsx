"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Shield, Github, Linkedin, Menu, X, ExternalLink } from "lucide-react";

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 group-hover:border-sky-500/50 group-hover:text-sky-300 transition-all shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                RAILSON SILVA
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
                Systems &amp; Forensic Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#projects"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-sky-400">01.</span> Projetos
            </Link>
            <Link
              href="#terminal"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-sky-400">02.</span> Live Terminal
            </Link>
            <Link
              href="#architecture"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-sky-400">03.</span> Arquitetura
            </Link>
            <Link
              href="#contact"
              className="text-sm font-mono text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-sky-400">04.</span> Contato
            </Link>
          </nav>

          {/* Status Badge & Socials */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponível para Projetos</span>
            </div>

            <a
              href="https://github.com/railsonsilva7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Railson Silva"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-3 font-mono">
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base text-zinc-200 hover:bg-white/5"
          >
            <span className="text-sky-400 mr-2">01.</span> Projetos
          </Link>
          <Link
            href="#terminal"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base text-zinc-200 hover:bg-white/5"
          >
            <span className="text-sky-400 mr-2">02.</span> Live Terminal
          </Link>
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base text-zinc-200 hover:bg-white/5"
          >
            <span className="text-sky-400 mr-2">03.</span> Arquitetura
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base text-zinc-200 hover:bg-white/5"
          >
            <span className="text-sky-400 mr-2">04.</span> Contato
          </Link>
          <div className="pt-2 flex items-center gap-3">
            <a
              href="https://github.com/railsonsilva7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-center text-sm text-zinc-200 hover:bg-white/10 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
