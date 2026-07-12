import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Manage Users
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          className="border p-3 rounded-lg w-full mb-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table className="w-full bg-white rounded-xl shadow overflow-hidden">

          <thead className="bg-orange-500 text-white">

            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Member Since</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredUsers.length === 0 ? (

              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-500"
                >
                  No users found.
                </td>
              </tr>

            ) : (

              filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="text-center border-b hover:bg-gray-50"
                >

                  <td className="p-4">{user.name}</td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white ${
                        user.role === "Admin"
                          ? "bg-red-500"
                          : "bg-blue-500"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span className="text-green-600 font-semibold">
                      {user.status}
                    </span>
                  </td>

                  <td>{user.memberSince}</td>

                  <td>

                    {user.role === "Admin" ? (

                      <span className="text-gray-400">
                        Protected
                      </span>

                    ) : (

                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>

                    )}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default ManageUsers;