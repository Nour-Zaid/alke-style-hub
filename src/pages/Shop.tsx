import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    if (activeCategory === "new") return products.filter((p) => p.isNew);
    if (activeCategory === "sale") return products.filter((p) => p.isSale);
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Shop</h1>

      {/* Category filter */}
      <div className="flex gap-6 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSearchParams(cat.id === "all" ? {} : { category: cat.id })}
            className={`text-xs uppercase tracking-[0.2em] whitespace-nowrap pb-1 border-b-2 transition-colors ${
              activeCategory === cat.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-20">No products found in this category.</p>
      )}
    </div>
  );
}
