import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Admin/Header';   
import Sidebar from '../../Admin/Sidebar'; 
import { 
  Briefcase, MapPin, GraduationCap, Building2, 
  Search, Bell, Plus, Download
} from 'lucide-react';

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-100 text-slate-800 font-sans overflow-hidden">
      
      {/* Top Navbar */}
      <Header onMenuClick={() => setIsSidebarOpen(true)} />

      {/* Kontainer Utama */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 space-y-4 md:space-y-6 overflow-y-auto h-full max-w-7xl mx-auto w-full">
          
          {/* Welcome Banner */}
          <div className="bg-[#1b439c] text-white rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg relative overflow-hidden shrink-0">
            <div className="space-y-3 md:space-y-2 max-w-2xl z-10 w-full">
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <img 
                  src="/logo-polibatam.png" 
                  alt="Logo CDC Polibatam" 
                  className="h-8 md:h-12 w-auto bg-white p-1 md:p-1.5 rounded-lg object-contain shadow-sm"
                />
                <span className="inline-block bg-white/10 backdrop-blur-md text-blue-100 text-[9px] md:text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  TAHUN AJARAN 2024/2025 GENAP
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight">
                Selamat Datang, Administrator CDC Polibatam
              </h2>
              <p className="text-blue-100 text-[11px] sm:text-xs md:text-sm leading-relaxed pr-0 md:pr-10">
                Pusat kendali ekosistem karir terpadu Politeknik Negeri Batam. Pantau verifikasi mitra industri, penempatan magang terstruktur, dan validasi data tracer study secara real-time.
              </p>
            </div>
            
            <div className="mt-5 md:mt-0 flex flex-wrap gap-2 z-10 w-full md:w-auto md:justify-end">
              <Link to="/admin/lowongan" className="flex-1 md:flex-none justify-center bg-white text-[#1b439c] hover:bg-blue-50 px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold flex items-center space-x-1.5 shadow-sm transition-colors">
                <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Lowongan Baru</span>
              </Link>
              <Link to="/admin/agenda" className="flex-1 md:flex-none justify-center bg-blue-600 hover:bg-blue-500 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold flex items-center space-x-1.5 border border-blue-400 transition-colors">
                <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Agenda Workshop</span>
              </Link>
              <button type="button" className="w-full md:w-auto justify-center bg-white/10 hover:bg-white/20 text-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold flex items-center space-x-1.5 border border-white/20 backdrop-blur-sm transition-colors">
                <Download className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>Ekspor Laporan</span>
              </button>
            </div>
          </div>

          {/* 4 Cards Statistik Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase">MAHASISWA MAGANG AKTIF</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 mt-0.5 md:mt-1">1.842 <span className="text-[10px] md:text-xs font-normal text-slate-500">Mhs</span></p>
                </div>
                <div className="p-2 md:p-2.5 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] md:text-[11px]">
                <span className="text-emerald-600 font-bold">▲ +14.2% YoY</span>
                <span className="text-slate-400 hidden sm:inline">Target Semester 92%</span>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase">LOWONGAN KERJA TERBUKA</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 mt-0.5 md:mt-1">128 <span className="text-[10px] md:text-xs font-normal text-slate-500">Posisi</span></p>
                </div>
                <div className="p-2 md:p-2.5 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-slate-100 flex flex-col md:flex-row md:justify-between md:items-center text-[10px] md:text-[11px] gap-1 md:gap-0">
                <span className="text-slate-600 font-semibold truncate">64 Perusahaan Mitra</span>
                <span className="bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold self-start md:self-auto">18 Verifikasi Baru</span>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase">KEMITRAAN INDUSTRI AKTIF</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 mt-0.5 md:mt-1">245 <span className="text-[10px] md:text-xs font-normal text-slate-500">MoU/MoA</span></p>
                </div>
                <div className="p-2 md:p-2.5 bg-amber-50 text-amber-600 rounded-lg md:rounded-xl">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-slate-100 flex justify-between items-center text-[10px] md:text-[11px] text-slate-500">
                <span className="truncate pr-2">McDermott, Infineon, Pegatron</span>
                <span className="text-amber-600 font-bold whitespace-nowrap">+6 Bulan Ini</span>
              </div>
            </div>

            <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase">KETERSERAPAN LULUSAN</p>
                  <p className="text-xl md:text-2xl font-black text-slate-900 mt-0.5 md:mt-1">87.4% <span className="text-[10px] md:text-xs font-normal text-slate-500">&lt; 6 Bulan</span></p>
                </div>
                <div className="p-2 md:p-2.5 bg-indigo-50 text-indigo-600 rounded-lg md:rounded-xl">
                  <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-slate-100 flex items-center gap-2">
                <div className="w-full bg-slate-100 h-1.5 md:h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[87%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Tengah: Grafis Tren & Sektor Mitra */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Chart Tren Penyerapan */}
            <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">ANALISIS EKOSISTEM KARIR</span>
                  <h3 className="text-sm md:text-base font-extrabold text-slate-900 mt-2">Tren Penyerapan Alumni & Magang Industri Polibatam</h3>
                </div>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg text-[10px] md:text-xs font-semibold self-start">
                  <button type="button" className="bg-white px-2 md:px-3 py-1 rounded-md shadow-sm text-slate-900">2024</button>
                  <button type="button" className="px-2 md:px-3 py-1 text-slate-500 hover:bg-slate-200/50 rounded-md">2023</button>
                  <button type="button" className="px-2 md:px-3 py-1 text-slate-500 hover:bg-slate-200/50 rounded-md">2022</button>
                </div>
              </div>

              <div className="h-40 md:h-48 pt-4 md:pt-6 flex items-end justify-between px-1 md:px-4 border-b border-slate-100 gap-2">
                <div className="flex flex-col items-center space-y-1.5 md:space-y-2 flex-1">
                  <div className="w-full max-w-[40px] md:max-w-[60px] bg-blue-600 rounded-t-md md:rounded-t-lg h-28 md:h-36 transition-all"></div>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight hidden sm:block">Teknik Informatika</span>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight sm:hidden">IF</span>
                  <span className="text-[8px] md:text-[10px] text-slate-400">542 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 md:space-y-2 flex-1">
                  <div className="w-full max-w-[40px] md:max-w-[60px] bg-blue-600 rounded-t-md md:rounded-t-lg h-24 md:h-32 transition-all"></div>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight hidden sm:block">Teknik Elektro</span>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight sm:hidden">EL</span>
                  <span className="text-[8px] md:text-[10px] text-slate-400">488 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 md:space-y-2 flex-1">
                  <div className="w-full max-w-[40px] md:max-w-[60px] bg-blue-600 rounded-t-md md:rounded-t-lg h-20 md:h-28 transition-all"></div>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight hidden sm:block">Teknik Mesin</span>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight sm:hidden">MS</span>
                  <span className="text-[8px] md:text-[10px] text-slate-400">430 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-1.5 md:space-y-2 flex-1">
                  <div className="w-full max-w-[40px] md:max-w-[60px] bg-blue-800 rounded-t-md md:rounded-t-lg h-16 md:h-24 transition-all"></div>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight hidden sm:block">Manajemen Bisnis</span>
                  <span className="text-[9px] md:text-[11px] font-bold text-slate-700 text-center leading-tight sm:hidden">MB</span>
                  <span className="text-[8px] md:text-[10px] text-slate-400">382 Mhs</span>
                </div>
              </div>
            </div>

            {/* Donut Chart Sektor Mitra */}
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-sm md:text-base font-extrabold text-slate-900">Sektor Mitra Kawasan</h3>
                <p className="text-[10px] md:text-xs text-slate-500">Sebaran Industri penerima magang & alumni</p>
                
                <div className="my-5 md:my-6 flex justify-center">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-[10px] md:border-[14px] border-blue-600 border-t-amber-500 border-r-indigo-500 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">245</span>
                      <p className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold mt-1">Mitra Total</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-[10px] md:text-xs">
                <div className="flex justify-between font-semibold items-center">
                  <span className="flex items-center"><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-600 mr-2 flex-shrink-0"></span><span className="truncate">Manufaktur & Elektronik</span></span>
                  <span className="ml-2 whitespace-nowrap">42% (103)</span>
                </div>
                <div className="flex justify-between font-semibold items-center">
                  <span className="flex items-center"><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-indigo-500 mr-2 flex-shrink-0"></span><span className="truncate">IT, Software & Multi</span></span>
                  <span className="ml-2 whitespace-nowrap">28% (69)</span>
                </div>
                <div className="flex justify-between font-semibold items-center">
                  <span className="flex items-center"><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-500 mr-2 flex-shrink-0"></span><span className="truncate">Shipyard & Logistik</span></span>
                  <span className="ml-2 whitespace-nowrap">18% (44)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Grid Bawah: Tabel Verifikasi & Sidebar Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            
            {/* Tabel Verifikasi Lowongan */}
            <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                <div>
                  <span className="text-[9px] md:text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-full uppercase">PERLU TINDAKAN SEGERA</span>
                  <h3 className="text-sm md:text-base font-extrabold text-slate-900 mt-2">Verifikasi Pengajuan Lowongan Mitra</h3>
                </div>
                <button type="button" className="text-[10px] md:text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-2.5 py-1.5 rounded-lg sm:bg-transparent sm:px-0">Filter Status ▾</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[10px] md:text-xs min-w-[500px]">
                  <thead className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-100">
                    <tr>
                      <th className="p-3 md:p-4">PERUSAHAAN / MITRA</th>
                      <th className="p-3 md:p-4">POSISI & JURUSAN</th>
                      <th className="p-3 md:p-4">STATUS</th>
                      <th className="p-3 md:p-4 text-center">AKSI CEPAT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 md:p-4">
                        <p className="font-bold text-slate-900 text-xs md:text-sm">PT McDermott Indonesia</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Batu Ampar, Batam</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <p className="font-semibold text-slate-800">Junior Structural Drafter</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Teknik Mesin / Perkapalan</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <span className="bg-amber-100 text-amber-800 px-2 md:px-2.5 py-1 rounded-md md:rounded-full text-[9px] md:text-[10px] font-bold whitespace-nowrap">Menunggu Review</span>
                      </td>
                      <td className="p-3 md:p-4 text-center">
                        <button type="button" className="bg-blue-600 text-white px-2.5 md:px-3 py-1.5 rounded-md md:rounded-lg font-bold text-[10px] md:text-[11px] hover:bg-blue-700 transition-colors shadow-sm">Setujui</button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 md:p-4">
                        <p className="font-bold text-slate-900 text-xs md:text-sm truncate max-w-[150px] md:max-w-none">PT Pegatron Technology Batam</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Batamindo Industrial Park</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <p className="font-semibold text-slate-800 truncate max-w-[130px] md:max-w-none">SMT Process Technician</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Teknik Elektro / Mekatronika</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <span className="bg-amber-100 text-amber-800 px-2 md:px-2.5 py-1 rounded-md md:rounded-full text-[9px] md:text-[10px] font-bold whitespace-nowrap">Menunggu Review</span>
                      </td>
                      <td className="p-3 md:p-4 text-center">
                        <button type="button" className="bg-blue-600 text-white px-2.5 md:px-3 py-1.5 rounded-md md:rounded-lg font-bold text-[10px] md:text-[11px] hover:bg-blue-700 transition-colors shadow-sm">Setujui</button>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 md:p-4">
                        <p className="font-bold text-slate-900 text-xs md:text-sm">PT Shimano Batam</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Mukakuning, Batam</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <p className="font-semibold text-slate-800 truncate max-w-[130px] md:max-w-none">QA/QC Automation Inspector</p>
                        <p className="text-[9px] md:text-[10px] text-slate-400 mt-0.5">Informatika / Elektro</p>
                      </td>
                      <td className="p-3 md:p-4">
                        <span className="bg-emerald-100 text-emerald-800 px-2 md:px-2.5 py-1 rounded-md md:rounded-full text-[9px] md:text-[10px] font-bold whitespace-nowrap">Disetujui</span>
                      </td>
                      <td className="p-3 md:p-4 text-center">
                        <span className="text-[10px] md:text-[11px] text-slate-400 font-semibold bg-slate-100 px-2 py-1 rounded-md">Aktif Tayang</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Widgets Kanan: Tracer Study & Agenda */}
            <div className="space-y-4 md:space-y-6">
              
              {/* Tracer Study Progress Widget */}
              <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-extrabold text-xs md:text-sm text-slate-900">Progres Pengisian Kuesioner</h4>
                  <span className="text-[9px] md:text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">Tahap 1</span>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] md:text-xs font-bold mb-1.5">
                    <span className="truncate pr-2">Target: 1.200 Mhs</span>
                    <span className="text-blue-600 whitespace-nowrap">78.5% Selesai</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 md:h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[78.5%] rounded-full"></div>
                  </div>
                </div>
                <button type="button" className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-colors">
                  Blast Pengingat Email Otomatis
                </button>
              </div>

              {/* Agenda Terdekat Widget */}
              <div className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h4 className="font-extrabold text-xs md:text-sm text-slate-900">Agenda & Event Terdekat</h4>
                
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center space-x-3 p-2 md:p-2.5 rounded-lg md:rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="bg-blue-600 text-white rounded-md md:rounded-lg p-1.5 md:p-2 text-center w-10 md:w-12 flex-shrink-0 shadow-sm">
                      <p className="text-[8px] md:text-[9px] font-bold uppercase">OKT</p>
                      <p className="text-sm md:text-base font-black leading-none mt-0.5">24</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-bold text-[11px] md:text-xs text-slate-900 truncate">Workshop ATS Resume & Interv</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500 mt-0.5 truncate">Auditorium Polibatam • 250 Peserta</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-2 md:p-2.5 rounded-lg md:rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                    <div className="bg-[#1b439c] text-white rounded-md md:rounded-lg p-1.5 md:p-2 text-center w-10 md:w-12 flex-shrink-0 shadow-sm">
                      <p className="text-[8px] md:text-[9px] font-bold uppercase">NOV</p>
                      <p className="text-sm md:text-base font-black leading-none mt-0.5">12</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="font-bold text-[11px] md:text-xs text-slate-900 truncate">Polibatam Career Expo & Job Fa</p>
                      <p className="text-[9px] md:text-[10px] text-slate-500 mt-0.5 truncate">32 Booth Industri Manufaktur & IT</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Section: Sinergi Industri & Kolaborasi Vokasi Polibatam */}
          <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200/80 shadow-sm space-y-3 md:space-y-4 mb-6">
            <div>
              <span className="text-[9px] md:text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">EKOSISTEM KEMITRAAN STRATEGIS</span>
              <h3 className="text-sm md:text-base font-extrabold text-slate-900 mt-2">Sinergi Industri & Kolaborasi Vokasi Polibatam</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="border border-slate-200 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50 group cursor-pointer">
                <div className="overflow-hidden">
                  <img src="/Foto-Poli.jpeg" alt="Kuliah Umum" className="w-full h-28 md:h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3 md:p-4 space-y-1 md:space-y-1.5">
                  <h4 className="font-bold text-[11px] md:text-xs text-slate-900 leading-tight">Kuliah Umum Industri & Penandatanganan Kerjasama</h4>
                  <p className="text-[9px] md:text-[11px] text-slate-500 line-clamp-2 leading-relaxed">Sesi sharing session manajemen industri multinasional Batam bersama 400+ calon lulusan.</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50 group cursor-pointer">
                <div className="overflow-hidden">
                  <img src="/Foto-Poli.jpeg" alt="Sertifikasi" className="w-full h-28 md:h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3 md:p-4 space-y-1 md:space-y-1.5">
                  <h4 className="font-bold text-[11px] md:text-xs text-slate-900 leading-tight">Penyerahan Beasiswa & Sertifikat Kompetensi Industri</h4>
                  <p className="text-[9px] md:text-[11px] text-slate-500 line-clamp-2 leading-relaxed">Apresiasi mahasiswa berprestasi pada program magang bersertifikat batch genap.</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50 group cursor-pointer hidden sm:block md:block">
                <div className="overflow-hidden">
                  <img src="/Foto-Poli.jpeg" alt="Pelatihan Persiapan" className="w-full h-28 md:h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3 md:p-4 space-y-1 md:space-y-1.5">
                  <h4 className="font-bold text-[11px] md:text-xs text-slate-900 leading-tight">Pelatihan Persiapan Wawancara Kerja & Portofolio</h4>
                  <p className="text-[9px] md:text-[11px] text-slate-500 line-clamp-2 leading-relaxed">Pembekalan tips lolos screening HRD perusahaan manufaktur berstandar internasional.</p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}