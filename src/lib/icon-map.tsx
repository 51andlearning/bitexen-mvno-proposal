import {
  Plane, Coins, BarChart3, TrendingUp, Shield, Lock, GraduationCap, Briefcase,
  Smartphone, UserCircle, Package, CreditCard, Bell, Gift, Wallet, Scale,
  Target, Server, LifeBuoy, Globe, Plug, ShieldCheck,
  Truck, Fingerprint, ShoppingCart, Sparkles,
  Signal, Newspaper, Megaphone, ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  plane: Plane,
  coins: Coins,
  "bar-chart": BarChart3,
  "trending-up": TrendingUp,
  shield: Shield,
  lock: Lock,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  smartphone: Smartphone,
  "user-circle": UserCircle,
  package: Package,
  "credit-card": CreditCard,
  bell: Bell,
  gift: Gift,
  wallet: Wallet,
  scale: Scale,
  target: Target,
  server: Server,
  "life-buoy": LifeBuoy,
  globe: Globe,
  plug: Plug,
  "shield-check": ShieldCheck,
  truck: Truck,
  fingerprint: Fingerprint,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  signal: Signal,
  newspaper: Newspaper,
  megaphone: Megaphone,
  shopping: ShoppingBag,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICON_MAP[name];
  if (!Cmp) return null;
  return <Cmp className={className} />;
}
