"use client";

import React from "react";
import { ShieldAlert, Server, Cpu, Database, Check, Award, Lock, GitBranch } from "lucide-react";

export const ArchitectureSkills: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Baixo Nível & Forense Computacional",
      description:
        "Varredura em streams brutos de armazenamento, algoritmos de janela deslizante (Sliding Window) com retenção de overlap e integridade criptográfica.",
      skills: [
        "Binary Stream Parsing (Zero-Copy)",
        "Sliding Window Buffer Architecture",
        "Padrão Forense NIST SP 800-86 / ISO 27037",
        "Cadeia de Custódia (Duplo Resumo SHA-256/MD5)",
        "Python 3.12 / C Memory Model",
      ],
    },
    {
      icon: Server,
      title: "Edge Computing & Microsserviços",
      description:
        "Computação distribuída sem servidor em V8 Isolates (Cloudflare Workers) e APIs assíncronas de altíssima vazão em FastAPI.",
      skills: [
        "Cloudflare Workers & Edge Runtime",
        "FastAPI & Async I/O (ASGI)",
        "Validação Algorítmica 3GPP & Luhn O(1)",
        "Latency Reduction (< 20ms Global P99)",
        "WebSockets & Streaming de Telemetria",
      ],
    },
    {
      icon: Database,
      title: "Infraestrutura & Orquestração K8s",
      description:
        "Controle declarativo de contêineres, gestão multi-cluster, deploys sem indisponibilidade (zero-downtime) e observabilidade integral.",
      skills: [
        "Kubernetes Multi-Cluster Management",
        "Docker Containerization & Multi-stage",
        "Linux Syscalls & OS Internals (cgroups, namespaces)",
        "Rolling Updates & Self-Healing Workloads",
        "Observabilidade & Prometheus/Grafana",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Engenharia de Software & Resiliência",
      description:
        "Aplicações web modernas, garantia estrita de integridade transacional (ACID) e paridade completa entre desenvolvimento e produção.",
      skills: [
        "TypeScript Strict Mode & Next.js 15",
        "React 19 & WebGL (Three.js)",
        "PostgreSQL & Transações Concorrentes ACID",
        "CI/CD Seguro & Test-Driven Development (TDD)",
        "Arquitetura Limpa & Engenharia de Causa Raiz",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <Award className="w-3.5 h-3.5" />
          <span>Matriz Técnica de Especialidade</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Fundamentos de Engenharia &amp; Arquitetura
        </h2>
        <p className="text-zinc-400 text-base max-w-2xl mx-auto">
          Competência construída em cima de primeiros princípios: compreensão do hardware, protocolos de rede e estabilidade de sistemas distribuídos.
        </p>
      </div>

      {/* Grid of 4 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0c0d12]/80 border border-white/10 hover:border-sky-500/30 transition-all backdrop-blur-md space-y-5"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
              <ul className="space-y-2 pt-2 border-t border-white/5">
                {pillar.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Philosophy Card: Root Cause vs Workarounds */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-950/30 via-zinc-900/60 to-indigo-950/30 border border-sky-500/20 p-8 sm:p-10 backdrop-blur-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider font-semibold">
              <Lock className="w-4 h-4" />
              <span>Diretriz Arquitetural Inegociável</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Engenharia de Causa Raiz &amp; Paridade Dev-Prod (Zero Gambiarras)
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Toda anomalia é tratada no nível estrutural: inspeção de buffers, alinhamento de protocolos RFC e isolamento de dependências. Não aplico paliativos que mascaram erros ou fragilizam ambientes de homologação e produção.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/15 text-center font-mono">
              <span className="text-xs text-zinc-400 block">Conformidade RFC &amp; NIST</span>
              <span className="text-lg font-bold text-emerald-400">100% Auditável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
