"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "../data/projects";
import {
  Shield,
  Cpu,
  Layers,
  Terminal,
  ExternalLink,
  CheckCircle,
  Database,
  Cloud,
  ChevronRight,
} from "lucide-react";

export const ProjectsGrid: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { label: "Todos os Sistemas", value: "all" },
    { label: "Baixo Nível & Forense", value: "forensics" },
    { label: "Edge & APIs", value: "edge" },
    { label: "Infra & Cloud", value: "infra" },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "forensics") return proj.id === "forensic-carver";
    if (selectedFilter === "edge") return proj.id === "imei-core";
    if (selectedFilter === "infra") return proj.id === "k8s-manager" || proj.id === "motocell-erp";
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Engenharia Comprovada &amp; Código Real</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projetos &amp; Soluções Arquiteturais
          </h2>
          <p className="text-zinc-400 text-base max-w-2xl mt-2">
            Sistemas construídos com rigor de missão crítica, zero concessões de segurança e conformidade estrita com padrões técnicos internacionais.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedFilter === opt.value
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white hover:bg-white/10"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {filteredProjects.map((project) => {
          const isFeatured = project.featured;

          return (
            <div
              key={project.id}
              className={`rounded-2xl bg-[#0c0d12]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-white/20 transition-all duration-300 relative group overflow-hidden ${
                isFeatured ? "lg:col-span-12 bg-gradient-to-br from-[#0c0d12] via-[#10121a] to-[#0c0d12]" : "lg:col-span-4"
              }`}
            >
              {/* Card Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/10 transition-all" />

              <div className="space-y-6 relative z-10">
                {/* Meta Top: Domain & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                    {project.id === "forensic-carver" && <Shield className="w-4 h-4" />}
                    {project.id === "imei-core" && <Cpu className="w-4 h-4" />}
                    {project.id === "k8s-manager" && <Cloud className="w-4 h-4" />}
                    {project.id === "motocell-erp" && <Database className="w-4 h-4" />}
                    {project.domain}
                  </span>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono border bg-emerald-500/10 text-emerald-400 border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {project.status}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className={`font-bold text-white group-hover:text-sky-300 transition-colors ${
                    isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1">{project.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Deep Dive Callout */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 font-semibold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" />
                    <span>Engenharia de Causa Raiz &amp; Arquitetura:</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    {project.architectureNotes}
                  </p>
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.06] text-left"
                    >
                      <div className="text-xs text-zinc-400 font-mono">{metric.label}</div>
                      <div className="text-sm font-bold font-mono text-white mt-0.5">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Links */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold transition-colors"
                  >
                    Repositório <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
