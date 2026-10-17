import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <Link to="/admin/dashboard" className="flex items-center space-x-3 cursor-pointer">
        <div className="bg-[#1b439c] text-white p-2 rounded-lg font-black text-lg tracking-wider">
          CDC
        </div>
        <div>
          <h1 className="font-extrabold text-sm text-slate-900 leading-none">CDC POLIBATAM</h1>
          <span className="text-[10px] text-slate-500 font-semibold tracking-wider">PORTAL ADMINISTRASI</span>
        </div>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari pelamar, mitra, lowongan, NIM..."
            className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-full text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Top Right Info */}
      <div className="flex items-center space-x-4">
        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full hidden sm:inline-block">
          📅 Semester Ganjil 2025/2026
        </span>
        <button type="button" className="p-2 text-slate-500 hover:text-slate-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3 pl-3 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-slate-900">Administrator CDC</p>
            <p className="text-[10px] text-slate-500">Superadmin BAAK</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#1b439c] text-white flex items-center justify-center font-bold text-xs">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;