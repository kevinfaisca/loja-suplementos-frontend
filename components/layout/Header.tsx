"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CategoriesSection } from "@/components/home/CategoriesSection" 
import { Icon } from "@/components/icons/icon"
import { SearchAutocomplete } from "@/components/search/SearchAutocomplete"

export function Header(){
    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-bold">SuppsStore</Link>
                <div className="flex flex-1 justify-center mx-8">
                    <div className="w-full max-w-xl">
                        <SearchAutocomplete/>
                    </div>
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