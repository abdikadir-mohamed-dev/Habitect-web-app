import PropertyCard from "./PropertyCard";

export default function PropertyGrid({ properties, emptyMessage = "No properties match your search yet." }) {
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center text-ink-soft bg-panel border border-dashed border-line rounded-lg2 py-16 px-6">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}