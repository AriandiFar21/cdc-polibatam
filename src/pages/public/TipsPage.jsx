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

// Data Dummy Artikel Tips & Tricks Karier
const dummyTips = [
    {
        id: 1,
        judul: "Panduan Lengkap Menyusun CV Berstandar ATS untuk Fresh Graduate",
        kategori: "CV & Resume",
        waktuBaca: "4 menit baca",
        tanggal: "15 Oktober 2026",
        penulis: "Tim Karir Polibatam",
        ringkasan: "Kenali apa itu Applicant Tracking System (ATS), format layout yang direkomendasikan, serta pemilihan kata kunci agar CV kamu lolos seleksi otomatis HRD.",
        badgeColor: "bg-blue-100 text-blue-800"
    },
    {
        id: 2,
        judul: "Tips Menghadapi Wawancara Kerja (HRD & User) Tanpa Rasa Gugup",
        kategori: "Interview",
        waktuBaca: "6 menit baca",
        tanggal: "18 Oktober 2026",
        penulis: "Konselor Karir CDC",
        ringkasan: "Kumpulan trik psikologis dan teknik 'STAR' (Situation, Task, Action, Result) untuk menjawab pertanyaan sulit saat interview kerja di perusahaan multinasional.",
        badgeColor: "bg-green-100 text-green-700"
    },
    {
        id: 3,
        judul: "Strategi Menembus Lowongan Kerja di Kawasan Industri Batam",
        kategori: "Dunia Kerja",
        waktuBaca: "5 menit baca",
        tanggal: "20 Oktober 2026",
        penulis: "Alumni Polibatam",
        ringkasan: "Tips khusus bagi lulusan Polibatam dalam membaca peluang kerja di sektor manufaktur, perkapalan, dan EPC di Batu Ampar, Kabil, hingga Muka Kuning.",
        badgeColor: "bg-yellow-100 text-yellow-800"
    },
    {
        id: 4,
        judul: "Pentingnya Portofolio Proyek Kuliah (PBL) untuk Dilampirkan di LinkedIn",
        kategori: "Personal Branding",
        waktuBaca: "4 menit baca",
        tanggal: "22 Oktober 2026",
        penulis: "Praktisi IT",
        ringkasan: "Bagaimana cara mendokumentasikan hasil Project-Based Learning (PBL) Polibatam agar menarik perhatian recruiter profesional di platform professional networking.",
        badgeColor: "bg-purple-100 text-purple-700"
    },
    {
        id: 5,
        judul: "Etika Berkomunikasi Melalui Email Profesional kepada HRD",
        kategori: "Soft Skills",
        waktuBaca: "3 menit baca",
        tanggal: "25 Oktober 2026",
        penulis: "Tim Hubungan Industri",
        ringkasan: "Jangan asal kirim! Pelajari cara menulis subjek email lamaran kerja yang baik, penggunaan bahasa formal, dan lampiran file yang benar.",
        badgeColor: "bg-indigo-100 text-indigo-700"
    },
    {
        id: 6,
        judul: "Persiapan Mental & Skill Sebelum Memulai Program Magang MyInternship",
        kategori: "Magang",
        waktuBaca: "5 menit baca",
        tanggal: "28 Oktober 2026",
        penulis: "Koordinator Magang",
        ringkasan: "Tips adaptasi cepat di lingkungan kerja profesional bagi mahasiswa yang akan diterjunkan langsung ke industri mitra Polibatam.",
        badgeColor: "bg-pink-100 text-pink-700"
    }
];

export default function TipsPage() {
    const [selectedCategory, setSelectedCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter kategori & pencarian
    const filteredTips = dummyTips.filter((item) => {
        const matchesCategory = selectedCategory === "Semua" || item.kategori === selectedCategory;
        const matchesSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());
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
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Panduan & Edukasi Karier</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4">
                        Tips & Artikel <span className="text-blue-600">Karier</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                        Kumpulan panduan praktis, trik lolos interview, tips CV ATS-friendly, dan artikel persiapan kerja khusus untuk mahasiswa dan alumni Polibatam.
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
                            placeholder="Cari artikel atau tips..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm text-gray-800"
                        />
                    </div>

                    {/* Kategori Filter */}
                    <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {["Semua", "CV & Resume", "Interview", "Dunia Kerja", "Personal Branding", "Soft Skills", "Magang"].map((cat, idx) => (
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

                {/* Tips Grid */}
                {filteredTips.length > 0 ? (
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredTips.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={fadeInUp}
                                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Meta */}
                                    <div className="flex justify-between items-center mb-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                                            {item.kategori}
                                        </span>
                                        <span className="text-xs text-gray-400 font-medium">
                                            {item.waktuBaca}
                                        </span>
                                    </div>

                                    {/* Title & Excerpt */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">{item.judul}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{item.ringkasan}</p>
                                </div>

                                <div>
                                    {/* Author & Date */}
                                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <span>✍️ {item.penulis}</span>
                                        <span>📅 {item.tanggal}</span>
                                    </div>

                                    {/* Action Button */}
                                    <button
                                        onClick={() => alert(`Membuka artikel: "${item.judul}". Fitur baca artikel lengkap akan segera aktif!`)}
                                        className="w-full bg-blue-50 hover:bg-blue-900 text-blue-900 hover:text-white font-bold py-3 px-4 rounded-2xl transition-colors text-sm flex items-center justify-center gap-2 border border-blue-100"
                                    >
                                        <span>Baca Selengkapnya</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
                        <p className="text-gray-500 font-medium text-lg">Artikel tips karier yang kamu cari tidak ditemukan.</p>
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