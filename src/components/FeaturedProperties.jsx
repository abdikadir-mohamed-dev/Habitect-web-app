import React from "react";
import { useProperties } from "../context/PropertiesContext";
import { Link } from "react-router-dom"; // Or whatever routing library you use

const FeaturedProperties = () => {
  const { properties = [] } = useProperties();

  // Grab the latest 3 properties from your context, or show nothing if empty
  const featured = properties.slice(-3).reverse();

  if (featured.length === 0) {
    return null; // Or show a fallback message
  }

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-2">Featured Properties</h2>
      <p className="text-gray-500 text-center mb-10">Explore our latest listings.</p>

      <div className="grid md:grid-cols-3 gap-8">
        {featured.map((property) => (
          <Link to={`/properties/${property.id}`} key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img 
              src={property.image_url || property.image || "https://via.placeholder.com/400x300"} 
              alt={property.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
              <p className="text-orange-600 font-bold text-lg mb-4">
                ${Number(property.price).toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm">{property.city || property.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;