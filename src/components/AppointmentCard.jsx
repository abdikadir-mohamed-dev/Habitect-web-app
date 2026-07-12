import React from 'react';

const statusStyles = {
  Confirmed: 'bg-emerald-50 text-emerald-700',
  Pending: 'bg-amber-50 text-amber-700',
  Cancelled: 'bg-red-50 text-red-700',
  Completed: 'bg-slate-100 text-slate-600',
};

export default function AppointmentCard({ appointment, onCancel }) {
  const badgeStyle = statusStyles[appointment.status] || statusStyles.Pending;

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition hover:shadow-md">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${badgeStyle}`}>
            ● {appointment.status}
          </span>
          <span className="text-xs text-slate-400 font-medium">Ref: {appointment.id}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">{appointment.propertyTitle}</h3>
        <p className="text-sm text-slate-500 flex items-center gap-1">📍 {appointment.location}</p>

        <div className="flex gap-4 pt-1 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1">📅 {appointment.date}</span>
          <span className="flex items-center gap-1">⏰ {appointment.time}</span>
        </div>
      </div>
      <div className="flex sm:flex-col items-end justify-between sm:justify-center w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-50">
        <div className="text-left sm:text-right">
          <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guide Price</span>
          <span className="text-xl font-black text-slate-950">{appointment.price}</span>
        </div>

        <button
          onClick={() => onCancel(appointment.id)}
          className="mt-3 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100/70 px-4 py-2 rounded-xl transition"
        >
          Cancel Tour
        </button>
      </div>
    </div>
  );
}
