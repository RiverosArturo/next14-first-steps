import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Cambiar fuente (aparecen todas las fuentes de google fonts)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arturo's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
