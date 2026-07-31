import React, { useState } from 'react';
import AppointmentCard from '../components/AppointmentCard';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const [user, setUser] = useState({
    name: "Sarah K.",
    email: "sarah.k@luxuryhomes.com",
    phone: "+254 712 345 678",
    avatar: "SK",
    memberSince: "June 2026"
  });

  const [appointments, setAppointments] = useState([
    {
      id: "APT-9921",
      propertyTitle: "The Obsidian Penthouse",
      location: "Westlands, Nairobi",
      price: "$1,250,000",
      date: "July 18, 2026",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: "APT-4412",
      propertyTitle: "Migaa Golf Estate Villa",
      location: "Kiambu, Kenya",
      price: "$850,000",
      date: "July 24, 2026",
      time: "02:15 PM",
      status: "Pending Approval"
    }
  ]);

  const handleCancelAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this property tour?")) {
      setAppointments(appointments.filter(app => app.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50/50 text-slate-900 font-sans">

      <div className="w-64 bg-slate-950 p-5 flex flex-col justify-between text-slate-400 shrink-0">
        <div className="space-y-8">
          <div className="flex items-center gap-2 px-2">
            <span className="text-xl font-black text-white tracking-widest">HABITECT</span>
            <span className="text-[10px] bg-slate-800 text-slate-300 font-bold px-2 py-0.5 rounded">CLIENT</span>
          </div>

          <nav className="space-y-1.5">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition ${activeTab === 'overview' ? 'bg-slate-900 text-white' : 'hover:bg-slate-900/40 hover:text-slate-200'}`}
            >
              📊 Overview Panel
            </button>
            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition ${activeTab === 'appointments' ? 'bg-slate-900 text-white' : 'hover:bg-slate-900/40 hover:text-slate-200'}`}
            >
              📅 My Appointments ({appointments.length})
            </button>
          </nav>
        </div>

        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-3 p-3 rounded-xl text-left border transition w-full ${
            activeTab === 'profile' ? 'bg-slate-900 border-slate-800 text-white' : 'border-transparent bg-slate-900/20 hover:bg-slate-900 text-slate-300'
          }`}
        >
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-white text-sm tracking-wide">
            {user.avatar}
          </div>
          <div className="overflow-hidden flex-1">
            <h4 className="font-bold text-sm truncate text-slate-100">{user.name}</h4>
            <p className="text-[11px] text-slate-500 font-medium truncate">Manage Account</p>
          </div>
        </button>
      </div>

      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-black text-slate-950 tracking-tight">Welcome back, {user.name.split(' ')[0]}</h1>
              <p className="text-slate-500 text-sm mt-1">Here is a summary of your active luxury listings tracking metrics.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Booked Viewings</span>
                <p className="text-3xl font-black text-slate-950 mt-2">{appointments.length}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Saved Collections</span>
                <p className="text-3xl font-black text-slate-950 mt-2">4 Properties</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Account Class</span>
                <p className="text-3xl font-black text-amber-600 mt-2">Premium</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-slate-950 tracking-tight">Your Scheduled Property Tours</h1>
              <p className="text-slate-500 text-sm mt-1">Present this dashboard information to the listing agent during physical viewings.</p>
            </div>

            <div className="space-y-4">
              {appointments.length > 0 ? (
                appointments.map(app => (
                  <AppointmentCard
                    key={app.id}
                    appointment={app}
                    onCancel={handleCancelAppointment}
                  />
                ))
              ) : (
                <div className="bg-white text-center p-12 rounded-2xl border border-slate-100 text-slate-400 font-medium">
                  No active property tours scheduled. Explore listings to book a viewing.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="max-w-2xl bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-8">
            <div>
              <h1 className="text-2xl font-black text-slate-950 tracking-tight">Account Settings</h1>
              <p className="text-slate-500 text-sm mt-1">Review your verified membership profiles and platform variables.</p>
            </div>

            <div className="space-y-5 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input type="text" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-semibold focus:outline-none" value={user.name} readOnly />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="text" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-semibold focus:outline-none" value={user.phone} readOnly />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Registered Email Address</label>
                <input type="text" className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-semibold focus:outline-none" value={user.email} readOnly />
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                Registered Premium Member Since: {user.memberSince}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}