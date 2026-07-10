const SearchBar = () => {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-6xl mx-auto -mt-12 relative z-20">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search location..."
          className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
        />

        <select className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500">
          <option>Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Office</option>
        </select>

        <select className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500">
          <option>Price Range</option>
          <option>$100 - $500</option>
          <option>$500 - $1000</option>
          <option>$1000+</option>
        </select>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;