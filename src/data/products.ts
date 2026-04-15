import greyHoodie from "@/assets/products/grey-hoodie.jpg";
import blackCrewneck from "@/assets/products/black-crewneck.jpg";
import beigeJoggers from "@/assets/products/beige-joggers.jpg";
import charcoalZip from "@/assets/products/charcoal-zip.jpg";
import whiteTee from "@/assets/products/white-tee.jpg";
import navyHoodie from "@/assets/products/navy-hoodie.jpg";
import oliveCargo from "@/assets/products/olive-cargo.jpg";
import brownBomber from "@/assets/products/brown-bomber.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  stock: number;
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oversized Hoodie — Grey",
    description: "Premium heavyweight cotton hoodie with a relaxed oversized fit. Features a kangaroo pocket and adjustable drawstring hood. Crafted for all-day comfort with a refined, effortless look.",
    price: 45,
    image: greyHoodie,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Grey", "Black", "Beige"],
    stock: 60,
    isNew: true,
  },
  {
    id: "2",
    name: "Essential Crewneck — Black",
    description: "Classic crewneck sweatshirt in premium brushed fleece. Minimalist design with subtle ribbed cuffs and hem. The foundation of every wardrobe.",
    price: 38,
    image: blackCrewneck,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    stock: 50,
  },
  {
    id: "3",
    name: "Comfort Joggers — Beige",
    description: "Tapered joggers in soft French terry with an elastic waistband and drawstring. Side pockets and ribbed ankle cuffs for a clean finish.",
    price: 42,
    image: beigeJoggers,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Beige", "Grey", "Black"],
    stock: 45,
    isNew: true,
  },
  {
    id: "4",
    name: "Zip-Up Jacket — Charcoal",
    description: "Structured zip-up jacket with a stand collar. Made from premium tech-fleece blend for warmth without bulk. Two side pockets with invisible zippers.",
    price: 55,
    image: charcoalZip,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Charcoal", "Black"],
    stock: 40,
  },
  {
    id: "5",
    name: "Oversized Tee — White",
    description: "Relaxed fit t-shirt in heavyweight 240gsm cotton. Drop shoulders and a slightly longer body for a modern silhouette. Clean and versatile.",
    price: 28,
    image: whiteTee,
    category: "women",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Grey"],
    stock: 70,
    isSale: true,
    salePrice: 22,
  },
  {
    id: "6",
    name: "Classic Hoodie — Navy",
    description: "A refined take on the classic hoodie in deep navy. Premium weight cotton with a soft inner lining. Understated elegance for everyday wear.",
    price: 45,
    image: navyHoodie,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Grey"],
    stock: 35,
  },
  {
    id: "7",
    name: "Cargo Pants — Olive",
    description: "Utility-inspired cargo pants with a relaxed straight leg. Multiple flap pockets and a comfortable elastic waistband. Durable cotton twill fabric.",
    price: 48,
    salePrice: 39,
    image: oliveCargo,
    category: "men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Olive", "Black", "Khaki"],
    stock: 30,
    isSale: true,
  },
  {
    id: "8",
    name: "Bomber Jacket — Brown",
    description: "Modern bomber jacket in rich brown. Ribbed collar, cuffs, and hem with a front zip closure. Lined interior for added warmth. A statement piece.",
    price: 65,
    image: brownBomber,
    category: "women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Brown", "Black"],
    stock: 25,
    isNew: true,
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "new", name: "New Arrivals" },
  { id: "sale", name: "Sale" },
];

export interface Bundle {
  id: string;
  name: string;
  description: string;
  products: string[];
  originalPrice: number;
  bundlePrice: number;
}

export const bundles: Bundle[] = [
  {
    id: "b1",
    name: "Comfort Set",
    description: "Grey Hoodie + Beige Joggers — the perfect lounge set.",
    products: ["1", "3"],
    originalPrice: 87,
    bundlePrice: 72,
  },
  {
    id: "b2",
    name: "Essentials Pack",
    description: "Black Crewneck + White Tee + Cargo Pants — everyday basics elevated.",
    products: ["2", "5", "7"],
    originalPrice: 114,
    bundlePrice: 89,
  },
];
