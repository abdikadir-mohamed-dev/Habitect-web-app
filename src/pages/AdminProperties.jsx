import AdminSidebar from "../components/AdminSidebar";
import { Link } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";

const AdminProperties = () => {
  const { properties, deleteProperty } = useProperties();

  

 
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Manage Properties
          </h1>

          <Link
            to="/admin/properties/new"
            className="bg-orange-500 text-white px-5 py-2 rounded"
          >
            Add New Property
          </Link>
        </div>

        <table className="w-full bg-white rounded-xl shadow">

          <thead>
            <tr className="border-b">
              <th className="p-4">Property</th>
              <th>Location</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
  {properties.map((property) => (
    <tr key={property.id} className="text-center border-b">

      <td className="p-4">{property.title}</td>

      <td>{property.location}, {property.state}</td>

      <td>${property.price}</td>

      <td>{property.status}</td>

      <td className="p-4 space-x-2">

        <Link
          to={`/admin/properties/edit/${property.id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => deleteProperty(property.id)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </td>

    </tr>
  ))}
</tbody>

        </table>

      </div>
    </div>
  );
};

export default AdminProperties;