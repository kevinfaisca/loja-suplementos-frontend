"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoriesSection } from "@/components/home/CategoriesSection" 
import { Icon } from "@/components/icons/icon"

export function Header(){
    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold">SuppsStore</Link>
                <div className="flex-1 mx-8">
                    <input type="text" placeholder="O que você está procurando?" className="w-full rounded-md border border-zinc-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"/>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline">Entrar</Button>
                    <Button size="icon">
                        <Icon name="shopping-cart" className=""/>
                    </Button>
                </div>
            </div>
            <CategoriesSection />
        </header>
    )
}