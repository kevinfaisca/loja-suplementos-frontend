export type FeaturedProduct = {
    id: string
    name: string
    description: string
    price: number
    image: string
    isOnSale: boolean
}

export const featuredProducts: FeaturedProduct[]=[
{
    id: "1",
    name: "Whey Protein Concentrado",
    description: "Auxilia no ganho de massa muscular",
    price: 129.9,
    image: "/images/wheyprotein.png",
    isOnSale: true,
  },
  {
    id: "2",
    name: "Creatina Monohidratada",
    description: "Mais força e explosão muscular",
    price: 89.9,
    image: "/images/creatina.png",
    isOnSale: false,
  },
  {
    id: "3",
    name: "Pré-treino Insane",
    description: "Energia máxima para treinos intensos",
    price: 99.9,
    image: "/images/pretreino.png",
    isOnSale: true,
  }

]