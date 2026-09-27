"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, Copy, Check } from "lucide-react";

interface HistoryItem {
  command?: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const initialHistory: HistoryItem[] = [
    {
      output: (
        <div className="space-y-1.5 text-xs sm:text-sm font-mono text-zinc-300">
          <p className="text-zinc-500">
            [SISTEMA DE DEMONSTRAÇÃO FORENSE &amp; ARQUITETURAL v2.4.0-RELEASE]
          </p>
          <p className="text-zinc-400">
            Digite <span className="text-sky-400 font-bold">help</span> para visualizar os comandos de auditoria disponíveis, ou clique nos atalhos rápidos abaixo.
          </p>
        </div>
      ),
    },
    {
      command: "carver --scan /dev/sdb1 --chunk-size 64MB --nist-mode",
      output: (
        <div className="space-y-1 text-xs sm:text-sm font-mono text-zinc-300">
          <p className="text-emerald-400 font-semibold">
            [+] Inicializando Forensic Data Recovery Carver Suite (NIST SP 800-86)...
          </p>
          <p className="text-zinc-400">
            [*] Mídia analisada: <span className="text-white">/dev/sdb1</span> (Raw Storage Stream, 4.00 GiB)
          </p>
          <p className="text-zinc-400">
            [*] Buffer deslizante: <span className="text-sky-300">64 MiB</span> com overlap de <span className="text-sky-300">64 KiB</span> (Zero OOM guarantee)
          </p>
          <div className="py-2 space-y-1 border-l-2 border-sky-500/40 pl-3 my-2 bg-white/[0.02] rounded-r">
            <p className="text-cyan-300">[ARTEFATO 001 RECONHECIDO]: PDF Document (ISO 32000-1)</p>
            <p className="text-zinc-400">Offset Início: <span className="text-zinc-200">0x0041A200</span> | Offset Fim: <span className="text-zinc-200">0x0052C8F0</span></p>
            <p className="text-zinc-400">Tamanho: <span className="text-zinc-200">1.122.096 bytes (1.07 MiB)</span></p>
            <p className="text-zinc-400">SHA-256: <span className="text-amber-300">9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08</span></p>
            <p className="text-zinc-400">Status Cadeia de Custódia: <span className="text-emerald-400 font-bold">ÍNTEGRO &amp; VERIFICADO</span></p>
          </div>
          <p className="text-emerald-400">
            [✓] Varredura finalizada em 1.42s. Laudo pericial HTML compilado com sucesso.
          </p>
        </div>
      ),
    },
  ];

  const [history, setHistory] = useState<HistoryItem[]>(initialHistory);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: React.ReactNode;

    switch (lower) {
      case "help":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-sky-400 font-bold">Comandos disponíveis no ambiente interativo:</p>
            <p><span className="text-emerald-400">carver --demo</span> : Executa simulação pericial do motor forense de baixo nível</p>
            <p><span className="text-emerald-400">imei --validate</span> : Valida integridade de hardware via algoritmo 3GPP/Luhn O(1)</p>
            <p><span className="text-emerald-400">k8s --status</span> : Consulta estado de clusters de contêineres e resiliência</p>
            <p><span className="text-emerald-400">skills</span> : Imprime os núcleos de especialidade técnica e arquitetural</p>
            <p><span className="text-emerald-400">contact</span> : Exibe canais criptografados e corporativos para contratação</p>
            <p><span className="text-emerald-400">clear</span> : Limpa a tela do terminal interativo</p>
          </div>
        );
        break;

