import PropertyCard from "./PropertyCard";
import SectionTitle from "./SectionTitle";

const FeaturedProperties = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Modern Family House",
      location: "Westlands, Nairobi",
      price: "KSh 15,000,000",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Luxury Apartment",
      location: "Kilimani, Nairobi",
      price: "KSh 12,500,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Elegant Villa",
      location: "Karen, Nairobi",
      price: "KSh 28,000,000",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Properties"
          subtitle="Explore our latest listings."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;