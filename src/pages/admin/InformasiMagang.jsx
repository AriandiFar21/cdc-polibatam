import React, { useState, useMemo } from 'react';
import Header from '../../Admin/Header';
import Sidebar from '../../Admin/Sidebar';
import { 
  Briefcase, Building2, Plus, Search, ExternalLink, 
  ChevronLeft, ChevronRight, Eye, Pencil, Trash2, 
  X, MapPin, GraduationCap, Globe, AlertCircle, Calendar, CheckCircle2
} from 'lucide-react';

export default function InformasiMagang() {
  // 1. Initial State Data Lowongan Magang
  const [magangData, setMagangData] = useState([
    {
      id: 'MAG-2025-001',
      judul: 'Fullstack Web & Smart IoT Engineering',
      mitra: 'PT Schneider Electric Manufacturing Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Mukakuning, Batam Kota • On-Site',
      skema: 'Magang Kerja Sama',
      prodi: 'D4 Rekayasa Perangkat Lunak, D4 Robotika',
      periode: '6 Bulan (Februari - Agustus 2025)',
      kuota: '10 Kursi',
      linkPendaftaran: 'https://linktr.ee/schneider_intern',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'MAG-2025-004',
      judul: 'SMT Assembly Line & Hardware QC',
      mitra: 'PT Pegatron Technology Indonesia',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Sei Beduk, Batam • Shift On-Site',
      skema: 'Magang Mandiri',
      prodi: 'D3 Teknik Elektronika, D4 Mekatronika',
      periode: 'Sesuai aturan perusahaan',
      kuota: '',
      linkPendaftaran: 'https://pegatron.co.id/career',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 'MAG-2025-012',
      judul: 'BIM Civil Drafting & QA Inspection',
      mitra: 'PT Citra Tubindo Tbk',
      lokasi: 'Kabil Industrial Estate',
      subLokasi: 'Nongsa, Batam • On-Site Plant',
      skema: 'Magang Kerja Sama',
      prodi: 'D4 Bangunan Kapal, D4 Mesin',
      periode: '3 - 6 Bulan',
      kuota: '6 Kursi',
      linkPendaftaran: 'https://citratubindo.com/internship',
      status: 'Tutup',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=150'
    }
  ]);

  // Checkbox State
  const [selectedItems, setSelectedItems] = useState([]);

  // 2. Filter & Pagination State
  const [searchQuery, setSearchQuery] = useState('');
  const [skemaFilter, setSkemaFilter] = useState('Semua');
  const [statusFilter, setStatusFilter] = useState('Semua');
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
    skema: 'Magang Kerja Sama',
    prodi: '',
    periode: 'Sesuai aturan perusahaan',
    kuota: '',
    linkPendaftaran: '',
    status: 'Aktif',
    img: ''
  };
  const [formData, setFormData] = useState(emptyForm);

  // 5. Computed Stats Cards
  const totalProgram = magangData.length;
  const totalAktif = magangData.filter(d => d.status === 'Aktif').length;
  const totalTutup = magangData.filter(d => d.status === 'Tutup').length;

  // 6. Computed Filters & Pagination
  const filteredData = useMemo(() => {
    return magangData.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchSearch = 
        item.judul.toLowerCase().includes(query) ||
        item.mitra.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query);

      const matchSkema = skemaFilter === 'Semua' ? true : item.skema === skemaFilter;
      const matchStatus = statusFilter === 'Semua' ? true : item.status === statusFilter;

      return matchSearch && matchSkema && matchStatus;
    });
  }, [magangData, searchQuery, skemaFilter, statusFilter]);

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
    setFormData({ ...emptyForm, id: `MAG-2025-0${Math.floor(10 + Math.random() * 90)}` });
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
      setMagangData(prev =>
        prev.map(item => (item.id === formData.id ? { ...formData } : item))
      );
    } else {
      const newItem = {
        ...formData,
        img: formData.img.trim() || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'
      };
      setMagangData(prev => [newItem, ...prev]);
    }
    setIsAddEditOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedProgram) {
      setMagangData(prev => prev.filter(item => item.id !== selectedProgram.id));
      setSelectedItems(prev => prev.filter(id => id !== selectedProgram.id));
      setIsDeleteOpen(false);
      setSelectedProgram(null);
    }
  };

  // Helper Badge Status
  const getStatusBadge = (status) => {
    if (status === 'Aktif') {
      return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Aktif</span>;
    }
    return <span className="bg-slate-100 text-slate-500 border border-slate-200 font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide">Tutup</span>;
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
              <p className="text-xs font-semibold text-slate-400">CDC Polibatam / Manajemen Magang / <span className="text-blue-600">Lowongan Magang</span></p>
              <h1 className="text-2xl font-black text-slate-900 mt-1">Informasi Lowongan Magang</h1>
              <p className="text-xs text-slate-500">Kelola daftar lowongan magang kerja sama dan magang mandiri dari mitra industri.</p>
            </div>
            <button 
              type="button" 
              onClick={handleOpenAddModal}
              className="bg-[#1b439c] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Lowongan Magang</span>
            </button>
          </div>

          {/* Ringkasan Kartu Indikator */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">TOTAL LOWONGAN</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalProgram} <span className="text-xs font-normal text-slate-500">Program</span></p>
              </div>
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">LOWONGAN AKTIF</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalAktif} <span className="text-xs font-normal text-slate-500">Tersedia</span></p>
              </div>
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">LOWONGAN DITUTUP</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalTutup} <span className="text-xs font-normal text-slate-500">Arsip</span></p>
              </div>
              <div className="p-2.5 bg-slate-100 text-slate-600 rounded-lg">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari ID, posisi magang, atau nama perusahaan..."
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
                <option value="Magang Kerja Sama">Magang Kerja Sama</option>
                <option value="Magang Mandiri">Magang Mandiri</option>
              </select>
              
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="bg-slate-50 border border-slate-100 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Semua">Semua Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Tutup">Tutup</option>
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
              <span>Menampilkan {paginatedData.length} dari {filteredData.length} lowongan</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50/50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th className="p-4 w-10"></th>
                    <th className="p-4 w-[28%]">POSISI MAGANG & MITRA</th>
                    <th className="p-4 w-[20%]">LOKASI & PERIODE</th>
                    <th className="p-4 w-[22%]">SKEMA & PRODI</th>
                    <th className="p-4 text-center">STATUS</th>
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
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-100 bg-white" 
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=150'; }}
                          />
                          <div>
                            <p className="font-bold text-slate-900 text-sm leading-tight">{item.judul}</p>
                            <p className="text-[11px] text-slate-600 font-semibold mt-0.5">{item.mitra}</p>
                            <p className="text-[10px] text-slate-400 font-mono mt-0.5">{item.id}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-800">{item.lokasi}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                            <Calendar className="w-3 h-3"/> {item.periode}
                          </p>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-800">{item.skema}</p>
                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5" title={item.prodi}>{item.prodi}</p>
                        </td>
                        <td className="p-4 text-center">
                          {getStatusBadge(item.status)}
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
                              title="Edit Lowongan"
                              onClick={() => handleOpenEditModal(item)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button 
                              type="button" 
                              title="Hapus Lowongan"
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
                      <td colSpan="6" className="p-8 text-center text-slate-400">
                        Tidak ada lowongan magang yang ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
              <p>Menampilkan <span className="font-bold text-slate-800">{filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}
                - {Math.min(currentPage * itemsPerPage, filteredData.length)}</span> dari <span className="font-bold text-slate-800">{filteredData.length}</span> Lowongan Magang</p>
              
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
                  {isEditMode ? 'Edit Lowongan Magang' : 'Tambah Lowongan Magang'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEditMode ? `ID Program: ${formData.id}` : 'Lengkapi formulir informasi lowongan magang baru'}
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
                  <label className="block font-bold text-slate-700 mb-1">Judul Posisi Magang <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="judul"
                    required
                    placeholder="Contoh: Frontend Engineering Intern"
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
                  <label className="block font-bold text-slate-700 mb-1">Kawasan Industri / Lokasi <span className="text-red-500">*</span></label>
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
                  <label className="block font-bold text-slate-700 mb-1">Skema Magang <span className="text-red-500">*</span></label>
                  <select
                    name="skema"
                    required
                    value={formData.skema}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Magang Kerja Sama">Magang Kerja Sama</option>
                    <option value="Magang Mandiri">Magang Mandiri</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Periode Magang <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="periode"
                    required
                    placeholder="Contoh: Sesuai aturan perusahaan atau 6 Bulan"
                    value={formData.periode}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
                  <label className="block font-bold text-slate-700 mb-1">Detail Kuota Kursi (Opsional)</label>
                  <input
                    type="text"
                    name="kuota"
                    placeholder="Contoh: 10 Kursi (Opsional)"
                    value={formData.kuota}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Status Lowongan <span className="text-red-500">*</span></label>
                  <select
                    name="status"
                    required
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Tutup">Tutup</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Link Pendaftaran / Poster Flyer (Image URL) <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="linkPendaftaran"
                    required
                    placeholder="Contoh: https://perusahaan.com/karir atau URL gambar poster"
                    value={formData.linkPendaftaran}
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
                  {isEditMode ? 'Simpan Perubahan' : 'Tambah Lowongan'}
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
                  <span className="block font-semibold text-slate-500 mb-0.5">Status Pendaftaran</span>
                  {getStatusBadge(selectedProgram.status)}
                </div>
                <div className="text-right">
                  <span className="block font-semibold text-slate-500 mb-0.5">Skema Magang</span>
                  <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-[10px]">{selectedProgram.skema}</span>
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
                  <Calendar className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Periode Magang</p>
                    <p className="text-slate-600">{selectedProgram.periode}</p>
                  </div>
                </div>

                {selectedProgram.kuota && (
                  <div className="flex items-start space-x-3">
                    <Briefcase className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-900">Kuota Magang</p>
                      <p className="text-slate-600">{selectedProgram.kuota}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Akses Pendaftaran / Poster</p>
                    <a href={selectedProgram.linkPendaftaran} target="_blank" rel="noreferrer" className="text-blue-600 font-semibold hover:underline flex items-center space-x-1 mt-0.5">
                      <span className="truncate max-w-[250px]">{selectedProgram.linkPendaftaran}</span>
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
            
            <h3 className="text-base font-black text-slate-900 mb-1">Hapus Lowongan Magang?</h3>
            <p className="text-xs text-slate-500 mb-6">
              Apakah Anda yakin ingin menghapus lowongan <strong className="text-slate-800">{selectedProgram.judul}</strong> dari daftar <strong className="text-slate-800">{selectedProgram.mitra}</strong>? Data yang telah dihapus tidak dapat dipulihkan.
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