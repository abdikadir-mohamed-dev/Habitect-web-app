import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";
import { formatPrice } from "../data/properties";
import API from "../services/api";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProperty } = useProperties();

  const property = getProperty(id);
  console.log("CURRENT PROPERTY OBJECT:", property);

  // State for appointment booking date and time
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  if (!property) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Property Not Found
      </h1>
    );
  }

  // FIXED: Check property.image first based on your object logs
  const image =
    property.image ||
    property.image_url ||
    property.images?.[0] ||
    "https://placehold.co/1200x800?text=No+Image+Available";

  const location =
    property.city && property.state
      ? `${property.city}, ${property.state}`
      : property.location;

  const beds = property.beds ?? property.bedrooms ?? 0;
  const baths = property.baths ?? property.bathrooms ?? 0;
  const sqft = property.sqft ?? "--";

  const handleBookViewing = async () => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      alert("Please log in to book a viewing.");
      navigate("/login");
      return;
    }

    if (!appointmentDate || !appointmentTime) {
      alert("Please select both a date and time for your viewing.");
      return;
    }

    try {
      // Send the appointment data directly to your Flask backend database
      await API.post("/appointments", {
        property_id: property.id,
        date: appointmentDate,
        time: appointmentTime,
      });

      alert("Appointment booked successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Failed to book appointment", error);
      alert(error.response?.data?.message || "Failed to book appointment. Please try again.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <img
        src={image}
        alt={property.title}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-8">
        {property.title}
      </h1>

      <p className="text-2xl text-orange-500 mt-3">
        {formatPrice(property)}
      </p>

      <p className="mt-4 text-gray-600">
        {location}
      </p>

      <div className="flex gap-6 mt-6">
        <span>{beds} Beds</span>
        <span>{baths} Baths</span>
        <span>{sqft} sqft</span>
      </div>

      <p className="mt-8 text-gray-700 leading-8">
        {property.description}
      </p>

      {/* Date & Time Selection Box */}
      <div className="mt-10 p-6 bg-slate-50 border rounded-xl max-w-xl">
        <h3 className="text-lg font-semibold mb-4">Schedule a Viewing</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-slate-700 mb-1">
              Viewing Date
            </label>
            <input
              id="appointmentDate"
              name="appointmentDate"
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full border rounded-lg p-2.5 bg-white"
            />
          </div>

          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-slate-700 mb-1">
              Viewing Time
            </label>
            <input
              id="appointmentTime"
              name="appointmentTime"
              type="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full border rounded-lg p-2.5 bg-white"
            />
          </div>
        </div>

        <button
          onClick={handleBookViewing}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Book Viewing
        </button>
      </div>
    </section>
  );
}

export default PropertyDetails;