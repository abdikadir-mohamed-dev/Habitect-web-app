import React from 'react';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-4">
        <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight">HABITECT</h2>
        <p className="mt-1 text-sm text-slate-500">Luxury Living Awaits</p>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
}
