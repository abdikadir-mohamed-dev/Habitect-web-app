 import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";

const AdminDashboard = () => {
  const { properties } = useProperties();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>

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

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Properties
          </h2>

          <ul className="space-y-3">
            {properties
              .slice(-5)
              .reverse()
              .map((property) => (
                <li key={property.id}>
                  {property.title} - {property.city}
                </li>
              ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;