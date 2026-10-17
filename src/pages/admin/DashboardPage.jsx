import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Admin/Header';   // Import komponen Header
import Sidebar from '../../Admin/Sidebar'; // Import komponen Sidebar
import { 
  Briefcase, MapPin, GraduationCap, Building2, 
  Search, Bell, Plus, Download
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 text-slate-800 font-sans">
      
      {/* ----------------- TOP NAVBAR (REUSABLE) ----------------- */}
      <Header />

      <div className="flex flex-1">
        
        {/* ----------------- SIDEBAR (REUSABLE) ----------------- */}
        <Sidebar />

        {/* ----------------- MAIN CONTENT AREA ----------------- */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto max-w-7xl">
          
          {/* Welcome Banner */}
          <div className="bg-[#1b439c] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-2 max-w-2xl z-10">
              <span className="inline-block bg-white/10 backdrop-blur-md text-blue-100 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                TAHUN AJARAN 2024/2025 GENAP • Zona Industri Batamindo, Panbil & Kabil
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight">
                Selamat Datang, Administrator CDC Polibatam
              </h2>
              <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                Pusat kendali ekosistem karir terpadu Politeknik Negeri Batam. Pantau verifikasi mitra industri, penempatan magang terstruktur, dan validasi data tracer study secara real-time.
              </p>
            </div>
            
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2.5 z-10">
              <Link to="/admin/lowongan" className="bg-white text-[#1b439c] hover:bg-blue-50 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm">
                <Plus className="w-4 h-4" />
                <span>Lowongan Baru</span>
              </Link>
              <Link to="/admin/agenda" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-blue-400">
                <Plus className="w-4 h-4" />
                <span>Agenda Workshop</span>
              </Link>
              <button type="button" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 border border-white/20 backdrop-blur-sm">
                <Download className="w-4 h-4" />
                <span>Ekspor Laporan</span>
              </button>
            </div>
          </div>

          {/* 4 Cards Statistik Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">MAHASISWA MAGANG AKTIF</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">1.842 <span className="text-xs font-normal text-slate-500">Mhs</span></p>
                </div>
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[11px]">
                <span className="text-emerald-600 font-bold">▲ +14.2% YoY</span>
                <span className="text-slate-400">Target Semester 92%</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">LOWONGAN KERJA TERBUKA</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">128 <span className="text-xs font-normal text-slate-500">Posisi</span></p>
                </div>
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[11px]">
                <span className="text-slate-600 font-semibold">64 Perusahaan Mitra</span>
                <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold">18 Verifikasi Baru</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">KEMITRAAN INDUSTRI AKTIF</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">245 <span className="text-xs font-normal text-slate-500">MoU/MoA</span></p>
                </div>
                <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-[11px] text-slate-500">
                <span>McDermott, Infineon, Pegatron</span>
                <span className="text-amber-600 font-bold">+6 Bulan Ini</span>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase">KETERSERAPAN LULUSAN</p>
                  <p className="text-2xl font-black text-slate-900 mt-1">87.4% <span className="text-xs font-normal text-slate-500">&lt; 6 Bulan</span></p>
                </div>
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-[87%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Tengah: Grafis Tren & Sektor Mitra */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Tren Penyerapan */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">ANALISIS EKOSISTEM KARIR</span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">Tren Penyerapan Alumni & Magang Industri Polibatam</h3>
                </div>
                <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  <button type="button" className="bg-white px-3 py-1 rounded-md shadow-sm text-slate-900">2024</button>
                  <button type="button" className="px-3 py-1 text-slate-500">2023</button>
                  <button type="button" className="px-3 py-1 text-slate-500">2022</button>
                </div>
              </div>

              {/* Simulated Visual Bar Chart */}
              <div className="h-48 pt-6 flex items-end justify-between px-4 border-b border-slate-100">
                <div className="flex flex-col items-center space-y-2 flex-1">
                  <div className="w-full max-w-[60px] bg-blue-600 rounded-t-lg h-36"></div>
                  <span className="text-[11px] font-bold text-slate-700">Teknik Informatika</span>
                  <span className="text-[10px] text-slate-400">542 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-2 flex-1">
                  <div className="w-full max-w-[60px] bg-blue-600 rounded-t-lg h-32"></div>
                  <span className="text-[11px] font-bold text-slate-700">Teknik Elektro</span>
                  <span className="text-[10px] text-slate-400">488 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-2 flex-1">
                  <div className="w-full max-w-[60px] bg-blue-600 rounded-t-lg h-28"></div>
                  <span className="text-[11px] font-bold text-slate-700">Teknik Mesin</span>
                  <span className="text-[10px] text-slate-400">430 Mhs</span>
                </div>
                <div className="flex flex-col items-center space-y-2 flex-1">
                  <div className="w-full max-w-[60px] bg-blue-800 rounded-t-lg h-24"></div>
                  <span className="text-[11px] font-bold text-slate-700">Manajemen Bisnis</span>
                  <span className="text-[10px] text-slate-400">382 Mhs</span>
                </div>
              </div>
            </div>

            {/* Donut Chart Sektor Mitra */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-slate-900">Sektor Mitra Kawasan Batam</h3>
                <p className="text-xs text-slate-500">Sebaran Industri penerima magang & alumni</p>
                
                <div className="my-6 flex justify-center">
                  <div className="w-36 h-36 rounded-full border-[14px] border-blue-600 border-t-amber-500 border-r-indigo-500 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-black text-slate-900">245</span>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Mitra Total</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between font-semibold">
                  <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-2"></span>Manufaktur & Elektronik</span>
                  <span>42% (103)</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500 mr-2"></span>IT, Software & Multimedia</span>
                  <span>28% (69)</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>Shipyard & Logistik</span>
                  <span>18% (44)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Grid Bawah: Tabel Verifikasi & Sidebar Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Tabel Verifikasi Lowongan */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full uppercase">PERLU TINDAKAN SEGERA</span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">Verifikasi Pengajuan Lowongan Mitra</h3>
                </div>
                <button type="button" className="text-xs font-bold text-blue-600 hover:text-blue-700">Filter Status ▾</button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-100">
                    <tr>
                      <th className="p-4">PERUSAHAAN / MITRA</th>
                      <th className="p-4">POSISI & JURUSAN</th>
                      <th className="p-4">STATUS</th>
                      <th className="p-4 text-center">AKSI CEPAT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">PT McDermott Indonesia</p>
                        <p className="text-[10px] text-slate-400">Batu Ampar, Batam</p>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-800">Junior Structural Drafter</p>
                        <p className="text-[10px] text-slate-400">Teknik Mesin / Perkapalan</p>
                      </td>
                      <td className="p-4">
                        <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-[10px] font-bold">Menunggu Review</span>
                      </td>
                      <td className="p-4 text-center">
                        <button type="button" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] hover:bg-blue-700">Setujui</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">PT Pegatron Technology Batam</p>
                        <p className="text-[10px] text-slate-400">Batamindo Industrial Park</p>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-800">SMT Process Technician</p>
                        <p className="text-[10px] text-slate-400">Teknik Elektro / Mekatronika</p>
                      </td>
                      <td className="p-4">
                        <span className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full text-[10px] font-bold">Menunggu Review</span>
                      </td>
                      <td className="p-4 text-center">
                        <button type="button" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-[11px] hover:bg-blue-700">Setujui</button>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">
                        <p className="font-bold text-slate-900">PT Shimano Batam</p>
                        <p className="text-[10px] text-slate-400">Mukakuning, Batam</p>
                      </td>
                      <td className="p-4">
                        <p className="font-semibold text-slate-800">QA/QC Automation Inspector</p>
                        <p className="text-[10px] text-slate-400">Informatika / Elektro</p>
                      </td>
                      <td className="p-4">
                        <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-[10px] font-bold">Disetujui</span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="text-[11px] text-slate-400 font-semibold">Aktif Tayang</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Widgets Kanan: Tracer Study & Agenda */}
            <div className="space-y-6">
              
              {/* Tracer Study Progress Widget */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-extrabold text-sm text-slate-900">Progres Pengisian Kuesioner</h4>
                  <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded">Tahap 1</span>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Target Responden CDC (1.200 Mhs)</span>
                    <span className="text-blue-600">78.5% Selesai</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full w-[78.5%]"></div>
                  </div>
                </div>
                <button type="button" className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 rounded-xl text-xs font-bold transition-colors">
                  Blast Pengingat Email Otomatis
                </button>
              </div>

              {/* Agenda Terdekat Widget */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <h4 className="font-extrabold text-sm text-slate-900">Agenda & Event Terdekat</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 rounded-xl bg-slate-50">
                    <div className="bg-blue-600 text-white rounded-lg p-2 text-center w-12 flex-shrink-0">
                      <p className="text-[9px] font-bold uppercase">OKT</p>
                      <p className="text-base font-black leading-none">24</p>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-900">Workshop ATS Resume & Interv</p>
                      <p className="text-[10px] text-slate-500">Auditorium Polibatam • 250 Peserta</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-2 rounded-xl bg-slate-50">
                    <div className="bg-[#1b439c] text-white rounded-lg p-2 text-center w-12 flex-shrink-0">
                      <p className="text-[9px] font-bold uppercase">NOV</p>
                      <p className="text-base font-black leading-none">12</p>
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-900">Polibatam Career Expo & Job Fa</p>
                      <p className="text-[10px] text-slate-500">32 Booth Industri Manufaktur & IT</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Section: Sinergi Industri & Kolaborasi Vokasi Polibatam */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
            <div>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">EKOSISTEM KEMITRAAN STRATEGIS</span>
              <h3 className="text-base font-extrabold text-slate-900 mt-1">Sinergi Industri & Kolaborasi Vokasi Polibatam</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=500" alt="Kuliah Umum" className="w-full h-36 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-xs text-slate-900">Kuliah Umum Industri & Penandatanganan Kerjasama</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">Sesi sharing session manajemen industri multinasional Batam bersama 400+ calon lulusan.</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=500" alt="Sertifikasi" className="w-full h-36 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-xs text-slate-900">Penyerahan Beasiswa & Sertifikat Kompetensi Industri</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">Apresiasi mahasiswa berprestasi pada program magang bersertifikat batch genap.</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=500" alt="Pelatihan Persiapan" className="w-full h-36 object-cover" />
                <div className="p-4 space-y-1">
                  <h4 className="font-bold text-xs text-slate-900">Pelatihan Persiapan Wawancara Kerja & Portofolio</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2">Pembekalan tips lolos screening HRD perusahaan manufaktur berstandar internasional.</p>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}