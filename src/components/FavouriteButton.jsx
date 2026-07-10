import { useFavorites } from "../context/FavoritesContext";

const sizeClasses = {
  sm: "w-8 h-8 [&>svg]:w-4 [&>svg]:h-4",
  md: "w-10 h-10 [&>svg]:w-5 [&>svg]:h-5",
  lg: "w-12 h-12 [&>svg]:w-6 [&>svg]:h-6",
};

export default function FavoriteButton({ propertyId, size = "md" }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(propertyId);

  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={active ? "Remove from saved properties" : "Save this property"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(propertyId);
      }}
      className={`inline-flex items-center justify-center rounded-full bg-white/95 shadow-[0_4px_12px_rgba(20,16,8,0.15)] transition-transform hover:scale-105 ${
        active ? "text-gold" : "text-ink"
      } ${sizeClasses[size]}`}
    >
      <svg viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 20.6s-7.4-4.6-10-9C.5 8.2 2 4.4 5.6 3.6c2-.4 4 .4 5.2 2.2.9-1.8 3.2-2.6 5.2-2.2 3.6.8 5.1 4.6 3.6 8-2.6 4.4-10 9-10 9z"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}