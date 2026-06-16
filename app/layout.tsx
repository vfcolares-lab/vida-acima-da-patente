import type { Metadata } from "next";
import { Anton, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vida Acima da Patente",
  description: "Campanha pelo acesso ao Lenacapavir no SUS",
  openGraph: {
    title: "Vida Acima da Patente",
    description: "Nenhuma patente vale mais que uma vida.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${archivo.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F2EC] text-[#15120E] antialiased">
        {children}
      </body>
    </html>
  );
}
