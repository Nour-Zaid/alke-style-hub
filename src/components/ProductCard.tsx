import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const displayPrice = product.salePrice ?? product.price;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted/30 mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          {product.isNew && (
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">New</span>
          )}
          {product.isSale && (
            <span className="text-[10px] uppercase tracking-widest text-destructive font-semibold">Sale</span>
          )}
        </div>
        <h3 className="text-sm font-medium">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">{displayPrice} JOD</span>
          {product.salePrice && (
            <span className="text-xs text-muted-foreground line-through">{product.price} JOD</span>
          )}
        </div>
      </div>
    </Link>
  );
}
