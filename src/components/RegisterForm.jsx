import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users"));

if (!users) {
  localStorage.setItem(
    "users",
    JSON.stringify([
      {
        id: 1,
        name: "Administrator",
        email: "admin@habitect.com",
        password: "admin123",
        phone: "",
        role: "Admin",
        status: "Active",
        memberSince: "2026",
      },
    ])
  );
}

    // TODO: replace with a real fetch() call once the Flask backend is wired up
    if (name && email && phone && password) {
      const users = JSON.parse(localStorage.getItem("users")) || [];

 

  const newUser = {

    id: Date.now(),

    name,

    email,

    phone,

    password,

    role: "User",

    status: "Active",

    memberSince: new Date().toLocaleDateString(),

  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
      navigate('/login');
    }
  };

  return (
    <div className="bg-white py-10 px-6 shadow-xl rounded-2xl border border-slate-100 sm:px-10 max-w-md w-full mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-slate-900">Create Account</h3>
        <p className="text-xs text-slate-400 mt-1">Join Habitect to browse and secure luxury listings</p>
      </div>

      <form className="space-y-4" onSubmit={handleRegisterSubmit}>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Full Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm text-slate-900 transition"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm text-slate-900 transition"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm text-slate-900 transition"
            placeholder="+254 712 345 678"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Create Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm text-slate-900 pr-12 transition"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-900 transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 text-sm text-slate-900 transition"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition mt-2"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center border-t border-slate-100 pt-6">
        <p className="text-xs text-slate-500 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-slate-950 hover:underline transition">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
