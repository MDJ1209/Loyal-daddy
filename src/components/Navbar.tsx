import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["Home", "About Us", "Our Farm", "Dog Nutrition", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-primary">
            <PawPrint className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">Loyal-Daddy</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            Shop Dog Food
          </button>
          <button className="px-5 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-all duration-300">
            Our Farm Story
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-6 space-y-4">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, "-")}`} className="block text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">Shop Dog Food</button>
            <button className="px-5 py-2.5 rounded-full border border-primary/30 text-primary text-sm font-medium">Our Farm Story</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
