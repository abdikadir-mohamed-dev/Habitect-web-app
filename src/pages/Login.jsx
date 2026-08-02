import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/api';

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        name: fullName,
        email: email.trim().toLowerCase(),
        password: password,
        phone: phone,
      });
      alert("Registration successful! Please sign in.");
      setIsRegistering(false);
      setPassword('');
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed. Try a different email.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email: email.trim().toLowerCase(), password });
      
      localStorage.setItem("access_token", response.data.access_token);
      
      // Normalize user data so 'name' is guaranteed to exist for the dashboard & profile
      const userData = {
        ...response.data.user,
        name: response.data.user?.name || response.data.user?.username || "Martin"
      };
      localStorage.setItem("loggedUser", JSON.stringify(userData));

      if (userData.is_admin || userData.role === "Admin" || userData.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">HABITECT</h2>
        <p className="mt-2 text-sm text-slate-500">Find. Book. Live.</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl rounded-2xl border border-slate-100 sm:px-10">
          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-900">
              {isRegistering ? "Create an Account" : "Welcome Back"}
            </h3>
          </div>

          {!isRegistering ? (
            <form className="space-y-5" onSubmit={handleLoginSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition"
              >
                Sign In
              </button>
            </form>
          ) : (
            <form className="space-y-5" onSubmit={handleRegisterSubmit}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 transition"
              >
                Register Account
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-xs text-slate-500">
            {isRegistering ? (
              <p>Already have an account? <button type="button" onClick={() => setIsRegistering(false)} className="font-bold text-slate-950 underline ml-1">Sign In</button></p>
            ) : (
              <p>Don't have an account? <button type="button" onClick={() => setIsRegistering(true)} className="font-bold text-orange-600 underline ml-1">Register</button></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}