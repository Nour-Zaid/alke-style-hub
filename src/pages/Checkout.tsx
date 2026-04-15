import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground mb-6">Your cart is empty.</p>
        <Button asChild variant="outline" className="rounded-none uppercase tracking-[0.15em] text-xs">
          <Link to="/shop">Shop Now</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.address || !form.city) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      clearCart();
      toast({ title: "Order placed!", description: "You will be contacted for delivery confirmation." });
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="container py-8 md:py-16 max-w-2xl">
      <Link to="/cart" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-3 w-3" /> Back to Cart
      </Link>

      <h1 className="text-xs uppercase tracking-[0.3em] mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Full Name *</label>
            <Input value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="rounded-none" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Email</label>
            <Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="rounded-none" />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Phone *</label>
          <Input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="rounded-none" />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Address *</label>
          <Input value={form.address} onChange={(e) => update("address", e.target.value)} className="rounded-none" />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">City *</label>
          <Input value={form.city} onChange={(e) => update("city", e.target.value)} className="rounded-none" />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Notes</label>
          <Input value={form.notes} onChange={(e) => update("notes", e.target.value)} className="rounded-none" placeholder="Delivery instructions..." />
        </div>

        {/* Payment */}
        <div className="border border-border p-6">
          <p className="text-xs uppercase tracking-[0.2em] mb-2">Payment Method</p>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full border-2 border-foreground flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-foreground" />
            </div>
            <span className="text-sm">Cash on Delivery</span>
          </div>
        </div>

        {/* Summary */}
        <div className="border-t border-border pt-6">
          <div className="space-y-2 mb-6">
            {items.map((item) => (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.name} × {item.quantity}</span>
                <span>{(item.price * item.quantity).toFixed(2)} JOD</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Total</span>
            <span className="text-lg font-bold">{totalPrice.toFixed(2)} JOD</span>
          </div>
        </div>

        <Button type="submit" size="lg" disabled={loading} className="w-full rounded-none uppercase tracking-[0.15em] text-xs h-12">
          {loading ? "Placing Order..." : "Place Order"}
        </Button>
      </form>
    </div>
  );
}
