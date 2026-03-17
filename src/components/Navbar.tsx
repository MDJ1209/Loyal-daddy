import { useState, useEffect } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Why Us", path: "/why-us" },
    { name: "Our Farm", path: "/#our-farm" },
    { name: "Dog Nutrition", path: "/#products" },
    { name: "Contact", path: "/#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 top-0 ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <PawPrint className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            <span className="font-display font-bold text-xl text-forest tracking-tight italic">Loyal Daddy</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  location.pathname === link.path || (link.name === "Home" && location.pathname === "/")
                    ? "font-black text-forest underline decoration-2 underline-offset-4"
                    : "font-bold text-forest/90 hover:text-forest"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="btn-brutal px-5 py-2 text-[12px]">
              Shop Now
            </button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-black/5 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-xs uppercase tracking-[0.2em] ${
                      location.pathname === link.path || (link.name === "Home" && location.pathname === "/")
                        ? "font-black text-forest"
                        : "font-bold text-forest/90"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <button className="btn-brutal w-full">
                    Shop Dog Food
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
