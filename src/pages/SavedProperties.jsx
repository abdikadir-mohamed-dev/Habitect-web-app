import { useProperties } from "../context/PropertiesContext";
import { useFavorites } from "../context/FavoritesContext";
import PropertyGrid from "../components/PropertyGrid";

export default function SavedProperties() {
  const { properties } = useProperties();
  const { favoriteIds } = useFavorites();

  const savedProperties = properties.filter((property) =>
    favoriteIds.includes(property.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Saved Properties
      </h1>

      <PropertyGrid
        properties={savedProperties}
        emptyMessage="You haven't saved any properties yet."
      />
    </div>
  );
}