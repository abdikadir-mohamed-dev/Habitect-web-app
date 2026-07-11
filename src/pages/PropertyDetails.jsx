import { useParams } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";
import { formatPrice } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const { getProperty } = useProperties();

  const property = getProperty(id);

  if (!property) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Property Not Found
      </h1>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {property.title}
      </h1>

      <p className="text-2xl text-orange-500 mt-3">
        {formatPrice(property)}
      </p>

      <p className="mt-4 text-gray-600">
        {property.city}, {property.state}
      </p>

      <div className="flex gap-6 mt-6">
        <span>{property.beds} Beds</span>
        <span>{property.baths} Baths</span>
        <span>{property.sqft} sqft</span>
      </div>

      <p className="mt-8 text-gray-700 leading-8">
        {property.description}
      </p>

    </section>
  );
}

export default PropertyDetails;