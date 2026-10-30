import React, { useState, useMemo } from 'react';
import Header from '../../Admin/Header';   // Import Header Reusable
import Sidebar from '../../Admin/Sidebar'; // Import Sidebar Reusable
import { 
  Briefcase, CheckCircle2, AlertCircle, Search, Plus, 
  ExternalLink, ChevronLeft, ChevronRight, Eye, Pencil, Trash2, 
  X, MapPin, Globe, AlignLeft
} from 'lucide-react';

export default function KelolaLowongan() {
  // 1. Initial State Data Lowongan (Kualifikasi, IPK, dan Gaji digabung ke dalam Deskripsi)
  const [lowonganData, setLowonganData] = useState([
    {
      id: 1,
      judul: 'Senior Frontend Engineer',
      perusahaan: 'PT Pegatron Technology Batam',
      lokasi: 'Batamindo Industrial Park',
      subLokasi: 'Muka Kuning • On-Site',
      deskripsi: 'Tanggung Jawab:\n• Mengembangkan antarmuka web yang responsif dan interaktif menggunakan React.js dan Tailwind CSS.\n• Berkolaborasi dengan tim UI/UX Designer untuk menerjemahkan desain wireframe menjadi kode frontend yang bersih.\n\nPersyaratan:\n• Pendidikan minimal D3/D4 Teknik Informatika, Sistem Informasi, atau bidang terkait.\n• Menguasai JavaScript (ES6+), React.js, HTML5, CSS3/Tailwind CSS.\n• Minimal IPK 3.25',
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
      deskripsi: 'Tanggung Jawab:\n• Membuat gambar teknik atau drafting untuk struktur mekanikal perkapalan.\n• Membantu insinyur senior dalam perhitungan spesifikasi material proyek.\n\nPersyaratan:\n• Lulusan D3/D4 Teknik Mesin.\n• Mampu mengoperasikan AutoCAD 2D/3D dan SolidWorks.\n• Minimal IPK 3.00',
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
      deskripsi: 'Melakukan inspeksi kualitas pada komponen semikonduktor serta memastikan semua produk memenuhi standar ISO dan spesifikasi klien.\n\nKualifikasi:\n• D3/D4 Teknik Elektro atau Mekatronika (Min IPK 3.10).\n• Memahami konsep Quality Control (QC) dan jaminan mutu industri manufaktur.\n• Teliti dan mampu bekerja dalam ruangan cleanroom.',
      link: 'https://infineon.com/careers',
      status: 'Aktif',
      img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=150'
    },
    {
      id: 4,
      judul: 'Piping Stress Analysis Engineer',
      perusahaan: 'PT Bredero Shaw Indonesia',
      lokasi: 'Kabil Integrated Estate',
      subLokasi: 'Kabil',
      deskripsi: 'Tanggung Jawab:\n• Melakukan analisis tegangan pada sistem perpipaan untuk instalasi lepas pantai (offshore).\n• Memastikan desain pipa aman dari tekanan internal dan eksternal.\n\nPersyaratan Khusus:\n• S1 Teknik Mesin atau Perkapalan.\n• Pengalaman minimal 1 tahun di bidang analisis perpipaan.\n• Menguasai software Caesar II atau AutoPIPE.',
      link: '#',
      status: 'Ditutup',
      img: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=150'
    }
  ]);

  // 2. Filter & Pagination State
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [kawasanFilter, setKawasanFilter] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // 3. Modal States
  const [isAddEditOpen, setIsAddEditOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // 4. Form State (Disesuaikan, tanpa kualifikasi, ipk, dan gaji)
  const emptyForm = {
    id: null,
    judul: '',
    perusahaan: '',
    lokasi: '',
    subLokasi: '',
    deskripsi: '',
    link: '',
    status: 'Aktif',
    img: ''
  };
  const [formData, setFormData] = useState(emptyForm);

  // 5. Computed Stats Cards
  const totalLowongan = lowonganData.length;
  const totalAktif = lowonganData.filter(d => d.status === 'Aktif').length;
  const totalDitutup = lowonganData.filter(d => d.status === 'Ditutup').length;

  // 6. Handling Filtering
  const filteredData = useMemo(() => {
    return lowonganData.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchSearch = 
        item.judul.toLowerCase().includes(query) ||
        item.perusahaan.toLowerCase().includes(query) ||
        item.deskripsi.toLowerCase().includes(query);

      const matchStatus = statusFilter === 'Semua' ? true : item.status === statusFilter;
      const matchKawasan = kawasanFilter === 'Semua' ? true : item.lokasi.toLowerCase().includes(kawasanFilter.toLowerCase());

      return matchSearch && matchStatus && matchKawasan;
    });
  }, [lowonganData, searchQuery, statusFilter, kawasanFilter]);

  // 7. Handling Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // --- CRUD HANDLERS ---
  const handleOpenAddModal = () => {
    setIsEditMode(false);
    setFormData(emptyForm);
    setIsAddEditOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setIsEditMode(true);
    setFormData({ ...item });
    setIsAddEditOpen(true);
  };

  const handleOpenDetailModal = (item) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  const handleOpenDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      // UPDATE
      setLowonganData(prev =>
        prev.map(item => (item.id === formData.id ? { ...formData } : item))
      );
    } else {
      // CREATE
      const newItem = {
        ...formData,
        id: Date.now(),
        img: formData.img.trim() || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'
      };
      setLowonganData(prev => [newItem, ...prev]);
    }
    setIsAddEditOpen(false);
  };

  const handleDeleteConfirm = () => {
    if (selectedItem) {
      setLowonganData(prev => prev.filter(item => item.id !== selectedItem.id));
      setIsDeleteOpen(false);
      setSelectedItem(null);
    }
  };

  // Helper Warna Badge
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Aktif':
        return <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 font-bold text-xs px-2.5 py-1 rounded-full">Aktif</span>;
      case 'Ditutup':
        return <span className="bg-slate-100 text-slate-500 border border-slate-200 font-medium text-xs px-2.5 py-1 rounded-full">Ditutup</span>;
      default:
        return null;
    }
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">TOTAL LOWONGAN</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalLowongan} <span className="text-xs font-normal text-slate-500">posisi</span></p>
              </div>
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">AKTIF TAYANG</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalAktif} <span className="text-xs font-bold text-emerald-600">({totalLowongan ? ((totalAktif/totalLowongan)*100).toFixed(0) : 0}%)</span></p>
              </div>
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase">PENDAFTARAN DITUTUP</p>
                <p className="text-2xl font-black text-slate-900 mt-0.5">{totalDitutup} <span className="text-xs font-medium text-slate-500">arsip</span></p>
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
            <button 
              type="button" 
              onClick={handleOpenAddModal}
              className="bg-[#1b439c] hover:bg-blue-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shadow-sm transition-colors cursor-pointer"
            >
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
                placeholder="Cari posisi lowongan, perusahaan, atau detail deskripsi..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2 w-full md:w-auto">
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Semua">Semua Status</option>
                <option value="Aktif">Aktif Tayang</option>
                <option value="Ditutup">Pendaftaran Ditutup</option>
              </select>

              <select 
                value={kawasanFilter}
                onChange={(e) => { setKawasanFilter(e.target.value); setCurrentPage(1); }}
                className="bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded-xl px-3 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Semua">Semua Kawasan</option>
                <option value="Batamindo">Batamindo Industrial Park</option>
                <option value="Kabil">Kabil Integrated Estate</option>
                <option value="Panbil">Panbil Industrial Estate</option>
                <option value="Batu Ampar">Kawasan Industri Batu Ampar</option>
              </select>
            </div>
          </div>

          {/* Tabel Data Lowongan */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-400 font-bold uppercase border-b border-slate-100">
                  <tr>
                    <th className="p-4 w-[28%]">LOWONGAN &amp; PERUSAHAAN</th>
                    <th className="p-4 w-[18%]">LOKASI</th>
                    <th className="p-4 w-[25%]">DESKRIPSI PEKERJAAN</th>
                    <th className="p-4">PORTAL EKSTERNAL</th>
                    <th className="p-4 text-center">STATUS</th>
                    <th className="p-4 text-center">AKSI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 flex items-center space-x-3">
                          <img 
                            src={item.img} 
                            alt={item.perusahaan} 
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-slate-100 bg-slate-50" 
                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'; }}
                          />
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{item.judul}</p>
                            <p className="text-xs text-slate-500 font-semibold">{item.perusahaan}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="font-bold text-slate-800">{item.lokasi || '-'}</p>
                          <p className="text-[11px] text-slate-400">{item.subLokasi || '-'}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-slate-600 line-clamp-2">{item.deskripsi || '-'}</p>
                        </td>
                        <td className="p-4">
                          {item.status !== 'Ditutup' && item.link && item.link !== '#' ? (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-blue-600 hover:underline flex items-center space-x-1 font-semibold"
                            >
                              <span className="truncate max-w-[140px]">{item.link.replace(/^https?:\/\//, '')}</span>
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          ) : (
                            <span className="text-slate-400 italic">Pendaftaran ditutup</span>
                          )}
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
                        Tidak ada data lowongan yang sesuai filter / pencarian.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer Pagination */}
            <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-3">
              <p>
                Menampilkan <span className="font-bold text-slate-800">{filteredData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}
                - {Math.min(currentPage * itemsPerPage, filteredData.length)}</span> dari <span className="font-bold text-slate-800">{filteredData.length}</span> lowongan
              </p>
              
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
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
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
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* ==================== 1. MODAL TAMBAH / EDIT LOWONGAN ==================== */}
      {isAddEditOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {isEditMode ? 'Edit Lowongan Karir' : 'Tambah Lowongan Baru'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEditMode ? 'Perbarui informasi detail lowongan pekerjaan' : 'Isi formulir untuk menambahkan posisi lowongan baru ke sistem'}
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

            {/* Modal Body / Form */}
            <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Judul Posisi Lowongan */}
                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Judul Posisi Lowongan <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="judul"
                    required
                    placeholder="Contoh: Senior Frontend Engineer"
                    value={formData.judul}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Perusahaan */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Nama Perusahaan <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="perusahaan"
                    required
                    placeholder="Contoh: PT Pegatron Technology Batam"
                    value={formData.perusahaan}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* URL Logo/Foto Perusahaan */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">URL Logo / Foto Perusahaan</label>
                  <input
                    type="url"
                    name="img"
                    placeholder="https://images.unsplash.com/..."
                    value={formData.img}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Kawasan Industri (Tidak Wajib) */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Kawasan Industri / Lokasi</label>
                  <select
                    name="lokasi"
                    value={formData.lokasi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  >
                    <option value="">Pilih Lokasi (Opsional)</option>
                    <option value="Batamindo Industrial Park">Batamindo Industrial Park</option>
                    <option value="Kawasan Industri Batu Ampar">Kawasan Industri Batu Ampar</option>
                    <option value="Panbil Industrial Estate">Panbil Industrial Estate</option>
                    <option value="Kabil Integrated Estate">Kabil Integrated Estate</option>
                    <option value="Lainnya">Lainnya / Luar Kawasan</option>
                  </select>
                </div>

                {/* Sub Lokasi / Work Mode */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Sub Lokasi &amp; Sistem Kerja</label>
                  <input
                    type="text"
                    name="subLokasi"
                    placeholder="Contoh: Muka Kuning • On-Site"
                    value={formData.subLokasi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Deskripsi Pekerjaan Baru (Digabung Kualifikasi, IPK, Gaji) */}
                <div className="md:col-span-2">
                  <label className="block font-bold text-slate-700 mb-1">Deskripsi &amp; Kualifikasi Pekerjaan <span className="text-red-500">*</span></label>
                  <textarea
                    name="deskripsi"
                    required
                    rows="7"
                    placeholder="Contoh:&#10;Tanggung Jawab:&#10;• Mengembangkan antarmuka web...&#10;&#10;Kualifikasi & Persyaratan:&#10;• Minimal IPK 3.00...&#10;• Kisaran Gaji: Rp 5 Jt..."
                    value={formData.deskripsi}
                    onChange={handleFormChange}
                    className="w-full px-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none leading-relaxed"
                  />
                </div>

                {/* Status Publikasi (Hanya Aktif & Ditutup) */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Status Lowongan <span className="text-red-500">*</span></label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Ditutup">Ditutup</option>
                  </select>
                </div>

                {/* Link Portal Eksternal */}
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Link Portal Eksternal</label>
                  <input
                    type="text"
                    name="link"
                    placeholder="https://careers.perusahaan.com"
                    value={formData.link}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

              </div>

              {/* Action Buttons */}
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

      {/* ==================== 2. MODAL DETAIL LOWONGAN ==================== */}
      {isDetailOpen && selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center space-x-3">
                <img 
                  src={selectedItem.img} 
                  alt={selectedItem.perusahaan} 
                  className="w-12 h-12 rounded-xl object-cover border border-slate-100 bg-white" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150'; }}
                />
                <div>
                  <h3 className="text-base font-black text-slate-900">{selectedItem.judul}</h3>
                  <p className="text-xs font-semibold text-slate-500">{selectedItem.perusahaan}</p>
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

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-500">Status Pendaftaran</span>
                {getStatusBadge(selectedItem.status)}
              </div>

              {/* Paragraf Deskripsi & Persyaratan Lengkap */}
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5"><AlignLeft className="w-4 h-4 text-blue-600"/> Deskripsi &amp; Persyaratan</h4>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{selectedItem.deskripsi || '-'}</p>
                </div>
              </div>

              {/* Detail Info Baris */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Lokasi Penempatan</p>
                    <p className="text-slate-600">{selectedItem.lokasi || 'Tidak diatur'} {selectedItem.subLokasi && `(${selectedItem.subLokasi})`}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Link Karir / Portal Eksternal</p>
                    {selectedItem.link && selectedItem.link !== '#' ? (
                      <a 
                        href={selectedItem.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-blue-600 font-semibold hover:underline flex items-center space-x-1 mt-0.5"
                      >
                        <span className="break-all">{selectedItem.link}</span>
                        <ExternalLink className="w-3 h-3 flex-shrink-0" />
                      </a>
                    ) : (
                      <p className="text-slate-400 italic mt-0.5">Pendaftaran telah ditutup</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <button
                type="button"
                onClick={() => {
                  setIsDetailOpen(false);
                  handleOpenEditModal(selectedItem);
                }}
                className="px-4 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 transition-colors"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit Lowongan</span>
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

      {/* ==================== 3. MODAL HAPUS CONFIRMATION ==================== */}
      {isDeleteOpen && selectedItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl w-full max-w-md p-6 text-center animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            
            <h3 className="text-base font-black text-slate-900 mb-1">Hapus Lowongan ini?</h3>
            <p className="text-xs text-slate-500 mb-6">
              Apakah Anda yakin ingin menghapus lowongan <strong className="text-slate-800">{selectedItem.judul}</strong> dari <strong className="text-slate-800">{selectedItem.perusahaan}</strong>? Data yang dihapus tidak dapat dikembalikan.
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