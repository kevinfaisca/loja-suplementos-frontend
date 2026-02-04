export function BenefitsSection(){
    const benefits = [
        {
            title: "Entrega rápida",
            description: "Receba seus suplementos em poucos dias",
        },
        {
            title: "Produtos originais",
            description: "100% lacrados e certificados",
        },
        {
            title: "Melhor custo-benefício",
            description: "Preço justo sem intermediários",
        }
    ]

    return(
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap md:grid-cols-3">
                {benefits.map((item) =>(
                    <div key={item.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 hover:border-green-500/40 transition">
                        <h3 className="text-lg font-semibold mb-2"> 
                            {item.title}
                        </h3>
                        <p className="text-zinc-400">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}