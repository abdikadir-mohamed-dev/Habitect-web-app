import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 overflow-y-auto flex flex-col">
      <h1 className="text-2xl font-bold text-orange-500 mb-8">
        HABITECT
      </h1>

      <nav className="space-y-4 flex-1">
        <Link to="/admin/dashboard" className="block hover:text-orange-400">
          Dashboard
        </Link>

        <Link to="/admin/properties" className="block hover:text-orange-400">
          Manage Properties
        </Link>

        <Link to="/admin/properties/new" className="block hover:text-orange-400">
          Add Property
        </Link>

        <Link to="/admin/users" className="block hover:text-orange-400">
          Manage Users
        </Link>

        <Link
          to="/admin/properties/edit/hb-001"
          className="block hover:text-orange-400"
        >
          Update Property
        </Link>
      </nav>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition"
      >
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;