import { ProductCard } from '@/components/product/ProductCard'
import { featuredProducts } from '@/lib/data/featured-products'

type ProductsPageProps = {
    params: Promise<{
        category: string
    }>
}

export default async function ProductsPage({ params}: ProductsPageProps){
    const {category} = await params
    console.log("Categoria recebida:", category)

    const filteredProducts = featuredProducts.filter(
        product => product.category == category
    )
    
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
                { category ? `Categoria: ${category}` : 'Produtos'}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.image}
                    />
                ))}
            </div>
        </div>
    )
}