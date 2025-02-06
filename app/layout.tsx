import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corte e Dobra ADOM",
  description: "Conheca um dos nossos melhores servicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden bg-brand-400">
        {children}
      </body>
    </html>
  );
}
