import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProperty, updateProperty } = useProperties();

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

  useEffect(() => {
    const property = getProperty(id);

    if (property) {
      setForm({
        title: property.title || "",
        city: property.city || "",
        state: property.state || "",
        price: property.price || "",
        type: property.type || "",
        beds: property.beds || "",
        baths: property.baths || "",
        sqft: property.sqft || "",
        description: property.description || "",
        image: property.images?.[0] || "",
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProperty({
      id,
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
      images: [form.image],
    });

    navigate("/admin/properties");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Edit Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow grid md:grid-cols-2 gap-5"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Title"
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="City"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="State"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Price"
          />

          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Property Type"
          />

          <input
            name="beds"
            value={form.beds}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Bedrooms"
          />

          <input
            name="baths"
            value={form.baths}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Bathrooms"
          />

          <input
            name="sqft"
            value={form.sqft}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Area (sq ft)"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="border p-3 rounded md:col-span-2"
            placeholder="Image URL"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className="border p-3 rounded md:col-span-2"
            placeholder="Description"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded md:col-span-2"
          >
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProperty;