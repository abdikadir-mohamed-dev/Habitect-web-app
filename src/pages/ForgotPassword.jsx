import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRecoverySubmit = (e) => {
    e.preventDefault();

    // TODO: replace with a real fetch() call once the Flask backend is wired up
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-4">
        <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">HABITECT</h2>
        <p className="mt-1 text-sm text-slate-500">Account Recovery Portal</p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-xl rounded-2xl border border-slate-100 sm:px-10">

          {!isSubmitted ? (
            <>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Reset Password</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Enter your email address below and we will send you a luxury membership recovery link.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleRecoverySubmit}>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-4 py-3 border border-slate-200 rounded-xl shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:border-transparent text-sm text-slate-900 transition"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 transition mt-2"
                  >
                    Send Recovery Link
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-slate-900">Check Your Inbox</h3>
              <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                We have sent a mock access link to <span className="font-semibold text-slate-900 break-all">{email}</span>. Use it to reset your password.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-5 text-xs font-semibold text-slate-400 hover:text-slate-900 transition underline"
              >
                Try a different email
              </button>
            </div>
          )}

          <div className="mt-6 text-center border-t border-slate-100 pt-6">
            <p className="text-xs text-slate-500 font-medium">
              Remember your credentials?{' '}
              <Link to="/login" className="font-bold text-slate-950 hover:underline transition">
                Back to Sign In
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}