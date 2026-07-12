import PropertyCard from "./PropertyCard";
import SectionTitle from "./SectionTitle";
import { properties } from "../data/properties";

const FeaturedProperties = () => {
  const featuredProperties = properties.filter(
    (property) => property.featured
  );

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Properties"
          subtitle="Explore our latest listings."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;