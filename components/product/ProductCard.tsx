'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';

type ProductCardProps = {
    name: string
    description: string
    price: number
    imageUrl: string[]
}

export function ProductCard({
    name,
    description,
    price,
    imageUrl,
}: ProductCardProps){
    return (
        <div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            <div className="relative aspect-square overflow-hidden bg-zinc-50">
                <Image src={imageUrl[0]} alt={name} className="object-cover transition-transform duration-500 group-hover:scale-110" fill/>
            </div>            
            <div className="p-4 flex flex-col gap-2 ">
                <h2 className="text-lg font-semibold text-zinc-800">{name}</h2>
                <p className="text-sm text-zinc-500 line-clamp-2">
                    {description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-bold text-black mt-2">
                        R$ {price.toFixed(2)}
                    </span>
                    <Button size="sm">Ver produto</Button>
                </div>
            </div>
        </div>
    )
}