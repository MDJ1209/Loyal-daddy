import cardChickens from "@/assets/card-chickens.jpg";
import cardNutrition from "@/assets/card-nutrition.jpg";
import cardIngredients from "@/assets/card-ingredients.jpg";

const features = [
  {
    title: "Family Farm Raised",
    description: "Pasture-raised for superior protein and natural vitality. No cages, no stress, just healthy lives.",
    image: cardChickens,
  },
  {
    title: "Clean Dog Nutrition",
    description: "Formulated for peak canine health by veterinarians and farm nutritionists. Energy that lasts.",
    image: cardNutrition,
  },
  {
    title: "Natural Ingredients",
    description: "Zero fillers, zero artificial preservatives. Just wholesome goodness straight from our soil.",
    image: cardIngredients,
  },
];

const FeatureCards = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Commitment to Quality
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-card card-border overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
