import { ProductCard } from '@/components/product/ProductCard'

const products = [
    {
        id: 1,
        name: 'Whey Protein',
        description: 'Whey protein concentrado para ganho de massa muscular.',
        price: 129.9,
        imageUrl: '/images/wheyprotein.png'
    },
    {
        id: 2,
        name: 'Creatina',
        description: 'Creatina monohidratada para força e desempenho.',
        price: 89.9,
        imageUrl: '/images/creatina.png'
    },
    {
        id: 3,
        name: 'Pré-treino',
        description: 'Energia e foco para treinos intensos.',
        price: 99.9,
        imageUrl: '/images/pretreino.png'
    }
]

export default function ProductsPage(){
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Produtos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}