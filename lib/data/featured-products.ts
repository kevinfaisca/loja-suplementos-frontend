export type FeaturedProduct = {
    id: string
    name: string
    description: string
    price: number
    image: string[]
    isOnSale: boolean
    category: string
}

export const featuredProducts: FeaturedProduct[]=[
{
    id: "1",
    name: "Whey Protein Concentrado",
    description: "Auxilia no ganho de massa muscular",
    price: 129.9,
    image: [
      "/images/wheyprotein.png",
      "/images/tabela-nutricional-whey.png",
    ],
    isOnSale: true,
    category: "whey"
  },
  {
    id: "2",
    name: "Creatina Monohidratada",
    description: "Mais força e explosão muscular",
    price: 89.9,
    image: [
      "/images/creatina.png",
      "/images/tabela-nutricional-creatina.png",
    ],
    isOnSale: false,
    category: "creatina"
  },
  {
    id: "3",
    name: "Pré-treino Insane",
    description: "Energia máxima para treinos intensos",
    price: 99.9,
    image:[
      "/images/pretreino.png",
      "/images/tabela-nutricional-pretreino.png",
    ],
    isOnSale: true,
    category: "pre-treino"
  }

]