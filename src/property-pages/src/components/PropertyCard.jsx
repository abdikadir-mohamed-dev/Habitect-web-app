import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { formatPrice } from "../data/properties";

export default function PropertyCard({ property }) {
  const { id, title, images, city, state, beds, baths, sqft, status } = property;

  return (
    <Link
      to={`/properties/${id}`}
      className="block bg-panel rounded-lg2 overflow-hidden shadow-card border border-line transition-transform duration-200 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-panel-muted">
        <img src={images[0]} alt={title} loading="lazy" className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-bg/80 text-gold-tint text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full">
          {status}
        </span>
        <div className="absolute top-2.5 right-2.5">
          <FavoriteButton propertyId={id} size="sm" />
        </div>
      </div>

      <div className="p-4 pb-5 flex flex-col gap-1.5">
        <span className="font-display text-xl font-semibold text-ink">{formatPrice(property)}</span>
        <h3 className="text-[15px] font-medium">{title}</h3>
        <p className="text-ink-soft text-[13px]">
          {city}, {state}
        </p>
        <div className="mt-1.5 flex gap-2 text-[13px] text-ink-soft">
          <span>{beds} bd</span>
          <span aria-hidden="true">·</span>
          <span>{baths} ba</span>
          <span aria-hidden="true">·</span>
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  );
}