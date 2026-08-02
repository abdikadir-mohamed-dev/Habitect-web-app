import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";
import { getUsers, getAdminAppointments } from "../services/api";

const AdminDashboard = () => {
  const { properties = [] } = useProperties();
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const userRes = await getUsers();
        setUsers(userRes.data);
        
        const appRes = await getAdminAppointments();
        setAppointments(appRes.data);
      } catch (error) {
        console.error("Failed to fetch admin data:", error.response?.data || error.message);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-500">Properties</h2>
            <p className="text-3xl font-bold text-orange-500">
              {properties.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-500">Users</h2>
            <p className="text-3xl font-bold text-orange-500">
              {users.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-500">Appointments</h2>
            <p className="text-3xl font-bold text-orange-500">
              {appointments.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-gray-500">Active Listings</h2>
            <p className="text-3xl font-bold text-orange-500">
              {properties.length}
            </p>
          </div>
        </div>

        {/* Client Viewing Appointments Table */}
        <div className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4">Client Viewing Appointments</h2>
          {appointments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b text-gray-500 text-sm">
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Property</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-700">
                        {app.client_name || app.user?.username || `User ID: ${app.user_id}`}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {app.property_title || app.property?.title || `Property ID: ${app.property_id}`}
                      </td>
                      <td className="py-3 px-4 text-gray-700">{app.date}</td>
                      <td className="py-3 px-4 text-gray-700">{app.time}</td>
                      <td className="py-3 px-4">
                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                          {app.status || "Pending"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500 text-center py-6">No appointments booked yet.</p>
          )}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Properties</h2>

          <ul className="space-y-3">
            {properties
              ?.slice(-5)
              .reverse()
              .map((property) => (
                <li key={property.id} className="text-gray-700">
                  {property.title} - {property.city || property.location}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;