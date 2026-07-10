import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold text-orange-500 mb-8">
        HABITECT
      </h1>
      
        <Link to="/admin/dashboard" className="block hover:text-orange-400">
          Dashboard
        </Link>

      <nav className="space-y-4">
        <Link to="/admin/properties/" className="block mt-4 hover:text-orange-400">
          Manage Properties
        </Link>

        <Link to="/admin/properties/new" className="block hover:text-orange-400">
          Add Property
        </Link>

        <Link to="/admin/users" className="block hover:text-orange-400">
          Manage Users
        </Link>

        <Link to="/admin/properties/update" className="block hover:text-orange-400">
          Update Property
        </Link>

        <button

    onClick={() => {localStorage.removeItem("token"); window.location.href = "/"; }} className="w-full text-left px-4 py-2 mt-8 bg-red-600 hover:bg-red-700 rounded">

      Logout
    </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;