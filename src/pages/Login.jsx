import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // we will replace with a real fetch() call once the Flask backend is wired up
    if (email && password) {
      localStorage.setItem(

      "loggedUser",

      JSON.stringify({

        name: email.split("@")[0],

        email: email,

        phone: "",

        memberSince: new Date().toLocaleDateString(),

      })

    );
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">
          HABITECT
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Find. Book. Live.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl rounded-2xl border border-slate-100 sm:px-10">

          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold text-slate-900">Welcome Back</h3>
            <p className="text-xs text-slate-400 mt-1">Login to access your real estate account</p>
          </div>

          <form className="space-y-5" onSubmit={handleLoginSubmit}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent text-sm text-slate-900 transition"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent text-sm text-slate-900 pr-12 transition"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm font-semibold text-slate-400 hover:text-slate-900 transition"
                >
                  {showPassword ? (
                    <span className="flex items-center gap-1 text-xs">Hide</span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs">Show</span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-slate-950 focus:ring-slate-900 border-slate-300 rounded transition cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-slate-600 font-medium cursor-pointer select-none">
                  Remember Me
                </label>
              </div>

              <div>
                <Link
                  to="/forgot-password"
                  className="font-semibold text-slate-950 hover:underline transition"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition mt-2"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-500 font-medium">
              Don't have an account?{' '}
              <Link to="/register" className="font-bold text-slate-950 hover:underline transition">
                Register Here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}