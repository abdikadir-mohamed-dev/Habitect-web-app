import { formatPrice } from "../data/properties";
import FavoriteButton from "./FavoriteButton";

export default function PropertyInformation({ property }) {
  const {
    id,
    title,
    address,
    city,
    state,
    status,
    beds,
    baths,
    sqft,
    yearBuilt,
    lotSize,
    garage,
    description,
    amenities,
    agent,
  } = property;

  return (
    <div className="flex flex-col gap-7">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-deep">{status}</span>
          <h1 className="text-[30px] mt-1.5">{title}</h1>
          <p className="text-ink-soft mt-1.5">
            {address}, {city}, {state}
          </p>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="font-display text-2xl font-semibold">{formatPrice(property)}</span>
          <FavoriteButton propertyId={id} size="lg" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 border border-line rounded-lg2 bg-panel">
        {[
          ["Beds", beds],
          ["Baths", baths],
          ["Sqft", sqft.toLocaleString()],
          ["Garage", garage],
        ].map(([label, value], i) => (
          <div
            key={label}
            className={`p-4 text-center flex flex-col gap-1 border-line ${
              i < 3 ? "sm:border-r" : ""
            } ${i % 2 === 0 ? "border-r sm:border-r" : ""}`}
          >
            <strong className="font-display text-xl">{value}</strong>
            <span className="text-[12px] uppercase tracking-wide text-ink-soft">{label}</span>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-[19px] mb-2.5">Property description</h2>
        <p className="text-ink-soft leading-relaxed">{description}</p>
      </section>

      <section>
        <h2 className="text-[19px] mb-2.5">Details</h2>
        <dl className="grid grid-cols-2 gap-3.5 m-0">
          {[
            ["Year built", yearBuilt],
            ["Lot size", lotSize],
            ["Property type", property.type],
            ["Status", status],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-[12px] uppercase tracking-wide text-ink-soft">{label}</dt>
              <dd className="mt-0.5 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-[19px] mb-2.5">Amenities</h2>
        <ul className="grid grid-cols-2 gap-2.5 list-none m-0 p-0">
          {amenities.map((item) => (
            <li key={item} className="px-3.5 py-2.5 bg-panel border border-line rounded-lg text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap items-center gap-3.5 p-4 border border-line rounded-lg2 bg-panel">
        <img src={agent.avatar} alt={agent.name} className="w-[52px] h-[52px] rounded-full object-cover" />
        <div>
          <p className="font-semibold">{agent.name}</p>
          <p className="text-[13px] text-ink-soft">{agent.phone}</p>
          <p className="text-[13px] text-ink-soft">{agent.email}</p>
        </div>
        <button type="button" className="btn btn-gold ml-auto w-full sm:w-auto">
          Book Appointment
        </button>
      </section>
    </div>
  );
}