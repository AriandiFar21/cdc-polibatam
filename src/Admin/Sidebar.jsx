import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Briefcase, MapPin, GraduationCap, Building2,
  Calendar, Settings, LogOut, X
} from 'lucide-react';

/*
  Breakpoint:
  - Mobile  (≤600px)    : sidebar jadi drawer (geser dari kiri), konten ditumpuk vertikal
  - Tablet  (601–1024px): sidebar tetap drawer, konten grid 2 kolom
  - Desktop (≥1025px)   : sidebar tampil permanen di kiri (sticky), konten grid 3 kolom

  PENTING: tinggi Header harus h-16 (64px). Kalau header kamu beda tinggi,
  ganti `top-16` dan `4rem` di bawah dengan nilai yang sama.
*/

const menus = [
  { to: '/admin/dashboard',   label: 'Dashboard (Overview)',       icon: LayoutDashboard },
  { to: '/admin/lowongan',    label: 'Kelola Lowongan Kerja',      icon: Briefcase },
  { to: '/admin/pemetaan',    label: 'Informasi Lowongan Magang',  icon: MapPin },
  { to: '/admin/tracer-study',label: 'Tracer Study Alumni',        icon: GraduationCap },
  { to: '/admin/kemitraan',   label: 'Kemitraan Industri',         icon: Building2 },
  { to: '/admin/agenda',      label: 'Agenda & Event/Workshop',    icon: Calendar },
  { to: '/admin/pengaturan',  label: 'Pengaturan Portal',          icon: Settings },
];

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  // Kunci scroll body saat drawer terbuka di mobile/tablet
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Tutup drawer dengan tombol Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs transition-all ${
      isActive
        ? 'bg-[#1b439c] text-white font-semibold shadow-sm'
        : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-[#1b439c]'
    }`;

  return (
    <>
      {/* Overlay gelap (hanya mobile & tablet) */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300
          min-[1025px]:hidden
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 shrink-0
          bg-white border-r border-slate-200
          flex flex-col justify-between p-4
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}

          min-[1025px]:translate-x-0
          min-[1025px]:sticky min-[1025px]:top-16 min-[1025px]:inset-y-auto
          min-[1025px]:h-[calc(100vh-4rem)] min-[1025px]:self-start
          min-[1025px]:z-30
        `}
      >
        {/* ===== Menu ===== */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-6">
          {/* Header drawer (mobile/tablet saja) */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 min-[1025px]:hidden">
            <span className="font-extrabold text-xs text-slate-900">MENU NAVIGASI</span>
            <button
              onClick={onClose}
              aria-label="Tutup menu"
              className="p-1 text-slate-500 hover:text-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">
              MENU UTAMA
            </p>
            <nav className="space-y-1">
              {menus.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} onClick={onClose} className={linkClass}>
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* ===== Footer sidebar ===== */}
        <div className="space-y-2 pt-3 mt-3 border-t border-slate-100 bg-white">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
            <p className="text-[11px] font-bold text-slate-700 truncate">Server CDC Core</p>
            <p className="text-[10px] text-slate-500 flex items-center mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 shrink-0 animate-pulse" />
              v2.4.0 Production
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white py-2 rounded-xl text-xs font-bold transition-all duration-200"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span>Keluar Sistem</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;