import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useProperties } from "../context/PropertiesContext";
import { useFavorites } from "../context/FavoritesContext";

import PropertyGrid from "../components/PropertyGrid";
import AppointmentCard from "../components/AppointmentCard";

export default function UserDashboard() {
  const navigate = useNavigate();

  const { properties } = useProperties();
  const { favoriteIds } = useFavorites();

  // Logged in user
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser")) || {
    name: "Guest User",
    email: "guest@example.com",
    phone: "Not provided",
    memberSince: new Date().toLocaleDateString(),
  };

  const [activeTab, setActiveTab] = useState("overview");

  const [appointments, setAppointments] = useState(() => {
    return JSON.parse(localStorage.getItem("appointments")) || [];
  });

  const handleCancelAppointment = (id) => {
    
      const updatedAppointments = appointments.filter(
        (appointment) => appointment.id !== id
      );

      setAppointments(updatedAppointments);

      localStorage.setItem(
        "appointments",
        JSON.stringify(updatedAppointments)
      );
    
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const savedProperties = properties.filter((property) =>
    favoriteIds.includes(property.id)
  );

  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}

      <aside className="w-64 bg-slate-950 text-white flex flex-col justify-between p-6">

        <div>

          <h1 className="text-3xl font-bold mb-10">
            HABITECT
          </h1>

          <div className="space-y-2">

            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "overview"
                  ? "bg-orange-500"
                  : "hover:bg-slate-800"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setActiveTab("properties")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "properties"
                  ? "bg-orange-500"
                  : "hover:bg-slate-800"
              }`}
            >
              Explore Properties
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "saved"
                  ? "bg-orange-500"
                  : "hover:bg-slate-800"
              }`}
            >
              Saved Properties
            </button>

            <button
              onClick={() => setActiveTab("appointments")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "appointments"
                  ? "bg-orange-500"
                  : "hover:bg-slate-800"
              }`}
            >
              My Appointments
            </button>

            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full text-left p-3 rounded-lg ${
                activeTab === "profile"
                  ? "bg-orange-500"
                  : "hover:bg-slate-800"
              }`}
            >
              Profile
            </button>

          </div>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 rounded-lg py-3 font-semibold transition"
        >
          Logout
        </button>

      </aside>

      {/* Main Content */}

      <main className="flex-1 p-10">
        {/* Dashboard */}
        {activeTab === "overview" && (
          <>
            <h1 className="text-3xl font-bold">
              Welcome back, {loggedUser.name}
            </h1>

            <p className="text-slate-500 mt-2">
              Here's a summary of your account.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Available Properties</h3>
                <p className="text-4xl font-bold mt-3">
                  {properties.length}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Saved Properties</h3>
                <p className="text-4xl font-bold mt-3">
                  {savedProperties.length}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-slate-500">Appointments</h3>
                <p className="text-4xl font-bold mt-3">
                  {appointments.length}
                </p>
              </div>

            </div>
          </>
        )}

        {/* Explore Properties */}
        {activeTab === "properties" && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">
                Explore Properties
              </h1>

              <span className="text-slate-500">
                {properties.length} Properties
              </span>
            </div>

            <PropertyGrid properties={properties} />
          </>
        )}

        {/* Saved Properties */}
        {activeTab === "saved" && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">
                Saved Properties
              </h1>

              <span className="text-slate-500">
                {savedProperties.length} Saved
              </span>
            </div>

            {savedProperties.length > 0 ? (
              <PropertyGrid properties={savedProperties} />
            ) : (
              <div className="bg-white rounded-xl shadow p-10 text-center">
                <h2 className="text-2xl font-semibold">
                  No Saved Properties
                </h2>

                <p className="text-slate-500 mt-3">
                  Click the ❤️ icon on any property to save it.
                </p>
              </div>
            )}
          </>
        )}

        {/* Appointments */}
        {activeTab === "appointments" && (
          <>
            <h1 className="text-3xl font-bold mb-8">
              My Appointments
            </h1>

            {appointments.length > 0 ? (
              <div className="space-y-5">
                {appointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onCancel={handleCancelAppointment}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow p-10 text-center">
                <h2 className="text-2xl font-semibold">
                  No Appointments
                </h2>

                <p className="text-slate-500 mt-3">
                  Book a property viewing to see your appointments here.
                </p>
              </div>
            )}
          </>
        )}

        {/* Profile */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-xl shadow p-8 max-w-2xl">

            <h1 className="text-3xl font-bold mb-8">
              My Profile
            </h1>

            <div className="space-y-5">

              <div>
                <label className="font-semibold block mb-2">
                  Full Name
                </label>

                <input
                  value={loggedUser.name}
                  readOnly
                  className="w-full border rounded-lg p-3 bg-slate-50"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Email Address
                </label>

                <input
                  value={loggedUser.email}
                  readOnly
                  className="w-full border rounded-lg p-3 bg-slate-50"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Phone Number
                </label>

                <input
                  value={loggedUser.phone || "Not Added"}
                  readOnly
                  className="w-full border rounded-lg p-3 bg-slate-50"
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Member Since
                </label>

                <input
                  value={loggedUser.memberSince || "New Member"}
                  readOnly
                  className="w-full border rounded-lg p-3 bg-slate-50"
                />
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}
      