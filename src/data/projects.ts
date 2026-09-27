export interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  description: string;
  architectureNotes: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  status: "Production" | "Homologated" | "Active";
  githubUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "forensic-carver",
    title: "Forensic Data Recovery Carver Suite",
    subtitle: "Motor forense de baixo nível para recuperação de artefatos em blocos brutos",
    domain: "Sistemas de Baixo Nível & Cibersegurança Forense",
    description:
      "Engine de computação forense desenvolvida a partir de primeiros princípios (zero dependências externas). Realiza varredura e extração de arquivos diretamente de setores não alocados de mídias de armazenamento (.raw, .img, .dd), operando de forma agnóstica a sistemas de arquivos (NTFS/FAT/ext4).",
    architectureNotes:
      "Implementa algoritmo de janela deslizante (Sliding Window Buffer) com overlap para eliminar riscos de Out of Memory (OOM) em mídias de alta capacidade. Incorpora duplo resumo criptográfico (MD5 + SHA-256) em conformidade com normas periciais NIST SP 800-86 e ISO/IEC 27037, extrator nativo de EXIF/TIFF e gerador de laudo em HTML.",
    tags: ["Python 3.12", "Sliding Window Buffer", "SHA-256 / MD5", "NIST SP 800-86", "Binary Parsing", "HTML Reporting"],
    metrics: [
      { label: "Paridade Criptográfica", value: "100% Bit-a-Bit" },
      { label: "Consumo de RAM", value: "Constante (~16 MB)" },
      { label: "Velocidade Média", value: "< 25ms / 5MB" },
      { label: "Dependências Externas", value: "Zero (Pure Python)" }
    ],
    featured: true,
    status: "Homologated",
    githubUrl: "https://github.com/railsonsilva7/Portif-lio"
  },
  {
    id: "telecom-edge",
    title: "Edge Telecom IMEI Validation & Generation Core",
    subtitle: "Arquitetura distribuída de microsserviços edge para identificadores 3GPP",
    domain: "Edge Computing & Telecomunicações",
    description:
      "Plataforma de alta taxa de transferência para validação algorítmica e geração de identificadores de hardware móvel (IMEI/TAC) em estrita conformidade com os padrões da GSMA e algoritmo de Luhn.",
    architectureNotes:
      "Arquitetura híbrida que distribui a execução entre workers serverless na borda (Cloudflare Workers) para latência sub-10ms e microsserviços robustos em Python FastAPI. Inclui suíte automatizada de testes com Pytest e interface responsiva em Next.js.",
    tags: ["Cloudflare Workers", "Python FastAPI", "Next.js", "Algoritmo de Luhn", "Pytest", "Edge Computing"],
    metrics: [
      { label: "Latência de Borda", value: "< 10ms" },
      { label: "Conformidade Telecom", value: "100% 3GPP/GSMA" },
      { label: "Cobertura de Testes", value: "Automatizado (Pytest)" },
      { label: "Infraestrutura", value: "Global Edge Network" }
    ],
    featured: true,
    status: "Production",
    githubUrl: "https://github.com/railsonsilva7/Portif-lio"
  },
  {
    id: "kube-manager",
    title: "Kubernetes Cluster Management & Cloud Orchestration",
    subtitle: "Orquestração de clusters multi-ambiente e confiabilidade de containers",
    domain: "Cloud Infrastructure & DevOps",
    description:
      "Solução de automação de infraestrutura para gerenciamento do ciclo de vida de containers, observabilidade de pods e orquestração de cargas de trabalho em clusters Kubernetes de missão crítica.",
    architectureNotes:
      "Automação de procedimentos operacionais (runbooks) com mitigação proativa de falhas, monitoramento de saúde de serviços, deploys contínuos sem downtime (Zero-Downtime Rolling Updates) e isolamento seguro de namespaces.",
    tags: ["Kubernetes", "Docker", "Cloud Native", "DevOps", "Linux Kernel", "CI/CD"],
    metrics: [
      { label: "Disponibilidade Alvo", value: "99.9% Uptime" },
      { label: "Deploy Strategy", value: "Zero-Downtime Rolling" },
      { label: "Orquestração", value: "Multi-Cluster Pods" },
      { label: "Ambiente", value: "Cloud / On-Premise" }
    ],
    featured: false,
    status: "Active",
    githubUrl: "https://github.com/railsonsilva7/Portif-lio"
  },
  {
    id: "enterprise-erp",
    title: "Enterprise Operations & ERP Automation Ecosystem",
    subtitle: "Ecossistema integrado de gestão empresarial e mensageria distribuída",
    domain: "Engenharia de Software Corporativa & Automação de Negócios",
    description:
      "Plataforma completa de operações corporativas conectando gestão de estoque, pedidos, fluxos de faturamento fiscal e agentes de automação integrados a canais de mensageria.",
    architectureNotes:
      "Modelagem desacoplada com banco de dados relacional normalizado, controle estrito de transações ACID e webhooks assíncronos para sincronização em tempo real de filas operacionais e pipelines comerciais.",
    tags: ["ERP Systems", "PostgreSQL", "REST APIs", "Async Webhooks", "Process Automation"],
    metrics: [
      { label: "Confiabilidade Transacional", value: "ACID Compliant" },
      { label: "Tempo de Resposta API", value: "< 45ms" },
      { label: "Operações Automatizadas", value: "24/7 Autônomo" },
      { label: "Impacto Operacional", value: "Redução de Gargalos" }
    ],
    featured: false,
    status: "Production",
    githubUrl: "https://github.com/railsonsilva7/Portif-lio"
  }
];

export const TECHNICAL_SKILLS = [
  {
    category: "Sistemas & Segurança",
    skills: ["Engenharia Forense (DFIR)", "File Carving & Raw Binary I/O", "Cadeia de Custódia (NIST SP 800-86)", "Criptografia (SHA-256, MD5, AES)", "Linux Internals & Memory Architecture"]
  },
  {
    category: "Linguagens & Runtimes",
    skills: ["Python 3.12+", "TypeScript / JavaScript", "Go (Concorrência & Microservices)", "Bash / POSIX Shell", "Node.js / Bun"]
  },
  {
    category: "Cloud, Edge & DevOps",
    skills: ["Kubernetes & Docker", "Cloudflare Workers (Edge)", "FastAPI & Microservices", "CI/CD (GitHub Actions)", "PostgreSQL & Database Design"]
  },
  {
    category: "Frontend & Interfaces de Alta Performance",
    skills: ["Next.js (App Router)", "React 19", "Tailwind CSS", "Three.js / WebGL", "Framer Motion"]
  }
];
