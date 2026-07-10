import AdminSidebar from "../components/AdminSidebar";

const ManageUsers = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <AdminSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-8">
          Manage Users
        </h1>

        <table className="w-full bg-white rounded-xl shadow">

          <thead>

            <tr className="border-b">
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr className="text-center border-b">
              <td className="p-4">John Doe</td>
              <td>john@email.com</td>
              <td>Admin</td>
              <td>Active</td>
            </tr>

            <tr className="text-center">
              <td className="p-4">Jane Doe</td>
              <td>jane@email.com</td>
              <td>User</td>
              <td>Active</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ManageUsers;