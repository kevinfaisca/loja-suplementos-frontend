"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { featuredProducts } from "@/lib/data/featured-products"

type SearchAutocompleteProps = {}

export function SearchAutocomplete({}:SearchAutocompleteProps){
    const [query, setQuery] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const filteredProducts = useMemo(() => {
        if (!query.trim()) return []

        return featuredProducts.filter(
            product => product.name.toLowerCase().includes(query.toLowerCase())
        )
    },[query])

    const showResults = isFocused && filteredProducts.length > 0

    return (
        <div className="relative w-full">
            <div className={`relative bg-white border border-neutral-300 ${showResults ? "rounded-t-xl" : "rounded-xl"} shadow-sm`}>
                <input 
                    type="text" 
                    placeholder="O que está procurando?" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setTimeout(() => setIsFocused(false),150)} 
                    className="w-full px-4 py-3 bg-transparent outline-none text-sm"
                />
            {showResults && (
                <div className="absolute left-0 right-0 top-full bg-white border border-neutral-300 border-t-0 rounded-b-xl shadow-sm max-h-96 overflow-y-auto z-50">
                    {filteredProducts.map(product => (
                        <Link key={product.id} href={`/products/${product.slug}`} className="flex items-center gap-4 px-4 py-3 hover:bg-neutral-50 transition-colors">
                            <div className="relative w-14 h-14">
                                <Image src={product.image[0]} alt={product.name} fill className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-neutral-800">
                                    {product.name}
                                </span>
                                <span className="text-sm font-semibold text-green-600">
                                    R$ {product.price.toFixed(2)}
                                </span>
                            </div>
                        </Link>
                    ))} 
                </div>
            )}
            </div>
        </div>
    )
}
