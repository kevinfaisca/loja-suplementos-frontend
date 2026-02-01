import { Button } from '@/components/ui/button';

type ProductCardProps = {
    name: string
    description: string
    price: number
    imageUrl: string
}

export function ProductCard({
    name,
    description,
    price,
    imageUrl,
}: ProductCardProps){
    return (
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden flex flex-col">
            <img src={imageUrl} alt={name} className="h-48 w-full object-contain"/>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="font-semibold text-lg">{name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                        R$ {price.toFixed(2)}
                    </span>
                    <Button size="sm">Comprar</Button>
                </div>
            </div>
        </div>
    )
}