import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getUsers, deleteUser } from "../services/api";

export default function ManageUsers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch users from the Flask backend on load
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error.response?.data || error.message);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert("Failed to delete user.");
      console.error(error);
    }
  };

  // Filter users based on search query (checking username and email)
  const filteredUsers = users.filter(
    (user) =>
      user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen w-screen overflow-hidden">
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 p-8 h-screen overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Manage Users</h1>
          
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
          />
        </div>

        {/* Responsive Wrapper for the Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b bg-orange-500 text-white text-sm">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Member Since</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers && filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-slate-50 transition">
                    <td className="p-4 font-semibold">{user.username}</td>
                    <td className="p-4 text-slate-600">{user.email}</td>
                    <td className="p-4">{user.role || "user"}</td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-green-100 text-green-700 font-semibold text-xs rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-slate-500">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-slate-500">
                    No users found.
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