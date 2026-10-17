import React, { useState } from 'react';
import Header from '../../Admin/Header';
import Sidebar from '../../Admin/Sidebar';
import { 
  Briefcase, Users, Building2, Plus, Search, ExternalLink, 
  ChevronLeft, ChevronRight, CheckSquare 
} from 'lucide-react';

export default function PemetaanMagang() {
  const [selectedItems, setSelectedItems] = useState([]);

  // Data Dummy Program Internship
  const programData = [
    {
      id: 'CDC-INT-2025-001',
      judul: 'Fullstack Web & Smart IoT Engineering',
      mitra: 'PT Schneider Electric Manufacturing Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Mukakuning, Batam Kota • On-Site',
      skema: 'Konversi 20 SKS (Feb - Jul 2025)',
      prodi: 'D4 Rekayasa Perangkat Lunak, D4 Robotika',
      kuota: '10 / 12 Kursi',
      pelamar: '42 Pelamar',
      portal: 'Portal MSIB',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'CDC-INT-2025-004',
      judul: 'SMT Assembly Line & Hardware QC',
      mitra: 'PT Pegatron Technology Indonesia',
      lokasi: 'Batamindo Industrial Park, Lot 5',
      subLokasi: 'Sei Beduk, Batam • Shift On-Site',
      skema: 'Konversi 20 SKS (Mar - Agu 2025)',
      prodi: 'D3 Teknik Elektronika, D4 Mekatronika',
      kuota: '18 / 25 Kursi',
      pelamar: '68 Pelamar',
      portal: 'Portal Karir',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'CDC-INT-2025-012',
      judul: 'BIM Civil Drafting & QA Inspection',
      mitra: 'PT Citra Tubindo Tbk',
      lokasi: 'Kabil Industrial Estate',
      subLokasi: 'Nongsa, Batam • On-Site Plant',
      skema: 'Konversi 20 SKS (Feb - Jul 2025)',
      prodi: 'D4 Bangunan Kapal, D4 Mesin',
      kuota: '6 / 8 Kursi',
      pelamar: '27 Pelamar',
      portal: 'Portal Karir',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'CDC-INT-2025-019',
      judul: 'Corporate Finance & ERP Support',
      mitra: 'PT TDK Electronics Indonesia',
      lokasi: 'Panbil Industrial Estate',
      subLokasi: 'Muka Kuning, Batam • Office On-Site',
      skema: 'Konversi 20 SKS (Feb - Jul 2025)',
      prodi: 'D4 Akuntansi Manajerial, D4 Bisnis',
      kuota: '4 / 5 Kursi',
      pelamar: '19 Pelamar',
      portal: 'Portal Mitra',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'
    }
  ];

  // Toggle Checkbox Item
  const handleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ---------------- HEADER REUSABLE ---------------- */}
      <Header />

      <div className="flex flex-1">
        
        {/* ---------------- SIDEBAR REUSABLE ---------------- */}
        <Sidebar />

        {/* ---------------- AREA KONTEN UTAMA ---------------- */}
        <main className="flex-1 p-6 space-y-6 overflow-y-auto w-full">
          
          {/* Header Info & Tombol Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400">Beranda / Pusat Karir &amp; Magang / <span className="text-blue-600">Daftar Internship</span></p>
              <h1 className="text-2xl font-black text-slate-900 mt-1">Daftar Program Internship &amp; Magang</h1>
              <p className="text-xs text-slate-500">Kelola kemitraan industri, pemetaan penempatan magang vokasi, dan pendaftaran mahasiswa CDC Polibatam.</p>
            </div>
            <button type="button" className="bg-[#1b439c] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition-colors">
              <Plus className="w-4 h-4" />
              <span>Tambah Program</span>
            </button>
          </div>

          {/* Ringkasan Kartu Indikator Internship */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase">TOTAL PROGRAM AKTIF</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">84 <span className="text-xs font-normal text-slate-500">Program</span></p>
              <span className="text-[10px] text-blue-600 font-bold">14 skema baru</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase">KUOTA PENEMPATAN</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">412 <span className="text-xs font-normal text-slate-500">Kursi</span></p>
              <span className="text-[10px] text-slate-400">280 Terisi (68%)</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase">MAHASISWA PELAMAR</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">620 <span className="text-xs font-normal text-slate-500">Pelamar</span></p>
              <span className="text-[10px] text-slate-400">142 Dalam antrean</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase">MITRA INDUSTRI AKTIF</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">45 <span className="text-xs font-normal text-slate-500">Mitra</span></p>
              <span className="text-[10px] text-slate-400">Kawasan Industri Batam</span>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari program magang atau perusahaan..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto">
              <select className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none">
                <option>Semua Skema</option>
              </select>
              <select className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none">
                <option>Semua Jurusan</option>
              </select>
              <select className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none">
                <option>Dibuka (Aktif)</option>
              </select>
            </div>
          </div>

          {/* Tabel Program Magang */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center text-xs text-slate-500 font-semibold px-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                <span>Pilih Semua Program</span>
              </label>
              <span>Menampilkan 4 dari 84 lowongan</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th className="p-4 w-10"></th>
                    <th className="p-4">FOTO &amp; PROGRAM MAGANG</th>
                    <th className="p-4">LOKASI MITRA</th>
                    <th className="p-4">SPESIFIKASI &amp; KUOTA</th>
                    <th className="p-4 text-right">PENDAFTARAN &amp; AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {programData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4">
                        <input 
                          type="checkbox" 
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleSelect(item.id)}
                          className="rounded text-blue-600 focus:ring-blue-500" 
                        />
                      </td>
                      <td className="p-4 flex items-center space-x-3">
                        <img src={item.img} alt={item.mitra} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                        <div>
                          <p className="font-bold text-slate-900 text-sm leading-tight">{item.judul}</p>
                          <p className="text-xs text-slate-600 font-semibold mt-0.5">{item.mitra}</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.id}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800">{item.lokasi}</p>
                        <p className="text-[11px] text-slate-400">{item.subLokasi}</p>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-slate-800">{item.skema}</p>
                        <p className="text-[11px] text-slate-500">{item.prodi}</p>
                        <p className="text-[11px] font-bold text-blue-600 mt-0.5">
                          {item.kuota} • {item.pelamar}
                        </p>
                      </td>
                      <td className="p-4 text-right space-y-1">
                        <a href="#" className="inline-flex items-center space-x-1 font-bold text-blue-600 hover:underline">
                          <span>{item.portal}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <div>
                          <button type="button" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded-lg text-[10px] transition-colors">
                            Detail
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
              <p>Menampilkan <span className="font-bold text-slate-800">1 - 4</span> dari <span className="font-bold text-slate-800">84</span> Program Magang Terdaftar</p>
              
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
                  <button type="button" className="w-7 h-7 rounded-lg hover:bg-slate-100 font-bold">9</button>
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