      case "carver":
      case "carver --demo":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-emerald-400 font-semibold">[+] Executando Forensic Carver Engine (Zero-Dependencies)...</p>
            <p className="text-zinc-400">[i] Sliding Window com Overlap de segurança de 64KB ativo.</p>
            <p className="text-zinc-400">[i] Assinatura detectada: Magic Header %PDF-1.7 em bloco não alocado.</p>
            <p className="text-amber-300">[i] MD5: e4d909c290d0fb1ca068ffaddf22cbd0</p>
            <p className="text-amber-300">[i] SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069</p>
            <p className="text-emerald-400 font-bold">[✓] Paridade bit-a-bit 100% comprovada. Laudo pericial auditável gerado.</p>
          </div>
        );
        break;

      case "imei --validate":
      case "imei":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-sky-400">[+] Validando IMEI Core (3GPP TS 23.003 / Algoritmo de Luhn):</p>
            <p className="text-zinc-400">TAC (Type Allocation Code): <span className="text-white">86345204</span> (Dispositivo Homologado)</p>
            <p className="text-zinc-400">SNR (Serial Number): <span className="text-white">194826</span></p>
            <p className="text-zinc-400">Check Digit (Luhn Modulo 10): <span className="text-emerald-400 font-bold">VALIDATED (0)</span></p>
            <p className="text-emerald-400">[✓] Executado na Edge (Cloudflare Workers) em 4.2ms.</p>
          </div>
        );
        break;

      case "k8s --status":
      case "k8s":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-cyan-400 font-bold">CLUSTER STATUS: Production Multi-Region [Healthy]</p>
            <p className="text-zinc-400">Control Plane: High Availability (3 Masters, etcd v3.5 quorum intact)</p>
            <p className="text-zinc-400">Worker Nodes: 12 Nodes Online | Zero Pending Pods</p>
            <p className="text-emerald-400">Rolling Deploy Status: Zero Downtime, 100% Health Check Success</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-white font-bold">MATRIZ TÉCNICA:</p>
            <p className="text-sky-400">• Baixo Nível &amp; Forense: <span className="text-zinc-300">Binary Parsing, Sliding Window, Memory Buffer, C/Python, NIST SP 800-86</span></p>
            <p className="text-cyan-400">• Sistemas Distribuídos: <span className="text-zinc-300">Cloudflare Workers, Edge Computing, FastAPI, REST, WebSocket</span></p>
            <p className="text-indigo-400">• Infraestrutura &amp; Cloud: <span className="text-zinc-300">Kubernetes, Docker, Linux Internals, CI/CD, Observabilidade</span></p>
            <p className="text-emerald-400">• Engenharia de Software: <span className="text-zinc-300">TypeScript, React 19, Next.js 15, Three.js, PostgreSQL ACID</span></p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 font-mono text-xs sm:text-sm text-zinc-300">
            <p className="text-white font-bold">CANAIS DE COMUNICAÇÃO:</p>
            <p className="text-zinc-400">GitHub: <a href="https://github.com/railsonsilva7" target="_blank" rel="noreferrer" className="text-sky-400 underline">github.com/railsonsilva7</a></p>
            <p className="text-zinc-400">Perfil: <span className="text-white font-semibold">Railson Silva — Systems &amp; Security Engineer</span></p>
            <p className="text-emerald-400 font-semibold">[✓] Pronto para contratação direta, liderança técnica ou consultoria especializada.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        response = (
          <div className="font-mono text-xs sm:text-sm text-rose-400">
            zsh: comando não reconhecido: &apos;{trimmed}&apos;. Digite <span className="underline font-bold text-white">help</span> para a lista de comandos homologados.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setInputVal("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("git clone git@github.com:railsonsilva7/Portif-lio.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>Interactive Execution Shell</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Terminal Forense &amp; Diagnóstico em Tempo Real
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
          Ambiente CLI simulado no navegador demonstrando a lógica e execução dos algoritmos periciais e dos serviços distribuídos.
        </p>
      </div>

      {/* Terminal Window Chrome */}
      <div className="rounded-2xl bg-[#0c0d12] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Title Bar */}
        <div className="bg-[#14151f] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-3 font-mono text-xs text-zinc-400 hidden sm:inline-block">
              railson@forensics-station: ~ (zsh / raw-carver)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Copiar comando de clone"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? "Copiado!" : "git clone"}</span>
            </button>
            <button
              onClick={() => setHistory(initialHistory)}
              className="p-1 rounded bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
              title="Resetar terminal"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 min-h-[360px] max-h-[500px] overflow-y-auto space-y-4 font-mono text-sm selection:bg-sky-400 selection:text-black">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              {item.command && (
                <div className="flex items-center gap-2 text-zinc-200">
                  <span className="text-sky-400 font-bold">❯</span>
                  <span className="text-zinc-100 font-semibold">{item.command}</span>
                </div>
              )}
              <div className="pl-3 sm:pl-4">{item.output}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-sky-400 font-bold">❯</span>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              className="flex-1"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="digite 'help' ou escolha um atalho abaixo..."
                className="w-full bg-transparent text-white outline-none font-mono text-xs sm:text-sm placeholder-zinc-600"
                autoFocus
              />
            </form>
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Quick Shortcut Buttons */}
        <div className="bg-[#12131c] px-4 py-3 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mr-1">
            Atalhos:
          </span>
          <button
            onClick={() => handleCommand("carver --demo")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-500/40 text-xs font-mono text-zinc-300 hover:text-sky-300 transition-colors flex items-center gap-1.5"
          >
            <Play className="w-3 h-3 text-sky-400" /> carver --demo
          </button>
          <button
            onClick={() => handleCommand("imei --validate")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/40 text-xs font-mono text-zinc-300 hover:text-cyan-300 transition-colors"
          >
            imei --validate
          </button>
          <button
            onClick={() => handleCommand("k8s --status")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-indigo-500/20 border border-white/10 hover:border-indigo-500/40 text-xs font-mono text-zinc-300 hover:text-indigo-300 transition-colors"
          >
            k8s --status
          </button>
          <button
            onClick={() => handleCommand("skills")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-zinc-300 hover:text-emerald-300 transition-colors"
          >
            skills
          </button>
          <button
            onClick={() => handleCommand("clear")}
            className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-colors ml-auto"
          >
            clear
          </button>
        </div>
      </div>
    </section>
  );
};
