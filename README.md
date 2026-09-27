# Railson Silva — Engineering Portfolio & Systems Architecture

> **Engenharia de Baixo Nível, Computação Forense & Arquiteturas de Alta Confiabilidade**  
> Um portfólio executivo e técnico desenvolvido para demonstrar proficiência em sistemas de missão crítica, conformidade forense (NIST SP 800-86), edge computing e orquestração de microsserviços.

---

## 🛠️ Stack Tecnológica

- **Framework Web:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Linguagem & Tipagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Renderização Gráfica 3D:** [Three.js](https://threejs.org/) (WebGL Canvas com partículas neurais interativas e baixa sobrecarga de CPU)
- **Estilização & Design System:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones & UI Elements:** [Lucide React](https://lucide.dev/)
- **Runtime & Gerenciador de Pacotes:** [Bun](https://bun.sh/) / [Node.js](https://nodejs.org/)

---

## 🔬 Projetos em Destaque

### 1. Forensic Data Recovery Carver Suite
- **Domínio:** Sistemas de Baixo Nível & Cibersegurança Forense
- **Arquitetura:** Engine construída a partir de primeiros princípios (zero dependências externas). Implementa algoritmo de **Sliding Window Buffer** com overlap de segurança, garantindo consumo constante de memória (Zero OOM) durante a varredura de mídias de alta capacidade (`.raw`, `.img`, `.dd`).
- **Padrões:** Duplo resumo criptográfico (**MD5 + SHA-256**) em estrita conformidade com **NIST SP 800-86** e **ISO/IEC 27037**.

### 2. Edge Telecom IMEI Core
- **Domínio:** Sistemas Distribuídos & Telecomunicações
- **Arquitetura:** Validação e geração de identificadores de hardware baseados em **3GPP TS 23.003** e **Algoritmo de Luhn** com complexidade temporal \(O(1)\).
- **Implantação:** Execução em **V8 Isolates (Cloudflare Workers)** com latência de resposta global inferior a 15ms.

### 3. Kubernetes Multi-Cluster Orchestrator
- **Domínio:** Cloud Infrastructure & Reliability Engineering (SRE)
- **Arquitetura:** Gerenciamento declarativo de clusters, esteiras de deployment sem indisponibilidade (*zero-downtime rolling updates*) e auto-recuperação (*self-healing*) de contêineres.

### 4. Enterprise Operations & ERP Core
- **Domínio:** Engenharia de Dados & Aplicações Críticas
- **Arquitetura:** Automação de processos empresariais de alta concorrência com consistência transacional estrita (**ACID**) e mensageria assíncrona.

---

## ⚡ Como Executar Localmente

### Pré-requisitos
- [Bun](https://bun.sh/) ou [Node.js 20+](https://nodejs.org/)
- Git

### 1. Clonar o Repositório
```bash
git clone git@github.com:railsonsilva7/Portif-lio.git
cd Portif-lio
```

### 2. Instalar Dependências
```bash
bun install
# ou: npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
bun dev
# ou: npm run dev
```
Acesse em seu navegador: `http://localhost:3000`

### 4. Compilar para Produção
```bash
bun run build
# ou: npm run build
```

---

## 🛡️ Princípios Arquiteturais (Zero Workarounds)

1. **Engenharia de Causa Raiz:** Resolução no nível fundamental do protocolo ou estrutura de dados, eliminando atalhos e códigos frágeis.
2. **Paridade Dev-Prod:** Alinhamento estrito entre o ambiente de teste local e a nuvem de produção (RFCs e padrões de segurança ativados por padrão).
3. **Defense-in-Depth:** Validação rigorosa de entradas em todas as camadas, garantindo integridade de ponta a ponta.

---

## 📬 Contato

- **GitHub:** [@railsonsilva7](https://github.com/railsonsilva7)
- **E-mail:** `railsonsilva7@gmail.com`