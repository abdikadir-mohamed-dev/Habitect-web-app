import { Link } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";
import PropertyGrid from "../components/PropertyGrid";

function Properties() {
  const { properties } = useProperties();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">All Properties</h1>

        <Link
          to="/saved-properties"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg"
        >
          Saved Properties
        </Link>
      </div>

      <PropertyGrid properties={properties} />

    </section>
  );
}

export default Properties;