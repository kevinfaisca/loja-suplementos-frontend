import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/data/categories'

export function CategoriesSection(){
    return (
        <nav className="border-t border-zinc-200 bg-white flex justify-center">
            <ul className="mx-auto max-w-7xl flex gap-8 py-3">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link href={`/products?category=${category.slug}`} className="group flex items-center gap-2 text-sm font-medium text-sm font-medium text-zinc-700 hover:text-black transition">
                            <span className="relative">
                                {category.name}
                                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all group-hover:w-full "></span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}