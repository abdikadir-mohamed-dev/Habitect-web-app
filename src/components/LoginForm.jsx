import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../services/api';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ 
        email: email.trim().toLowerCase(), 
        password 
      });
      
      localStorage.setItem("access_token", response.data.access_token);
      
      // Normalize user data so 'name' is guaranteed to exist for the dashboard & profile
      const userData = {
        ...response.data.user,
        name: response.data.user?.name || response.data.user?.username || "Martin"
      };
      localStorage.setItem("loggedUser", JSON.stringify(userData));

      // Route based on role
      if (userData.role === "admin" || userData.role === "Admin") {
        navigate('/admin-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      alert(err.response?.data?.error || "Invalid email or password!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl max-w-md w-full mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Welcome Back to Habitect</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 transition text-slate-900"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-slate-900 transition text-slate-900"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition shadow-md mt-4"
        >
          Sign In
        </button>
      </form>

      {/* Registration Link */}
      <div className="text-center text-sm text-slate-500 mt-4">
        Don't have an account?{' '}
        <Link to="/register" className="font-semibold text-slate-900 hover:underline">
          Register Here
        </Link>
      </div>
    </div>
  );
}