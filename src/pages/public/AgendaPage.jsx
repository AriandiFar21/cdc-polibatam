import { useState } from 'react';
import { motion } from 'framer-motion';

// Konfigurasi Animasi
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Data Dummy Agenda & Informasi Karier
const dummyAgenda = [
    {
        id: 1,
        judul: "Polibatam Career Expo & Job Fair 2026",
        kategori: "Job Fair",
        tanggal: "28 - 29 Oktober 2026",
        waktu: "08:00 - 16:00 WIB",
        lokasi: "Auditorium Lantai 8 Gedung Utama Polibatam",
        deskripsi: "Pameran bursa kerja terbesar yang menghadirkan lebih dari 30 perusahaan multinasional dan nasional di kawasan Batam. Terbuka untuk mahasiswa tingkat akhir dan alumni.",
        status: "Segera Hadir",
        badgeColor: "bg-green-100 text-green-700"
    },
    {
        id: 2,
        judul: "Company Info Session: PT McDermott Indonesia",
        kategori: "Info Session",
        tanggal: "04 November 2026",
        waktu: "13:30 - 15:30 WIB",
        lokasi: "Teatrikal Gedung Teaching Factory Polibatam",
        deskripsi: "Sesi sosialisasi langsung mengenai profil perusahaan, standar rekrutmen teknik EPC, dan jalur karier profesional bagi lulusan teknik.",
        status: "Pendaftaran Dibuka",
        badgeColor: "bg-blue-100 text-blue-800"
    },
    {
        id: 3,
        judul: "Workshop: Mastering Professional CV & Interview Prep",
        kategori: "Workshop",
        tanggal: "12 November 2026",
        waktu: "09:00 - 12:00 WIB",
        lokasi: "Lab Komputer Terpadu & Live Zoom",
        deskripsi: "Pelatihan intensif cara merancang CV berstandar ATS (Applicant Tracking System) dan simulasi wawancara kerja langsung bersama HRD industri.",
        status: "Pendaftaran Dibuka",
        badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
        id: 4,
        judul: "Pelatihan Sertifikasi BNSP Junior Web Developer",
        kategori: "Pelatihan",
        tanggal: "20 - 21 November 2026",
        waktu: "08:30 - 16:00 WIB",
        lokasi: "Lab RPL Polibatam",
        deskripsi: "Program sertifikasi kompetensi resmi berlisensi BNSP untuk mahasiswa bidang Teknologi Informasi dan Rekayasa Perangkat Lunak.",
        status: "Kuota Terbatas",
        badgeColor: "bg-purple-100 text-purple-700"
    },
    {
        id: 5,
        judul: "Sosialisasi Pengisian Tracer Study Alumni 2026",
        kategori: "Informasi",
        tanggal: "01 Desember 2026",
        waktu: "Online via Portal CDC",
        lokasi: "Daring (Online Meeting)",
        deskripsi: "Pengarahan penting bagi seluruh calon wisudawan dan alumni terkait pengisian data penulusuran alumni (Tracer Study) kemendikbud.",
        status: "Akan Datang",
        badgeColor: "bg-gray-100 text-gray-700"
    }
];

export default function AgendaPage() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter kategori & pencarian
    const filteredAgenda = dummyAgenda.filter((item) => {
        const matchesCategory = selectedCategory === "Semua" || item.kategori === selectedCategory;
        const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.lokasi.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-yellow-500 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Pusat Informasi & Kegiatan</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4">
                        Agenda & Acara <span className="text-blue-600">Karier</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                        Jangan lewatkan berbagai kegiatan job fair, info session perusahaan mitra, workshop pengembangan skill, dan pengumuman penting lainnya.
                    </motion.p>
                </motion.div>

                {/* Filter & Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between"
                >
                    {/* Input Search */}
                    <div className="relative w-full md:w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Cari agenda atau lokasi..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm text-gray-800"
                        />
                    </div>

                    {/* Kategori Filter */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {["Semua", "Job Fair", "Info Session", "Workshop", "Pelatihan", "Informasi"].map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Agenda List Grid */}
                {filteredAgenda.length > 0 ? (
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {filteredAgenda.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={fadeInUp}
                                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Meta */}
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${item.badgeColor}`}>
                                            {item.kategori}
                                        </span>
                                        <span className="text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
                                            {item.status}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{item.judul}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.deskripsi}</p>

                                    {/* Date, Time & Location Details */}
                                    <div className="space-y-2.5 text-xs text-gray-600 bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                                        <p className="flex items-center gap-3">
                                            <span className="text-blue-900 font-bold">📅 Tanggal:</span>
                                            <strong className="text-gray-800">{item.tanggal}</strong>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <span className="text-blue-900 font-bold">⏰ Waktu:</span>
                                            <span className="text-gray-800">{item.waktu}</span>
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <span className="text-blue-900 font-bold">📍 Lokasi:</span>
                                            <span className="text-gray-800">{item.lokasi}</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div>
                                    <button
                                        onClick={() => alert(`Fitur pendaftaran/detail untuk agenda "${item.judul}" akan segera dibuka!`)}
                                        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-2xl transition-colors text-sm flex items-center justify-center gap-2 shadow-md"
                                    >
                                        <span>Daftar / Lihat Detail Agenda</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
                        <p className="text-gray-500 font-medium text-lg">Agenda atau informasi yang kamu cari tidak ditemukan.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedCategory("Semua"); }}
                            className="mt-4 text-blue-900 font-bold hover:underline"
                        >
                            Reset Filter Pencarian
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}