import { Link } from "react-router-dom";

export default function ChooseRole() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[420px] text-center">

        <h1 className="text-3xl font-bold mb-3">
          HABITECT
        </h1>

        <p className="text-gray-500 mb-8">
          Choose how you want to continue
        </p>

        <div className="space-y-4">

          <Link
            to="/login"
            className="block bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition"
          >
            Login as User
          </Link>

          <Link
            to="/admin/dashboard"
            className="block bg-slate-900 text-white py-3 rounded-xl hover:bg-black transition"
          >
            Login as Admin
          </Link>

        </div>
      </div>
    </div>
  );
}