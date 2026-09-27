import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#0c0d12] border border-white/10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 mx-auto">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="space-y-2">
          <h1 className="text-4xl font-mono font-bold text-white">404</h1>
          <p className="text-zinc-400 text-sm">
            Artefato ou rota não localizada no sistema.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono hover:bg-zinc-200 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Retornar à Base
        </Link>
      </div>
    </div>
  );
}
