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
      <header className="w-full px-6 py-4 flex justify-between items-center bg-white border-b border-slate-200">
        <div className="flex items-center gap-3">
          {/* Bagian ini memanggil logo dari folder public/logo-cdc.png */}
          <img 
            src="/logo-polibatam.png" 
            alt="Logo CDC" 
            className="h-10 w-auto object-contain" 
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg leading-none">CDC</span>
              <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-200">
                ADMIN
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Politeknik Negeri Batam</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft size={16} /> Kembali ke Portal Publik
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-12">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Kolom Kiri: Form Box Biru */}
          <div className="bg-[#1b3a8a] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center leading-snug">
              Login CDC Politeknik Negeri<br/>Polibatam
            </h2>

            {errorMessage && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-400 text-red-100 text-sm rounded-xl text-center font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Username / NIP / NIDN</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username atau NIP/NIDN"
                  className="w-full px-4 py-3.5 rounded-xl text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-blue-400/50 font-medium text-sm transition-all"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Password</label>
                  <a href="#" className="text-xs text-blue-200 hover:text-white transition-colors">
                    Lupa Password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-4 pr-12 py-3.5 rounded-xl text-slate-800 bg-white focus:outline-none focus:ring-4 focus:ring-blue-400/50 font-medium text-sm transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2 pb-4">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 bg-white border-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                />
                <label htmlFor="remember" className="text-sm font-medium text-blue-100 cursor-pointer">
                  Ingat saya di perangkat ini
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#1b3a8a] font-bold py-3.5 rounded-xl shadow-lg hover:bg-slate-100 transition-colors text-sm"
              >
                Login
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Info & Foto */}
          <div className="flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                SISTEM AUTENTIKASI PENGELOLA
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1b3a8a] leading-[1.1] mb-5 tracking-tight">
                Login Admin CDC<br/>Politeknik Negeri Batam
              </h1>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed pr-0 md:pr-10">
                Selamat datang di Portal Admin CDC Politeknik Negeri Batam. Silakan masukkan kredensial Anda untuk mengakses sistem pengelolaan informasi karier, magang, dan agenda.
              </p>
            </div>

            <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-slate-200">
              {/* Bagian ini memanggil gambar dari folder public/images/kegiatan-polibatam.jpg */}
              <img
                src="/Foto-Poli.jpeg"
                alt="Kegiatan Polibatam"
                className="w-full h-48 md:h-64 object-cover rounded-xl mb-3"
              />
              <div className="flex justify-between items-center px-2 pb-1 text-[10px] md:text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  Dokumentasi Kegiatan CDC Politeknik Negeri Batam
                </div>
                <span>Gedung Utama Polibatam</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 px-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <ShieldCheck size={16} />
                Sistem Terotentikasi & Terenkripsi SSL
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 cursor-pointer hover:underline">
                <LifeBuoy size={16} />
                Bantuan: Helpdesk IT CDC
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 font-medium border-t border-slate-200 mt-auto bg-white">
        <p>© 2026 Career Development Center (CDC) Politeknik Negeri Batam • All Rights Reserved</p>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-slate-600 transition-colors">Kebijakan Privasi</a>
          <span>•</span>
          <a href="#" className="hover:text-slate-600 transition-colors">Syarat & Ketentuan</a>
        </div>
      </footer>

    </div>
  );
}