"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection(){
    return(
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e33,_transparent_60%)]"></div>
            <div className="relative mx-auto max-w-7xl px-6 py-28 grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                        Performance & Resultados
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Suplementos para quem
                        <span className="block text-green-400">
                            Leva treino a sério
                        </span>
                    </h1>
                    <p className="text-zinc-300 max-w-xl">
                        Whey, creatina, pré-treino e suplementos premium para evolução real.
                    </p>
                    <div className="flex gap-4">
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black">
                            Ver produtos
                        </Button>

                        <Button size="lg" variant="outline" className="border-zinc-700 text-white bg-black hover:bg-zinc-800">
                            Promoções
                        </Button>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-6 bg-green-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition">
                        <Image
                            src="/images/wheyprotein.png"
                            alt="Whey Protein"
                            width={420}
                            height={420}
                            priority
                            className="relative mx-auto transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}