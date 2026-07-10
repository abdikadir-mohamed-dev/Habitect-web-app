import AdminSidebar from "../components/AdminSidebar";
import { Link } from "react-router-dom";

const AdminProperties = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1 p-8">

        <div className="flex justify-between mb-6">
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

            <tr className="text-center border-b">
              <td className="p-4">Luxury Villa</td>
              <td>Nairobi</td>
              <td>$850,000</td>
              <td>Active</td>
              <td className="p-4 space-x-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button> <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button></td>
            </tr>

            <tr className="text-center">
              <td className="p-4">Apartment</td>
              <td>Mombasa</td>
              <td>$320,000</td>
              <td>Inactive</td>
              <td className="p-4 space-x-2"><button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button> <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button></td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminProperties;