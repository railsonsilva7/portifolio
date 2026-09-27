import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Railson Silva | Systems & Security Engineer",
  description:
    "Portfólio de engenharia de software de alto nível, cibersegurança forense, baixo nível e arquitetura de sistemas distribuídos.",
  keywords: [
    "Railson Silva",
    "Systems Engineer",
    "Cybersecurity",
    "Digital Forensics",
    "File Carving",
    "Kubernetes",
    "Cloudflare Workers",
    "FastAPI",
    "Next.js"
  ],
  authors: [{ name: "Railson Silva" }],
  openGraph: {
    title: "Railson Silva | Systems & Security Engineer",
    description: "Engenharia de sistemas de baixo nível, cibersegurança forense e infraestruturas distribuídas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-sky-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
