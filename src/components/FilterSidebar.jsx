import { propertyTypes } from "../data/properties";
import { link } from "react-router-dom";

const bedroomOptions = ["Any", "1+", "2+", "3+", "4+"];

const fieldLabel = "text-xs font-semibold uppercase tracking-wide text-ink-soft";
const fieldInput =
  "border border-line rounded-lg px-3 py-2.5 text-sm font-body bg-white text-ink focus:outline-none focus:border-gold-deep";

export default function FilterSidebar({ filters, onChange, onReset, resultCount }) {
  const update = (patch) => onChange({ ...filters, ...patch });

  return (
    <aside className="bg-panel border border-line rounded-lg2 p-5 flex flex-col gap-4 h-fit sticky top-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px]">Filters</h3>
        <button type="button" onClick={onReset} className="text-[13px] font-semibold text-gold-deep">
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-location" className={fieldLabel}>Location</label>
        <input
          id="filter-location"
          type="text"
          placeholder="City or state"
          value={filters.location}
          onChange={(e) => update({ location: e.target.value })}
          className={fieldInput}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-type" className={fieldLabel}>Property type</label>
        <select
          id="filter-type"
          value={filters.type}
          onChange={(e) => update({ type: e.target.value })}
          className={fieldInput}
        >
          <option value="All">All types</option>
          {propertyTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={fieldLabel}>Price range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            min={0}
            value={filters.minPrice}
            onChange={(e) => update({ minPrice: e.target.value })}
            className={`${fieldInput} w-0 flex-1`}
          />
          <span className="text-ink-soft">–</span>
          <input
            type="number"
            placeholder="Max"
            min={0}
            value={filters.maxPrice}
            onChange={(e) => update({ maxPrice: e.target.value })}
            className={`${fieldInput} w-0 flex-1`}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-beds" className={fieldLabel}>Bedrooms</label>
        <select
          id="filter-beds"
          value={filters.beds}
          onChange={(e) => update({ beds: e.target.value })}
          className={fieldInput}
        >
          {bedroomOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="filter-status" className={fieldLabel}>Listing status</label>
        <select
          id="filter-status"
          value={filters.status}
          onChange={(e) => update({ status: e.target.value })}
          className={fieldInput}
        >
          <option value="All">Any status</option>
          <option value="For Sale">For sale</option>
          <option value="For Rent">For rent</option>
        </select>
      </div>

      <p className="pt-2 border-t border-line text-[13px] text-ink-soft">{resultCount} properties found</p>
         <Link to="/saved-properties" className="w-full bg-orange-500 text-white text-center py-3 rounded-lg hover:bg-orange-600 transition">
           Saved Properties
          </Link>

    </aside>
  );
}