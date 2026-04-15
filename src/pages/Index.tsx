import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Index() {
  const featured = products.slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end overflow-hidden">
        <img
          src={heroBanner}
          alt="ALKE collection"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        <div className="relative container pb-16 md:pb-24">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight mb-4 max-w-lg">
            Comfort meets elegance
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/80 mb-8 max-w-md">
            Premium everyday wear designed for people who want to look refined without sacrificing ease.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 rounded-none uppercase tracking-[0.15em] text-xs h-12 px-10">
            <Link to="/shop">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16 md:py-24">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <Link to="/shop?category=men" className="group relative aspect-[3/4] md:aspect-[4/3] overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-lg md:text-2xl font-bold text-primary-foreground uppercase tracking-[0.3em]">Men</span>
            </div>
          </Link>
          <Link to="/shop?category=women" className="group relative aspect-[3/4] md:aspect-[4/3] overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="text-lg md:text-2xl font-bold text-primary-foreground uppercase tracking-[0.3em]">Women</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="container pb-16 md:pb-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs uppercase tracking-[0.3em]">Featured</h2>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="container pb-16 md:pb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-xs uppercase tracking-[0.3em]">New Arrivals</h2>
            <Link to="/shop?category=new" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {newArrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Brand Statement */}
      <section className="bg-card border-y border-border">
        <div className="container py-20 md:py-28 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Our Philosophy</p>
          <p className="text-lg md:text-xl leading-relaxed">
            We're here to build a brand that goes beyond just clothing. ALKE blends comfort with effortless elegance — designed for people who want to look refined without sacrificing ease.
          </p>
        </div>
      </section>
    </div>
  );
}
