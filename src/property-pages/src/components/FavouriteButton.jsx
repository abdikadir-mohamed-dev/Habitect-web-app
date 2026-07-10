import { useFavorites } from "../context/FavoritesContext";
import "./FavoriteButton.css";

export default function FavoriteButton({ propertyId, size = "md" }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(propertyId);

  return (
    <button
      type="button"
      className={`favorite-btn favorite-btn--${size} ${active ? "is-active" : ""}`}
      aria-pressed={active}
      aria-label={active ? "Remove from saved properties" : "Save this property"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(propertyId);
      }}
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