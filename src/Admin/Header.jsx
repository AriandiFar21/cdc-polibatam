import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Menu } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-6 py-3 flex items-center justify-between sticky top-0 z-45 shadow-sm gap-2 md:gap-4">
      
      {/* Bagian Kiri: Logo & Title */}
      <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
        {/* PERBAIKAN: Menggunakan min-[1025px]:hidden agar hamburger muncul di HP & Tablet < 1025px (mencakup 900-1000px) */}
        <button 
          type="button"
          onClick={onMenuClick}
          className="min-[1025px]:hidden p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link to="/admin/dashboard" className="flex items-center space-x-2 md:space-x-3 cursor-pointer">
          <img 
            src="/logo-polibatam.png" 
            alt="Logo CDC Polibatam" 
            className="h-7 md:h-8 w-auto object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="hidden sm:block">
            <h1 className="font-extrabold text-xs md:text-sm text-slate-900 leading-none">CDC POLIBATAM</h1>
            <span className="text-[9px] md:text-[10px] text-slate-500 font-semibold tracking-wider">PORTAL ADMINISTRASI</span>
          </div>
        </Link>
      </div>

      {/* Bagian Tengah: Search Bar */}
      <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari pelamar, mitra, lowongan, NIM..."
            className="w-full pl-9 pr-4 py-2 bg-slate-100 hover:bg-slate-200/50 rounded-full text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Bagian Kanan: Info & Profil */}
      <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
        <span className="bg-blue-50 text-blue-700 text-[10px] md:text-xs font-semibold px-2 md:px-3 py-1 rounded-full hidden lg:inline-block">
          📅 Semester Ganjil 2025/2026
        </span>

        <button type="button" className="p-1.5 md:p-2 text-slate-500 hover:text-slate-700 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-2 md:space-x-3 pl-2 md:pl-3 border-l border-slate-200">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-bold text-slate-900">Administrator CDC</p>
            <p className="text-[10px] text-slate-500">Superadmin BAAK</p>
          </div>
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#1b439c] text-white flex items-center justify-center font-bold text-xs shadow-sm">
            A
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;