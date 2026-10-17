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

    const filteredJobs = dummyLowongan.filter((job) => {
        const matchesSearch = job.posisi.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.perusahaan.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Semua" || job.kategori === selectedCategory;
        return matchesSearch && matchesCategory;
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
                    <div className="relative w-full md:w-96">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Cari posisi atau perusahaan..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-900 text-sm text-gray-800"
                        />
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

                {/* Job Cards Grid */}
                {filteredJobs.length > 0 ? (
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
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-200">
                        <p className="text-gray-500 font-medium text-lg">Lowongan yang kamu cari tidak ditemukan.</p>
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