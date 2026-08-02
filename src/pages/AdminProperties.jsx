import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";

export default function AdminProperties() {
  const { properties = [], deleteProperty } = useProperties() || {};

  return (
    <div className="flex bg-gray-100 min-h-screen w-screen overflow-hidden">
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 p-8 h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Properties</h1>

          <Link
            to="/admin/properties/new"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded font-semibold transition shrink-0"
          >
            Add New Property
          </Link>
        </div>

        {/* Responsive Wrapper for the Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-600 text-sm">
                <th className="p-4">Property</th>
                <th className="p-4">Location</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties && properties.length > 0 ? (
                properties.map((property) => (
                  <tr
                    key={property.id}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="p-4 font-semibold">{property.title}</td>
                    <td className="p-4 text-slate-600">
                      {property.location}
                    </td>
                    <td className="p-4 font-bold text-slate-900">
                      ${property.price}
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 font-semibold text-xs rounded-full">
                        {property.status || "Active"}
                      </span>
                    </td>
                    <td className="p-4 text-center space-x-2 whitespace-nowrap">
                      <Link
                        to={`/admin/properties/edit/${property.id}`}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition inline-block"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProperty && deleteProperty(property.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-6 text-center text-slate-500">
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}