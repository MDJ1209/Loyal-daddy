import { motion } from "framer-motion";
import { ShoppingBag, Star, Leaf, Heart } from "lucide-react";
import productBag from "@/assets/product-bag.png";

const ProductSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={productBag}
              alt="Loyal-Daddy Farm Raised Chicken Recipe dog food bag"
              className="w-full max-w-md drop-shadow-2xl"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-secondary">Our Flagship Product</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Farm Raised
              <br />
              <span className="text-gradient">Chicken Recipe</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Made with 100% farm-raised chicken from our family farm. No fillers, no artificial preservatives — just real, wholesome nutrition your dog deserves.
            </p>

            <div className="flex items-center gap-1 pt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">4.9/5 (2,300+ reviews)</span>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { icon: Leaf, label: "100% Natural" },
                { icon: Heart, label: "Vet Approved" },
                { icon: ShoppingBag, label: "Free Shipping" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50 border border-border">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div>
                <span className="text-3xl font-bold text-foreground">$49.99</span>
                <span className="text-sm text-muted-foreground ml-2 line-through">$59.99</span>
              </div>
              <button className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-500">
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
