import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/layout/Header"

export const metadata: Metadata = {
  title: "SuppsStore",
  description: "Ecommerce de suplementos esportivos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
