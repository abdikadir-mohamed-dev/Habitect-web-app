import AdminSidebar from "../components/AdminSidebar";

const AddProperty = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Add Property
        </h1>

        <form className="bg-white p-8 rounded-xl shadow grid md:grid-cols-2 gap-5">

          <input className="border p-3 rounded" placeholder="Title" />

          <input className="border p-3 rounded" placeholder="Location" />

          <input className="border p-3 rounded" placeholder="Price" />

          <input className="border p-3 rounded" placeholder="Property Type" />

          <input className="border p-3 rounded" placeholder="Bedrooms" />

          <input className="border p-3 rounded" placeholder="Bathrooms" />

          <input className="border p-3 rounded" placeholder="Area (sq ft)" />

          <input type="file" className="border p-3 rounded" />

          <textarea
            className="border p-3 rounded md:col-span-2"
            rows="5"
            placeholder="Description"
          ></textarea>

          <button className="bg-orange-500 text-white py-3 rounded md:col-span-2">
            Save Property
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddProperty;