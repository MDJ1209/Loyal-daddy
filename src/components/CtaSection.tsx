import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/10 px-8 py-20 md:px-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 relative">Ready to feed them the best?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 relative">
            Join thousands of responsible dog owners who have switched to Loyal-Daddy. Subscribe today and save 15% on your first order.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative">
            <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-500">Shop All Products</button>
            <button className="px-8 py-4 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all duration-500">Contact a Nutritionist</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
