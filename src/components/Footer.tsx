"use client";

import React, { useState } from "react";
import { Shield, Github, Mail, Copy, Check, Terminal, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "railsonsilva7@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#070709] relative pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Coluna 1: Perfil & Bio Executiva */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-mono font-bold text-white tracking-tight">
                RAILSON SILVA
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Especialista em Engenharia de Baixo Nível, Computação Forense e Arquitetura de Sistemas Distribuídos de Alta Criticidade. Disponível para contratação executiva, posições de Tech Lead e projetos de infraestrutura/segurança.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono text-zinc-300">
                Aberto a propostas de impacto global
              </span>
            </div>
          </div>

          {/* Coluna 2: Ação Rápida de Contato */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                Canal Direto de Comunicação
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/40 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white flex items-center gap-2.5 transition-all group"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{email}</span>
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                  )}
                </button>

                <a
                  href="https://github.com/railsonsilva7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-xs sm:text-sm font-mono text-zinc-200 hover:text-white flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/railsonsilva7</span>
                </a>
              </div>
            </div>

            {/* PGP / Cryptographic Fingerprint Note */}
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] font-mono text-[11px] text-zinc-500 flex items-center justify-between">
              <span>SECURITY SPEC: NIST SP 800-86 | SHA-256 INTEGRITY GAUGE</span>
              <button
                onClick={scrollToTop}
                className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Voltar ao topo"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Railson Silva. Engenharia de Sistemas &amp; Cibersegurança.
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 15 (App Router)</span>
            <span>•</span>
            <span>Three.js WebGL</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
