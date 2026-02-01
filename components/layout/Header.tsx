"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header(){
    return (
        <header className="w-full h-16 border-b bg-white flex items-center justify-between px-6" >
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-600">
                    SuppsStore
                </span>
            </div>

            <nav className="flex items-center gap-6">
                <Link href="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Home
                </Link>
                <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Produtos
                </Link>
                <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Sobre
                </Link>
            </nav>

            <div className="flex items-center gap-4">
                <Button variant="outline">Entrar</Button>
                <Button>Carrinho</Button>
            </div>
        </header>
    )
}