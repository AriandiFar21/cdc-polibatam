import React, { useState } from 'react';
import Header from '../../Admin/Header';   // Import Header Reusable
import Sidebar from '../../Admin/Sidebar'; // Import Sidebar Reusable
import { 
  Briefcase, CheckCircle2, Clock, AlertCircle, Search, Plus, 
  ExternalLink, ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function KelolaLowongan() {
  // 1. State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [kawasanFilter, setKawasanFilter] = useState('Semua');

  // 2. Data Dummy Lowongan
  const lowonganData = [
    {
      id: 1,
      judul: 'Senior Frontend Engineer',
      perusahaan: 'PT Pegatron Technology Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Muka Kuning • On-Site',
      prodi: 'D4 TRPL, D3 TI',
      gaji: 'Rp 7,5 - 11 Jt',
      ipk: 'Min IPK 3.25',
      link: 'https://careers.pegatroncorp.com',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 2,
      judul: 'Junior Mechanical Drafter',
      perusahaan: 'PT McDermott Indonesia',
      lokasi: 'Kawasan Industri Batu Ampar',
      subLokasi: 'Batu Ampar • Yard',
      prodi: 'D3 Teknik Mesin',
      gaji: 'Rp 6 - 8,2 Jt',
      ipk: 'Min IPK 3.00',
      link: 'https://mcdermott.myworkdayjobs.com',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 3,
      judul: 'Quality Assurance Specialist',
      perusahaan: 'PT Infineon Technologies Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Muka Kuning • Cleanroom',
      prodi: 'Teknik Elektro, Mekatronika',
      gaji: 'Rp 6,8 - 9,5 Jt',
      ipk: 'Min IPK 3.10',
      link: 'https://infineon.com/careers',
      status: 'Review',
      img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 4,
      judul: 'PLC & Automation Engineer',
      perusahaan: 'PT Schneider Electric Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Muka Kuning • Smart Plant',
      prodi: 'D4 Robotika, Mekatronika',
      gaji: 'Rp 8 - 12,5 Jt',
      ipk: 'Min IPK 3.20',
      link: 'https://se.com/id/careers',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 5,
      judul: 'CNC Milling & Tooling Technician',
      perusahaan: 'PT Shimano Batam',
      lokasi: 'Panbil Industrial Estate',
      subLokasi: 'Panbil • Workshop',
      prodi: 'D3 Teknik Mesin, Manufaktur',
      gaji: 'Rp 5,7 - 7,5 Jt',
      ipk: 'Min IPK 2.90',
      link: 'https://forms.gle/Shimano2025',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 6,
      judul: 'Piping Stress Analysis Engineer',
      perusahaan: 'PT Bredero Shaw Indonesia',
      lokasi: 'Kabil Integrated Estate',
      subLokasi: 'Kabil',
      prodi: 'Teknik Mesin, Perkapalan',
      gaji: 'Rp 9 - 14 Jt',
      ipk: '-',
      link: '#',
      status: 'Ditutup',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=150'
    }
  ];

  // 3. Helper untuk Warna Badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Aktif':
        return <span className="text-emerald-600 font-bold text-xs">Aktif</span>;
      case 'Review':
        return <span className="text-amber-600 font-bold text-xs bg-amber-50 px-2.5 py-1 rounded-full">Review</span>;
      case 'Ditutup':
        return <span className="text-slate-400 font-medium text-xs">Ditutup</span>;
      default:
        return null;
    }
  };

  // 4. RETURN UTAMA (Struktur UI dengan Header dan Sidebar)
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* HEADER DI ATAS */}
      <Header />

      {/* CONTAINER UNTUK SIDEBAR & KONTEN */}
      <div className="flex flex-1">
        
        {/* SIDEBAR DI KIRI */}
        <Sidebar />

        {/* KONTEN UTAMA DI KANAN */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto w-full">
          
          {/* Ringkasan Kartu Indikator Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">TOTAL LOWONGAN</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">128 <span className="text-xs font-normal text-slate-500">posisi aktif</span></p>
              </div>
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">AKTIF TAYANG</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">104 <span className="text-xs font-bold text-blue-600">81.2%</span></p>
              </div>
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">MENUNGGU REVIEW</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">18 <span className="text-xs font-normal text-slate-500">perlu ditinjau</span></p>
              </div>
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">SEGERA BERAKHIR</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">6 <span className="text-xs font-bold text-red-600">≤ 3 hari</span></p>
              </div>
              <div className="p-2.5 bg-red-50 text-red-600 rounded-lg">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Section Header & Button Tambah */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400">CDC Polibatam &gt; Manajemen Lowongan &gt; <span className="text-blue-600">Daftar Lowongan Karir</span></p>
              <h1 className="text-2xl font-black text-slate-900 mt-1">Daftar Lowongan Karir</h1>
              <p className="text-xs text-slate-500">Informasi Lowongan Karir Politeknik Negeri Batam &amp; Mitra Industri Terverifikasi</p>
            </div>
            <button type="button" className="bg-[#1b439c] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition-colors">
              <Plus className="w-4 h-4" />
              <span>Tambah Lowongan</span>
            </button>
          </div>

          {/* Filter & Control Bar */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari posisi lowongan atau perusahaan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none"
              >
                <option value="Semua">Aktif Tayang</option>
                <option value="Review">Menunggu Review</option>
                <option value="Ditutup">Pendaftaran Ditutup</option>
              </select>

              <select 
                value={kawasanFilter}
                onChange={(e) => setKawasanFilter(e.target.value)}
                className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none"
              >
                <option value="Semua">Semua Kawasan</option>
                <option value="Batamindo">Batamindo</option>
                <option value="Kabil">Kabil Industrial Estate</option>
                <option value="Panbil">Panbil Industrial Estate</option>
              </select>
            </div>
          </div>

          {/* Tabel Data Lowongan */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th className="p-4">LOWONGAN &amp; PERUSAHAAN</th>
                    <th className="p-4">LOKASI</th>
                    <th className="p-4">KUALIFIKASI &amp; PRODI</th>
                    <th className="p-4">PORTAL EKSTERNAL</th>
                    <th className="p-4 text-center">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {lowonganData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 flex items-center space-x-3">
                        <img src={item.img} alt={item.perusahaan} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 text-sm">{item.judul}</p>
                          <p className="text-xs text-slate-500 font-semibold">{item.perusahaan}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800">{item.lokasi}</p>
                        <p className="text-[11px] text-slate-400">{item.subLokasi}</p>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800">{item.prodi}</p>
                        <p className="text-[11px] text-slate-500">{item.gaji} {item.ipk !== '-' && `• ${item.ipk}`}</p>
                      </td>
                      <td className="p-4">
                        {item.status !== 'Ditutup' ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="text-blue-600 hover:underline flex items-center space-x-1 font-semibold"
                          >
                            <span className="truncate max-w-[160px]">{item.link.replace('https://', '')}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        ) : (
                          <span className="text-slate-400 italic">Pendaftaran ditutup</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {getStatusBadge(item.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
              <p>Menampilkan <span className="font-bold text-slate-800">1 - 6</span> dari <span className="font-bold text-slate-800">128</span> lowongan karir</p>
              
              <div className="flex items-center space-x-2">
                <span>Baris per halaman:</span>
                <select className="bg-slate-100 border-none rounded-lg px-2 py-1 font-bold text-slate-800 focus:outline-none">
                  <option>10</option>
                  <option>25</option>
                </select>

                <div className="flex items-center space-x-1 pl-4">
                  <button type="button" className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50"><ChevronLeft className="w-4 h-4" /></button>
                  <button type="button" className="w-7 h-7 rounded-lg bg-[#1b439c] text-white font-bold">1</button>
                  <button type="button" className="w-7 h-7 rounded-lg hover:bg-slate-100 font-bold">2</button>
                  <button type="button" className="w-7 h-7 rounded-lg hover:bg-slate-100 font-bold">3</button>
                  <span>...</span>
                  <button type="button" className="w-7 h-7 rounded-lg hover:bg-slate-100 font-bold">16</button>
                  <button type="button" className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"><ChevronRight className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}