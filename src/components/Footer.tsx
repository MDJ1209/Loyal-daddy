import { Leaf, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">Loyal-Daddy</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">Dedicated to providing the cleanest, farm-raised nutrition for your dogs. Born on a family farm, delivered to your doorstep.</p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Our Farming Process", "Nutrition Guide", "Success Stories", "Wholesale"].map((link) => (
                <li key={link}><a href="#" className="hover:text-foreground transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Shipping Policy", "Return Center", "FAQs", "Contact Us"].map((link) => (
                <li key={link}><a href="#" className="hover:text-foreground transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get farm updates and exclusive discounts.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2.5 rounded-l-full bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="px-4 py-2.5 rounded-r-full bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2026 Loyal-Daddy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
