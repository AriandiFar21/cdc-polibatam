import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Briefcase, MapPin, GraduationCap, Building2, 
  Calendar, Settings, LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  // Helper untuk menentukan style menu aktif di sidebar
  const getMenuClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "flex items-center space-x-3 bg-[#1b439c] text-white px-3 py-2.5 rounded-xl font-semibold text-xs shadow-sm"
      : "flex items-center space-x-3 text-slate-600 hover:bg-slate-50 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors";
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 p-4 hidden md:flex flex-col justify-between h-auto min-h-[calc(100vh-64px)]">
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 px-3">MENU UTAMA</p>
          <nav className="space-y-1">
            <Link to="/admin/dashboard" className={getMenuClass('/admin/dashboard')}>
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard (Overview)</span>
            </Link>

            <Link to="/admin/lowongan" className={getMenuClass('/admin/lowongan')}>
              <Briefcase className="w-4 h-4" />
              <span>Kelola Lowongan Kerja</span>
            </Link>

            <Link to="/admin/pemetaan" className={getMenuClass('/admin/pemetaan')}>
              <MapPin className="w-4 h-4" />
              <span>Informasi Lowongan Magang</span>
            </Link>

            <Link to="/admin/tracer-study" className={getMenuClass('/admin/tracer-study')}>
              <GraduationCap className="w-4 h-4" />
              <span>Tracer Study Alumni</span>
            </Link>

            <Link to="/admin/kemitraan" className={getMenuClass('/admin/kemitraan')}>
              <Building2 className="w-4 h-4" />
              <span>Kemitraan Industri</span>
            </Link>

            <Link to="/admin/agenda" className={getMenuClass('/admin/agenda')}>
              <Calendar className="w-4 h-4" />
              <span>Agenda & Event/Workshop</span>
            </Link>

            <Link to="/admin/pengaturan" className={getMenuClass('/admin/pengaturan')}>
              <Settings className="w-4 h-4" />
              <span>Pengaturan Portal</span>
            </Link>
          </nav>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
          <p className="text-[11px] font-bold text-slate-700">Server CDC Core</p>
          <p className="text-[10px] text-slate-500 flex items-center mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
            v2.4.0 Production
          </p>
        </div>
        <button 
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-xl text-xs font-bold transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Keluar Sistem</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;