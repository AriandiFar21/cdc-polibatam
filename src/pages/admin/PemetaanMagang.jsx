import React, { useState, useMemo } from 'react';
import Header from '../../Admin/Header';
import Sidebar from '../../Admin/Sidebar';
import { 
  Briefcase, Users, Building2, Plus, Search, ExternalLink, 
  ChevronLeft, ChevronRight, CheckSquare, Eye, Pencil, Trash2, 
  X, MapPin, GraduationCap, Globe, AlertCircle, FileText
} from 'lucide-react';

export default function PemetaanMagang() {
  // 1. Initial State Data Program Magang
  const [programData, setProgramData] = useState([
    {
      id: 'CDC-INT-2025-001',
      judul: 'Fullstack Web & Smart IoT Engineering',
      mitra: 'PT Schneider Electric Manufacturing Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Mukakuning, Batam Kota • On-Site',
      skema: 'Konversi 20 SKS',
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
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Sei Beduk, Batam • Shift On-Site',
      skema: 'Magang Reguler',
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
      skema: 'Konversi 20 SKS',
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
      skema: 'Konversi 20 SKS',
      prodi: 'D4 Akuntansi Manajerial, D4 Bisnis',
      kuota: '4 / 5 Kursi',
      pelamar: '19 Pelamar',
      portal: 'Portal Mitra',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'
    }
  ]);

  // Checkbox State
  const [selectedItems, setSelectedItems] = useState([]);

  // 2. Filter & Pagination State
  const [searchQuery, setSearchQuery] = useState('');
  const [skemaFilter, setSkemaFilter] = useState('Semua');
  const [lokasiFilter, setLokasiFilter] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 3. Modal States
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // 4. Form State
  const emptyForm = {
    id: '',
    judul: '',
    mitra: '',
    lokasi: 'Batamindo Industrial Park',
    subLokasi: '',
    skema: 'Konversi 20 SKS',
    prodi: '',
    kuota: '',
    pelamar: '0 Pelamar',
    portal: 'Portal Karir',
    img: ''
  };
  const [formData, setFormData] = useState(emptyForm);

  // 5. Computed Filters & Pagination
  const filteredData = useMemo(() => {
    return programData.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchSearch = 
        item.judul.toLowerCase().includes(query) ||
        item.mitra.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query);

      const matchSkema = skemaFilter === 'Semua' ? true : item.skema.includes(skemaFilter);
      const matchLokasi = lokasiFilter === 'Semua' ? true : item.lokasi.includes(lokasiFilter);

      return matchSearch && matchSkema && matchLokasi;
    });
  }, [programData, searchQuery, skemaFilter, lokasiFilter]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // --- HANDLERS (Checkbox) ---
  const handleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(paginatedData.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // --- HANDLERS (CRUD Modals) ---
  const handleOpenAddModal = () => {
    setIsEditMode(false);
    setFormData({ ...emptyForm, id: `CDC-INT-2025-0${Math.floor(10 + Math.random() * 90)}` });
    setIsAddEditOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setIsEditMode(true);
    setFormData({ ...item });
    setIsAddEditOpen(true);
  };

  const handleOpenDetailModal = (item) => {
    setSelectedProgram(item);
    setIsDetailOpen(true);
  };

  const handleOpenDeleteModal = (item) => {
    setSelectedProgram(item);
    setIsDeleteOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      setProgramData(prev =>
        prev.map(item => (item.id === formData.id ? { ...formData } : item))
      );
    } else {
      const newItem = {
        ...formData,
        img: formData.img.trim() || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'
      };
      setProgramData(prev => [newItem, ...prev]);
    }
    setIsAddEditOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedProgram) {
      setProgramData(prev => prev.filter(item => item.id !== selectedProgram.id));
      setSelectedItems(prev => prev.filter(id => id !== selectedProgram.id));
      setIsDeleteOpen(false);
      setSelectedProgram(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
      
      <Header />

      <div className="flex flex-1">
        
        <Sidebar />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto w-full">
          
          {/* Header Info & Tombol Action */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-xs font-semibold text-slate-400">Beranda / Pusat Karir &amp; Magang / <span className="text-blue-600">Daftar Internship</span></p>
              <h1 className="text-2xl font-black text-slate-900 mt-1">Daftar Program Internship &amp; Magang</h1>
              <p className="text-xs text-slate-500">Kelola kemitraan industri, pemetaan penempatan magang vokasi, dan pendaftaran mahasiswa CDC Polibatam.</p>
            </div>
            <button 
              type="button" 
              onClick={handleOpenAddModal}
              className="bg-[#1b439c] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Program</span>
            </button>
          </div>

          {/* Ringkasan Kartu Indikator Internship */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-[11px] font-bold text-slate-400 uppercase">TOTAL PROGRAM AKTIF</p>
              <p className="text-2xl font-black text-slate-900 mt-0.5">{programData.length} <span className="text-xs font-normal text-slate-500">Program</span></p>
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
                placeholder="Cari ID, program magang, atau nama perusahaan..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto">
              <select 
                value={skemaFilter}
                onChange={(e) => { setSkemaFilter(e.target.value); setCurrentPage(1); }}
                className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Semua">Semua Skema</option>
                <option value="Konversi 20 SKS">Konversi 20 SKS</option>
                <option value="Magang Reguler">Magang Reguler</option>
              </select>
              
              <select 
                value={lokasiFilter}
                onChange={(e) => { setLokasiFilter(e.target.value); setCurrentPage(1); }}
                className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Semua">Semua Kawasan</option>
                <option value="Batamindo">Batamindo</option>
                <option value="Kabil">Kabil</option>
                <option value="Panbil">Panbil</option>
              </select>
            </div>
          </div>

          {/* Tabel Program Magang */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center text-xs text-slate-500 font-semibold px-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={paginatedData.length > 0 && selectedItems.length === paginatedData.length}
                  onChange={handleSelectAll}
                  className="rounded text-blue-600 focus:ring-blue-500" 
                />
                <span>Pilih Semua Halaman Ini ({selectedItems.length} terpilih)</span>
              </label>
              <span>Menampilkan {paginatedData.length} dari {filteredData.length} program</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th className="p-4 w-10"></th>
                    <th className="p-4">FOTO &amp; PROGRAM MAGANG</th>
                    <th className="p-4">LOKASI MITRA</th>
                    <th className="p-4">SPESIFIKASI &amp; KUOTA</th>
                    <th className="p-4 text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
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
                          <img 
                            src={item.img} 
                            alt={item.mitra} 
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-slate-100 bg-white" 
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'; }}
                          />
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
                          <p className="text-[11px] text-slate-500 truncate max-w-[200px]" title={item.prodi}>{item.prodi}</p>
                          <p className="text-[11px] font-bold text-blue-600 mt-0.5">
                            {item.kuota} • {item.pelamar}
                          </p>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-1">
                            <button 
                              type="button" 
                              title="Lihat Detail"
                              onClick={() => handleOpenDetailModal(item)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button 
                              type="button" 
                              title="Edit Program"
                              onClick={() => handleOpenEditModal(item)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button 
                              type="button" 
                              title="Hapus Program"
                              onClick={() => handleOpenDeleteModal(item)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400">
                        Tidak ada program magang yang ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
              <p>Menampilkan <span className="font-bold text-slate-800">{filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, filteredData.length)}</span> dari <span className="font-bold text-slate-800">{filteredData.length}</span> Program Magang</p>
              
              <div className="flex items-center space-x-2">
                <span>Baris per halaman:</span>
                <select 
                  value={itemsPerPage}
                  onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                  className="bg-slate-100 border-none rounded-lg px-2 py-1 font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                </select>

                <div className="flex items-center space-x-1 pl-4">
                  <button 
                    type="button" 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-2 font-semibold text-slate-700">
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    type="button" 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* ==================== 1. MODAL TAMBAH / EDIT ==================== */}
      {isAddEditOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEditMode ? 'Edit Program Magang' : 'Tambah Program Magang'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEditMode ? `ID Program: ${formData.id}` : 'Lengkapi formulir kemitraan program magang baru'}
                </p>
              </div>
              <button 
                type="button"
                onClick={() => setIsAddEditOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Judul Program Magang <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="judul"
                    required
                    placeholder="Contoh: Fullstack Web & Smart IoT Engineering"
                    value={formData.judul}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Mitra Industri <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="mitra"
                    required
                    placeholder="Contoh: PT Pegatron Technology"
                    value={formData.mitra}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kawasan Industri <span className="text-red-500">*</span></label>
                  <select
                    name="lokasi"
                    required
                    value={formData.lokasi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Batamindo Industrial Park">Batamindo Industrial Park</option>
                    <option value="Kawasan Industri Batu Ampar">Kawasan Industri Batu Ampar</option>
                    <option value="Panbil Industrial Estate">Panbil Industrial Estate</option>
                    <option value="Kabil Integrated Estate">Kabil Integrated Estate</option>
                    <option value="Lainnya">Lainnya / Luar Kawasan</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sub Lokasi &amp; Sistem Kerja</label>
                  <input
                    type="text"
                    name="subLokasi"
                    placeholder="Contoh: Mukakuning, Batam Kota • On-Site"
                    value={formData.subLokasi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Skema Program <span className="text-red-500">*</span></label>
                  <select
                    name="skema"
                    required
                    value={formData.skema}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Konversi 20 SKS">Konversi 20 SKS</option>
                    <option value="Magang Reguler">Magang Reguler</option>
                    <option value="MSIB Kampus Merdeka">MSIB Kampus Merdeka</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Target Jurusan / Prodi <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="prodi"
                    required
                    placeholder="Contoh: D4 Rekayasa Perangkat Lunak, D4 Robotika"
                    value={formData.prodi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Detail Kuota Kursi</label>
                  <input
                    type="text"
                    name="kuota"
                    placeholder="Contoh: 10 / 12 Kursi"
                    value={formData.kuota}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Portal Pendaftaran <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="portal"
                    required
                    placeholder="Contoh: Portal Karir"
                    value={formData.portal}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">URL Logo Perusahaan (Opsional)</label>
                  <input
                    type="url"
                    name="img"
                    placeholder="https://images.unsplash.com/..."
                    value={formData.img}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddEditOpen(false)}
                  className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#1b439c] hover:bg-blue-800 text-white font-bold rounded-xl transition-colors shadow-sm"
                >
                  {isEditMode ? 'Simpan Perubahan' : 'Tambah Program'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================== 2. MODAL DETAIL ==================== */}
      {isDetailOpen && selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center space-x-3">
                <img 
                  src={selectedProgram.img} 
                  alt={selectedProgram.mitra} 
                  className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-white" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'; }}
                />
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">{selectedProgram.judul}</h3>
                  <p className="text-xs font-semibold text-slate-500">{selectedProgram.mitra}</p>
                </div>
              </div>
              <button 
                type="button" 
                onClick={() => setIsDetailOpen(false)} 
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs text-slate-700">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <span className="block font-semibold text-slate-500 mb-0.5">Skema Evaluasi</span>
                  <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-[10px]">{selectedProgram.skema}</span>
                </div>
                <div className="text-right">
                  <span className="block font-semibold text-slate-500 mb-0.5">ID Program</span>
                  <span className="font-mono font-bold text-slate-800">{selectedProgram.id}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Lokasi Industri</p>
                    <p className="text-slate-600">{selectedProgram.lokasi} <br/> <span className="text-slate-400">{selectedProgram.subLokasi}</span></p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Spesifikasi Jurusan</p>
                    <p className="text-slate-600">{selectedProgram.prodi}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Kapasitas &amp; Pelamar</p>
                    <p className="text-blue-600 font-semibold">{selectedProgram.kuota} <span className="text-slate-400 font-normal">|</span> {selectedProgram.pelamar}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Sistem Portal</p>
                    <a href="#" className="text-blue-600 font-semibold hover:underline flex items-center space-x-1 mt-0.5">
                      <span>{selectedProgram.portal}</span>
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setIsDetailOpen(false);
                  handleOpenEditModal(selectedProgram);
                }}
                className="px-4 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 transition-colors"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit Data</span>
              </button>
              <button
                type="button"
                onClick={() => setIsDetailOpen(false)}
                className="px-5 py-2 bg-[#1b439c] hover:bg-blue-800 text-white font-bold rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ==================== 3. MODAL HAPUS ==================== */}
      {isDeleteOpen && selectedProgram && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-md p-6 text-center animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            
            <h3 className="text-base font-black text-slate-900 mb-1">Hapus Program Magang?</h3>
            <p className="text-xs text-slate-500 mb-6">
              Apakah Anda yakin ingin menghapus program <strong className="text-slate-800">{selectedProgram.judul}</strong> dari daftar kemitraan <strong className="text-slate-800">{selectedProgram.mitra}</strong>? Data riwayat yang telah dihapus tidak dapat dipulihkan.
            </p>

            <div className="flex items-center space-x-3 justify-center">
              <button
                type="button"
                onClick={() => setIsDeleteOpen(false)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-600 bg-slate-100 hover:bg-slate-200 w-full transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleDeleteConfirm}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 w-full transition-colors shadow-sm"
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}