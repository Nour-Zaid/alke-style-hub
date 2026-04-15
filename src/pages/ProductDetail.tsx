import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-sm underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const displayPrice = product.salePrice ?? product.price;

  const handleAdd = () => {
    if (!selectedSize || !selectedColor) {
      toast({ title: "Please select size and color", variant: "destructive" });
      return;
    }
    addItem({
      productId: product.id,
      name: product.name,
      price: displayPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    toast({ title: "Added to cart", description: `${product.name} — ${selectedSize} / ${selectedColor}` });
  };

  return (
    <div className="container py-8 md:py-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-3 w-3" /> Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden bg-muted/30">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" width={800} height={1000} />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            {product.isNew && <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">New</span>}
            {product.isSale && <span className="text-[10px] uppercase tracking-widest text-destructive font-semibold">Sale</span>}
          </div>

          <h1 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-lg font-semibold">{displayPrice} JOD</span>
            {product.salePrice && <span className="text-sm text-muted-foreground line-through">{product.price} JOD</span>}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-8">{product.description}</p>

          {/* Size */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] mb-3">Size</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-[2.5rem] px-3 border text-xs uppercase tracking-wider transition-colors ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] mb-3">Color</p>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-10 px-4 border text-xs transition-colors ${
                    selectedColor === color
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-8">
            <p className="text-xs uppercase tracking-[0.2em]">Qty</p>
            <div className="flex items-center border border-border">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-muted/50 transition-colors">
                <Minus className="h-3 w-3" />
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-muted/50 transition-colors">
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={handleAdd}
            size="lg"
            className="w-full rounded-none uppercase tracking-[0.15em] text-xs h-12"
          >
            Add to Cart — {(displayPrice * quantity).toFixed(2)} JOD
          </Button>

          <p className="text-xs text-muted-foreground mt-4">{product.stock} pieces in stock</p>
        </div>
      </div>
    </div>
  );
}
