"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Shield, ArrowRight, Cpu, Lock, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Top Tag / Security Compliance Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 shadow-lg backdrop-blur-md">
          <Shield className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-zinc-400">Padrão Pericial:</span>
          <span className="text-sky-300 font-semibold">NIST SP 800-86 &amp; ISO/IEC 27037</span>
        </div>

        {/* Main Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
            Engenharia de Sistemas,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 font-bold drop-shadow-sm">
              Forense Digital
            </span>{" "}
            &amp; Resiliência Distribuída
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
            Arquiteto e Desenvolvedor focado em sistemas de missão crítica, recuperação de dados
            em blocos brutos (<span className="text-zinc-200 font-mono">Sliding Window Buffer</span>),
            computação distribuída em Edge e orquestração de contêineres de alta densidade.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl hover:shadow-sky-500/10 flex items-center justify-center gap-2 group"
          >
            Explorar Projetos Chave
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#terminal"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-sm hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Terminal className="w-4 h-4 text-sky-400" />
            Executar Terminal Forense
          </Link>
        </div>

        {/* Architecture & Engineering Metrics */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-sky-400 mb-1">
              <Cpu className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Carver Engine</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">0 OOM</div>
            <p className="text-xs text-zinc-400 mt-0.5">Sliding window com overlap seguro</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Lock className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Custódia Forense</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">100% SHA-256</div>
            <p className="text-xs text-zinc-400 mt-0.5">Duplo hash pericial (MD5 + SHA256)</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-indigo-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Edge Telecom</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">&lt; 15ms</div>
            <p className="text-xs text-zinc-400 mt-0.5">Cloudflare Workers global edge</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-sm hover:border-white/20 transition-all">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Shield className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">Confiabilidade</span>
            </div>
            <div className="text-2xl font-bold font-mono text-white">ACID &amp; K8s</div>
            <p className="text-xs text-zinc-400 mt-0.5">Orquestração e tolerância a falhas</p>
          </div>
        </div>
      </div>
    </section>
  );
};
