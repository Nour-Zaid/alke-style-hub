import { Link } from "react-router-dom";
import { bundles, products } from "@/data/products";

export default function Bundles() {
  return (
    <div className="container py-10 md:py-16">
      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Bundles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bundles.map((bundle) => {
          const bundleProducts = bundle.products.map((pid) => products.find((p) => p.id === pid)!).filter(Boolean);
          const savings = bundle.originalPrice - bundle.bundlePrice;

          return (
            <div key={bundle.id} className="border border-border p-6">
              <div className="flex gap-3 mb-6">
                {bundleProducts.map((p) => (
                  <div key={p.id} className="w-20 h-24 bg-muted/30 overflow-hidden">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-bold mb-1">{bundle.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{bundle.description}</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-bold">{bundle.bundlePrice} JOD</span>
                <span className="text-sm text-muted-foreground line-through">{bundle.originalPrice} JOD</span>
                <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Save {savings} JOD</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {bundleProducts.map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="text-xs text-muted-foreground underline hover:text-foreground transition-colors">
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
