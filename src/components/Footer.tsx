import { PawPrint, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-forest/5 pt-32 pb-12" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Identity */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-3xl text-forest tracking-tight italic">
                Loyal Daddy
              </span>
            </div>
            <p className="text-black/70 text-lg font-body leading-relaxed max-w-sm">
              Honoring the timeless ritual of clean, farm-grown nutrition. From our family farm to your dog's bowl. We believe in transparency, heritage breeds, and the power of nature.
            </p>
            <div className="flex items-center gap-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-forest/10 rounded-full flex items-center justify-center text-forest/40 hover:text-forest hover:border-forest transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold mb-8 uppercase text-[12px] tracking-[0.4em] text-forest/40">Shop</h4>
            <ul className="space-y-4 font-body text-base text-black/80">
              {["Farmhouse Fare", "Clean Treats", "Wellness Bundles", "Farm Story"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-forest transition-all inline-block hover:translate-x-1">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-display font-bold mb-8 uppercase text-[12px] tracking-[0.4em] text-forest/40">Explore</h4>
            <ul className="space-y-4 font-body text-base text-black/80">
              {["Sustainability", "Process", "Community", "Journal"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-forest transition-all inline-block hover:translate-x-1">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold mb-8 uppercase text-[12px] tracking-[0.4em] text-forest/40">The Journal</h4>
            <p className="text-black/70 text-base font-body mb-8">
              Join our journal for seasonal updates from the farm and canine wellness insights.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-cream/50 border-b-2 border-forest/10 px-0 py-4 text-lg focus:outline-none focus:border-forest transition-all font-display italic text-black placeholder:text-black/20"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-forest group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-12 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-widest font-black text-black/20">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p>© {currentYear} Loyal Daddy Family Farm.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-forest transition-colors">Privacy</a>
              <a href="#" className="hover:text-forest transition-colors">Terms</a>
              <a href="#" className="hover:text-forest transition-colors">Shipping</a>
            </div>
          </div>
          <p className="italic font-display lowercase opacity-60">From Soil to Bowl</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
