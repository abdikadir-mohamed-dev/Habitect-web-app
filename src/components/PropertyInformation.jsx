import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../data/properties";
import FavoriteButton from "./FavoriteButton";

export default function PropertyInformation({ property }) {
  const navigate = useNavigate();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { id, title, address, city, state, status, beds, baths, sqft, yearBuilt, lotSize, garage, description, amenities, agent } = property;

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      alert("Please select a date");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      propertyTitle: title,
      location: `${city}, ${state}`,
      price: formatPrice(property),
      date: date,
      time: time || "To be confirmed",
      status: "Pending",
      reference: Math.floor(10000000000 + Math.random() * 90000000000),
    };

    const existingAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...existingAppointments, newAppointment]));
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col gap-7 relative">
      <div className="flex justify-between items-start gap-4 flex-wrap">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">{status}</span>
          <h1 className="text-[30px] mt-1.5 font-bold">{title}</h1>
          <p className="text-slate-500 mt-1.5">{address}, {city}, {state}</p>
        </div>
        <div className="flex items-center gap-3.5">
          <span className="text-2xl font-semibold">{formatPrice(property)}</span>
        </div>
      </div>

      <section className="flex flex-wrap items-center gap-3.5 p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
        <div>
          <p className="font-semibold">{agent?.name}</p>
          <p className="text-[13px] text-slate-500">{agent?.phone}</p>
        </div>
        <button
          type="button"
          onClick={() => setShowBookingModal(true)}
          className="ml-auto bg-orange-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Book Appointment
        </button>
      </section>

      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Book Viewing for {title}</h3>
            <form onSubmit={handleBookSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border rounded-lg p-2.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border rounded-lg p-2.5"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowBookingModal(false)} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-slate-950 text-white rounded-lg font-semibold">
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}