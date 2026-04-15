import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground mb-6">Your cart is empty.</p>
        <Button asChild variant="outline" className="rounded-none uppercase tracking-[0.15em] text-xs">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 md:py-16 max-w-3xl">
      <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-3 w-3" /> Continue Shopping
      </Link>

      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Cart</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4 pb-6 border-b border-border">
            <div className="w-20 h-24 bg-muted/30 overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium truncate">{item.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{item.size} / {item.color}</p>
              <p className="text-sm font-semibold mt-2">{item.price} JOD</p>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center border border-border">
                  <button onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)} className="p-1.5 hover:bg-muted/50">
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="px-3 text-xs">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)} className="p-1.5 hover:bg-muted/50">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
                <button onClick={() => removeItem(item.productId, item.size, item.color)} className="text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs uppercase tracking-[0.2em]">Total</span>
          <span className="text-lg font-bold">{totalPrice.toFixed(2)} JOD</span>
        </div>
        <Button asChild size="lg" className="w-full rounded-none uppercase tracking-[0.15em] text-xs h-12">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
