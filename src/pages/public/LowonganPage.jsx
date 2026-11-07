import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { dummyLowongan } from '../../data/jobsData';

// Konfigurasi Animasi
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function LowonganPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    // State untuk Fitur (Loading, Network Error, & Input Error)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [searchError, setSearchError] = useState("");

    // Fungsi Handler Input Pencarian + Validasi Otomatis (Merah saat ada simbol)
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Validasi: jika mengandung simbol khusus
        const invalidPattern = /[@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
        if (invalidPattern.test(value)) {
            setSearchError("Format pencarian tidak valid (tidak boleh pakai simbol)");
        } else {
            setSearchError("");
        }
    };

    // Fungsi simulasi muat ulang data (Retry Action)
    const handleRetry = () => {
        setIsError(false);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1200);
    };

    const filteredJobs = dummyLowongan.filter((job) => {
        const matchesSearch = job.posisi.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.perusahaan.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Semua" || job.kategori === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-yellow-500 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Portal Karier Resmi</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4">
                        Lowongan Pekerjaan <span className="text-blue-600">Terbaru</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                        Temukan peluang karier terbaik dari ratusan perusahaan mitra industri Politeknik Negeri Batam. Klik "Lihat Detail" untuk informasi lengkap.
                    </motion.p>
                </motion.div>

                {/* Search Bar & Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between"
                >
                    {/* Search Input Container dengan State Merah/Error */}
                    <div className="relative w-full md:w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Cari posisi atau perusahaan..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className={`w-full pl-12 pr-10 py-3 rounded-2xl focus:outline-none text-sm transition-all ${searchError
                                ? 'bg-red-50 border-2 border-red-500 text-red-900 placeholder-red-300 focus:ring-2 focus:ring-red-400'
                                : 'bg-gray-50 border border-gray-200 text-gray-800 focus:ring-2 focus:ring-blue-900'
                                }`}
                        />

                        {/* Ikon Peringatan saat Error Input */}
                        {searchError && (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </span>
                        )}

                        {/* Pesan Teks Error Merah di Bawah Input */}
                        {searchError && (
                            <p className="text-red-500 text-xs mt-1.5 ml-2 font-semibold flex items-center gap-1">
                                <span>{searchError}</span>
                            </p>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {["Semua", "IT & Software", "Engineering", "Administration", "Creative", "Manufacturing"].map((cat, idx) => (
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

                {/* CONDITIONAL RENDERING: LOADING, ERROR, EMPTY, ATAU GRID DATA */}
                {isLoading ? (
                    /* 1. LOADING STATE (Skeleton List + Spinner Biru) */
                    <div className="space-y-8">
                        <div className="flex justify-center my-4">
                            <div className="w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <div key={n} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm animate-pulse flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-14 h-14 bg-gray-200 rounded-2xl"></div>
                                            <div className="w-20 h-6 bg-gray-200 rounded-full"></div>
                                        </div>
                                        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
                                        <div className="h-4 bg-gray-200 rounded-md w-1/2 mb-6"></div>
                                        <div className="space-y-3 mb-6">
                                            <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
                                            <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="h-12 bg-gray-200 rounded-2xl w-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : isError ? (
                    /* 2. ERROR STATE (Teks Kesalahan Jaringan + Tombol Muat Ulang) */
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 max-w-xl mx-auto shadow-sm">
                        <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Terjadi kesalahan jaringan.</h3>
                        <p className="text-gray-500 font-medium mb-6">Coba lagi nanti.</p>
                        <button
                            onClick={handleRetry}
                            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-2xl transition-colors text-sm shadow-md"
                        >
                            Muat Ulang
                        </button>
                    </div>
                ) : filteredJobs.length > 0 ? (
                    /* 3. NORMAL STATE (Grid Kartu Lowongan) */
                    <motion.div
                        initial="hidden" animate="visible" variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                variants={fadeInUp}
                                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center font-extrabold text-lg border border-blue-100">
                                            {job.logo}
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${job.tipe === 'Full-Time' ? 'bg-green-100 text-green-700' :
                                            job.tipe === 'Internship' ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-700'
                                            }`}>
                                            {job.tipe}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">{job.posisi}</h3>
                                    <p className="text-blue-900 font-semibold text-sm mb-4">{job.perusahaan}</p>

                                    <div className="space-y-2 text-xs text-gray-500 mb-6">
                                        <p className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            <span>{job.lokasi}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                            <span>Batas: <strong className="text-gray-700">{job.batas}</strong></span>
                                        </p>
                                    </div>
                                </div>

                                {/* Tombol ke Halaman Detail */}
                                <div className="pt-6 border-t border-gray-100">
                                    <Link
                                        to={`/lowongan/${job.id}`}
                                        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-2xl transition-colors text-sm flex items-center justify-center gap-2 shadow-md group"
                                    >
                                        <span>Lihat Detail Lowongan</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    /* 4. EMPTY STATE */
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 max-w-xl mx-auto shadow-sm">
                        <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Belum ada lowongan yang cocok dengan filter Anda.</h3>
                        <p className="text-gray-500 font-medium text-sm mb-6">Coba cari dengan kata kunci lain atau ubah kategori pilihan Anda.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedCategory("Semua"); setSearchError(""); }}
                            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-2xl transition-colors text-sm shadow-md"
                        >
                            Reset Filter Pencarian
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}