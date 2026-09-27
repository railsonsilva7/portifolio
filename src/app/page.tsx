"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { InteractiveTerminal } from "../components/InteractiveTerminal";
import { ArchitectureSkills } from "../components/ArchitectureSkills";
import { Footer } from "../components/Footer";

// Carregamento dinâmico do Three.js WebGL desativando SSR
const Cyber3DCanvas = dynamic(
  () => import("../components/Cyber3DCanvas").then((mod) => mod.Cyber3DCanvas),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-sky-400 selection:text-black overflow-x-hidden">
      {/* Background Interativo 3D em Three.js WebGL */}
      <Cyber3DCanvas />

      {/* Grid Overlay sutil de fundo para estética de engenharia */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Barra de Navegação Superior */}
      <Navigation />

      {/* Conteúdo Principal */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsGrid />
        <InteractiveTerminal />
        <ArchitectureSkills />
      </main>

      {/* Rodapé Executivo */}
      <Footer />
    </div>
  );
}
