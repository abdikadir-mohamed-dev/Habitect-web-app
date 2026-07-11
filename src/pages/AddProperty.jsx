import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";

const AddProperty = () => {
  const navigate = useNavigate();
  const { addProperty } = useProperties();

  const [form, setForm] = useState({
    title: "",
    city: "",
    state: "",
    price: "",
    type: "",
    beds: "",
    baths: "",
    sqft: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProperty = {
      id: `hb-${Date.now()}`,
      title: form.title,
      city: form.city,
      state: form.state,
      price: Number(form.price),
      type: form.type,
      beds: Number(form.beds),
      baths: Number(form.baths),
      sqft: Number(form.sqft),
      description: form.description,
      status: "For Sale",
      featured: false,
      images: [
        form.image ||
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      ],
    };

    addProperty(newProperty);

   

    navigate("/admin/properties");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Add Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow grid md:grid-cols-2 gap-5"
        >

          <input
            name="title"
            placeholder="Title"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="state"
            placeholder="State"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="price"
            placeholder="Price"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="type"
            placeholder="Property Type"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="beds"
            placeholder="Bedrooms"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="baths"
            placeholder="Bathrooms"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="sqft"
            placeholder="Area (sq ft)"
            className="border p-3 rounded"
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Image URL"
            className="border p-3 rounded md:col-span-2"
            onChange={handleChange}
          />

          <textarea
            name="description"
            rows="5"
            placeholder="Description"
            className="border p-3 rounded md:col-span-2"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded md:col-span-2"
          >
            Save Property
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddProperty;