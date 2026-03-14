const CtaSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/20 px-8 py-20 md:px-16 text-center overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 relative">
            Ready to feed them the best?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 relative">
            Join thousands of responsible dog owners who have switched to Loyal-Daddy. Subscribe today and save 15% on your first order.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative">
            <button className="px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold hover:shadow-lg hover:shadow-secondary/30 transition-all duration-500">
              Shop All Products
            </button>
            <button className="px-8 py-4 rounded-full border border-secondary/30 text-secondary font-semibold hover:bg-secondary/10 transition-all duration-500">
              Contact a Nutritionist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
