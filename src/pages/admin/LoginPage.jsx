import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowLeft, ShieldCheck, LifeBuoy } from 'lucide-react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage('Password terlalu pendek');
      return;
    }

    if (username === 'admin' && password === 'admin1234') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans text-slate-800">
      
      {/* Header */}
      <header className="w-full px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center bg-white border-b border-slate-200 gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-polibatam.png" 
            alt="Logo CDC" 
            className="h-8 sm:h-10 w-auto object-contain" 
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg leading-none">CDC</span>
              <span className="bg-yellow-100 text-yellow-800 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-200">
                ADMIN
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Politeknik Negeri Batam</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali ke Portal Publik
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-12">
        {/* PERUBAHAN UTAMA: md:grid-cols-2 memastikan di Tablet sudah terbagi 2 kolom */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          
          {/* Kolom Kanan: Info & Foto (Di Mobile: urutan 1 di atas, Di Tablet/Desktop: urutan 2 di kanan) */}
          <div className="flex flex-col space-y-4 sm:space-y-6 order-1 md:order-2">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full mb-3 sm:mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                SISTEM AUTENTIKASI PENGELOLA
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1b3a8a] leading-[1.1] mb-3 sm:mb-5 tracking-tight">
                Login Admin CDC<br className="hidden sm:block"/>Politeknik Negeri Batam
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-relaxed pr-0 lg:pr-10">
                Selamat datang di Portal Admin CDC Politeknik Negeri Batam. Silakan masukkan kredensial Anda untuk mengakses sistem pengelolaan informasi karier, magang, dan agenda.
              </p>
            </div>

            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200">
              <img
                src="/Foto-Poli.jpeg"
                alt="Kegiatan Polibatam"
                className="w-full h-32 sm:h-48 md:h-64 object-cover rounded-lg sm:rounded-xl mb-2 sm:mb-3"
              />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-1 sm:px-2 pb-1 text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium gap-1 sm:gap-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="truncate">Dokumentasi Kegiatan CDC Politeknik Negeri Batam</span>
                </div>
                <span className="pl-3 sm:pl-0">Gedung Utama Polibatam</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 px-1 sm:px-2">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-emerald-600">
                <ShieldCheck size={14} className="sm:w-4 sm:h-4" />
                Sistem Terotentikasi & Terenkripsi SSL
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
                <LifeBuoy size={14} className="sm:w-4 sm:h-4" />
                Bantuan: Helpdesk IT CDC
              </div>
            </div>
          </div>

          {/* Kolom Kiri: Form Box Biru (Di Mobile: urutan 2 di bawah, Di Tablet/Desktop: urutan 1 di kiri) */}
          <div className="bg-[#1b3a8a] text-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-center leading-snug">
              Login CDC Politeknik Negeri<br className="hidden sm:block"/>Polibatam
            </h2>

            {errorMessage && (
              <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-red-500/20 border border-red-400 text-red-100 text-xs sm:text-sm rounded-lg sm:rounded-xl text-center font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Username / NIP / NIDN</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username atau NIP/NIDN"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-blue-400/50 font-medium text-xs sm:text-sm transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <label className="block text-xs sm:text-sm font-medium">Password</label>
                  <a href="#" className="text-[10px] sm:text-xs text-blue-200 hover:text-white transition-colors">
                    Lupa Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-blue-400/50 font-medium text-xs sm:text-sm transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-2.5 sm:top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-1 sm:pt-2 pb-2 sm:pb-4">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3 h-3 sm:w-4 sm:h-4 rounded text-blue-600 bg-white border-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                />
                <label htmlFor="remember" className="text-[10px] sm:text-sm font-medium text-blue-100 cursor-pointer">
                  Ingat saya di perangkat ini
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#1b3a8a] font-bold py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-xs sm:text-sm"
              >
                Login
              </button>
            </form>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 sm:px-6 py-4 sm:py-5 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-slate-400 font-medium border-t border-slate-200 mt-auto bg-white text-center md:text-left gap-2 sm:gap-0">
        <p>© 2026 Career Development Center (CDC) Politeknik Negeri Batam • All Rights Reserved</p>
        <div className="flex items-center gap-2 sm:gap-4 mt-1 sm:mt-0">
          <a href="#" className="hover:text-slate-600 transition-colors">Kebijakan Privasi</a>
          <span className="hidden sm:inline">•</span>
          <span className="sm:hidden">|</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Syarat & Ketentuan</a>
        </div>
      </footer>

    </div>
  );
}