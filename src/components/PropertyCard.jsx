const PropertyCard = ({ image, title, location, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-gray-500 mt-2">{location}</p>

        <p className="text-orange-500 text-2xl font-bold mt-3">
          {price}
        </p>

        <button className="mt-5 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;