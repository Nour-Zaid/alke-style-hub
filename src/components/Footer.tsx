import { Link } from "react-router-dom";
import logoDark from "@/assets/logo-dark.png";
import logoWhite from "@/assets/logo-white.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logoDark} alt="alke" className="h-5 mb-4 dark:hidden" />
            <img src={logoWhite} alt="alke" className="h-5 mb-4 hidden dark:block" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comfort meets elegance. A modern brand blending minimalism with effortless style.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop?category=men" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Men</Link>
              <Link to="/shop?category=women" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Women</Link>
              <Link to="/shop?category=new" className="text-xs text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link>
              <Link to="/shop?category=sale" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Sale</Link>
              <Link to="/bundles" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Bundles</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Info</h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <Link to="/faq" className="text-xs text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] mb-4">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} ALKE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
