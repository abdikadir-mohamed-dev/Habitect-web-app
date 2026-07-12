import { useState } from "react";

export default function PropertyGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col gap-2.5">
      <div className="rounded-lg2 overflow-hidden aspect-[16/10] bg-panel-muted">
        <img
          src={images[activeIndex]}
          alt={`${title} — photo ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1} of ${images.length}`}
              className={`aspect-square rounded-lg overflow-hidden border-2 ${
                index === activeIndex ? "border-gold-deep" : "border-transparent"
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}