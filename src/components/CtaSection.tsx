import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="bg-forest section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-10"
        >
          <div className="space-y-4 text-white">
            <span className="text-[14px] uppercase tracking-[0.4em] font-extrabold text-white/50 block">
              Ready to Elevate Their Health?
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-white italic">
              Begin Your Journey to <br className="hidden md:block" /> Thriving Canine Wellness
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-brutal-secondary">
              Buy Now — $49.50
            </button>
            <button className="btn-brutal-secondary text-[14px]">
              Join the Farm Journal
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
