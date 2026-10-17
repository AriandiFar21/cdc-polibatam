import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Username atau Password Admin salah!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 items-center">
        
        {/* Kolom Kiri: Form Box Biru */}
        <div className="bg-[#1b439c] text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center shadow-lg h-full">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center md:text-left">
            Log in CDC Karir Polibatam
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Username :</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium"
                required
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="bg-white text-[#1b439c] font-bold px-10 py-2.5 rounded-lg shadow-md hover:bg-slate-100 transition-colors duration-200"
              >
                Log In
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Info & Foto Kegiatan */}
        <div className="flex flex-col justify-between h-full space-y-6 px-2 md:px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1b439c] leading-tight mb-4">
              Login Admin <span className="text-[#1b439c]">CDC</span><br />
              <span className="text-slate-900">Politeknik Negeri Batam</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Selamat datang di Portal Admin CDC Politeknik Negeri Batam. Silakan masukkan kredensial Anda untuk mengakses sistem pengelolaan informasi karier, magang, dan agenda.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              alt="Kegiatan Polibatam"
              className="w-full h-56 md:h-64 object-cover object-center"
            />
          </div>
        </div>

      </div>
    </div>
  );
}