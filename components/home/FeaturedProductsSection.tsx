import Image from "next/image"
import { Button } from "@/components/ui/button"
import { featuredProducts } from "@/lib/data/featured-products"

export function FeaturedProductsSection(){
    return(
        <section className="mx-auto max-w-7xl px-6 pb-28">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold">
                🔥 Destaques da semana
                </h2>                
                <Button variant="ghost" className="text-green-400 hover:text-green-300">
                    Ver todos
                </Button>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                    <div key={product.id} className="group relative rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-green-500/40 transition">
                        {product.isOnSale &&(
                            <span className="absolute top-3 left-3 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                                Promoção
                            </span>
                        )}

                        <div className="relative h-48 bg-zinc-950 flex items-center justify-center">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={160}
                                height={160}
                                className="transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <h3 className="font-semibold">
                                {product.name}
                            </h3>
                            <p className="text-sm text-zinc-400">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-lg font-bold text-green-400">
                                    R${product.price.toFixed(2)}
                                </span>
                                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-black">
                                    Comprar
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                ))}
            </div>
        </section>
    )
}