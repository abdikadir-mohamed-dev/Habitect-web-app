import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";
import { useFavorites } from "../context/FavoritesContext";
import PropertyGrid from "../components/PropertyGrid";
import AppointmentCard from "../components/AppointmentCard";
import API from "../services/api";

export default function UserDashboard() {
  const navigate = useNavigate();
  const { properties } = useProperties();
  const { favoriteIds } = useFavorites();

  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {
    name: "User",
    email: "user@example.com",
    phone: "+254 700 000000",
    memberSince: "2026",
  };

  const [activeTab, setActiveTab] = useState("overview");
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the secure backend database endpoint whenever activeTab changes
  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      try {
        const response = await API.get("/appointments");
        setAppointments(response.data);
      } catch (error) {
        console.error("Failed to fetch appointments from backend", error);
      }
    };

    fetchAppointments();
  }, [activeTab]);

  const handleCancelAppointment = async (id) => {
    try {
      await API.delete(`/appointments/${id}`);
      setAppointments((prev) => prev.filter((app) => app.id !== id));
    } catch (error) {
      console.error("Failed to cancel appointment", error);
      alert("Could not cancel appointment. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("access_token");
    // Force a full reload to clear all React state and context cache across user sessions
    window.location.href = "/";
  };

  const savedProperties = properties.filter((property) => favoriteIds.includes(property.id));

  return (
    <div className="min-h-screen flex bg-slate-100 relative">
      <aside className="fixed inset-y-0 left-0 z-50 w-64 h-screen bg-slate-950 text-white flex flex-col justify-between p-6">
        <div>
          <h1 
            onClick={() => navigate("/")} 
            className="text-3xl font-bold mb-10 cursor-pointer hover:text-orange-500 transition"
          >
            HABITECT
          </h1>
          <div className="space-y-2">
            {["overview", "properties", "saved", "appointments", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left p-3 rounded-lg capitalize ${
                  activeTab === tab ? "bg-orange-500 font-bold" : "hover:bg-slate-800"
                }`}
              >
                {tab === "overview" ? "Dashboard" : tab === "saved" ? "Saved Properties" : tab}
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 rounded-lg py-3 font-semibold transition">
          Logout
        </button>
      </aside>

      <main className="flex-1 ml-64 p-10 min-h-screen overflow-y-auto">
        {activeTab === "overview" && (
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {loggedUser.name}</h1>
            <p className="text-slate-500 mt-2">Here's a summary of your real estate activity.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Available Properties</h3>
                <p className="text-4xl font-bold mt-3">{properties.length}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Saved Properties</h3>
                <p className="text-4xl font-bold mt-3">{savedProperties.length}</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Appointments</h3>
                <p className="text-4xl font-bold mt-3">{appointments.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "properties" && <PropertyGrid properties={properties} />}
        {activeTab === "saved" && <PropertyGrid properties={savedProperties} />}

        {activeTab === "appointments" && (
          <div>
            <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
            {appointments.length > 0 ? (
              <div className="space-y-5">
                {appointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} appointment={appointment} onCancel={handleCancelAppointment} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow p-10 text-center">
                <h2 className="text-2xl font-semibold">No Appointments</h2>
                <p className="text-slate-500 mt-3">Book a property viewing to see your appointments here.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white rounded-xl shadow p-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">My Profile</h1>
            <div className="space-y-5">
              <div>
                <label className="font-semibold block mb-2 text-sm text-slate-600">Full Name</label>
                <input value={loggedUser.name} readOnly className="w-full border rounded-lg p-3 bg-slate-50 text-slate-800" />
              </div>
              <div>
                <label className="font-semibold block mb-2 text-sm text-slate-600">Email Address</label>
                <input value={loggedUser.email} readOnly className="w-full border rounded-lg p-3 bg-slate-50 text-slate-800" />
              </div>
              <div>
                <label className="font-semibold block mb-2 text-sm text-slate-600">Phone Number</label>
                <input value={loggedUser.phone} readOnly className="w-full border rounded-lg p-3 bg-slate-50 text-slate-800" />
              </div>
              <div>
                <label className="font-semibold block mb-2 text-sm text-slate-600">Member Since</label>
                <input value={loggedUser.memberSince || "2026"} readOnly className="w-full border rounded-lg p-3 bg-slate-50 text-slate-800" />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}