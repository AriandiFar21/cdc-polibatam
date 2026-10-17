import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { dummyLowongan } from '../../data/jobsData';

export default function JobDetailPage() {
    const { id } = useParams();
    const job = dummyLowongan.find((item) => item.id === parseInt(id));

    if (!job) {
        return (
            <div className="min-h-screen pt-40 pb-20 text-center font-sans">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Lowongan Tidak Ditemukan</h2>
                <p className="text-gray-600 mb-8">Maaf, informasi lowongan yang Anda cari tidak tersedia atau sudah kedaluwarsa.</p>
                <Link to="/lowongan" className="bg-blue-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-800 transition-colors">
                    ← Kembali ke Daftar Lowongan
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">

                {/* Back Button */}
                <div className="mb-8">
                    <Link to="/lowongan" className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:underline">
                        <span>←</span> Kembali ke Daftar Lowongan
                    </Link>
                </div>

                {/* Main Card Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm mb-8"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-5">
                            <div className="w-20 h-20 bg-blue-50 text-blue-900 rounded-3xl flex items-center justify-center font-extrabold text-2xl border border-blue-100 shrink-0 shadow-inner">
                                {job.logo}
                            </div>
                            <div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${job.tipe === 'Full-Time' ? 'bg-green-100 text-green-700' :
                                    job.tipe === 'Internship' ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-700'
                                    }`}>
                                    {job.tipe} • {job.kategori}
                                </span>
                                <h1 className="text-3xl lg:text-4xl font-extrabold text-blue-950">{job.posisi}</h1>
                                <p className="text-blue-900 font-semibold text-lg mt-1">{job.perusahaan}</p>
                            </div>
                        </div>

                        {/* Tombol Aksi Eksternal */}
                        <div className="shrink-0">
                            <a
                                href={job.linkEksternal}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full md:w-auto bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg text-center flex items-center justify-center gap-3 group"
                            >
                                <span>Daftar Sekarang (Eksternal)</span>
                                <span className="group-hover:translate-x-1 transition-transform">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Meta Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm text-gray-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-900 font-bold border border-gray-200">📍</div>
                            <div>
                                <p className="text-xs text-gray-400">Lokasi Penempatan</p>
                                <p className="font-bold text-gray-800">{job.lokasi}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-900 font-bold border border-gray-200">⏳</div>
                            <div>
                                <p className="text-xs text-gray-400">Batas Akhir Pendaftaran</p>
                                <p className="font-bold text-red-600">{job.batas}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-blue-900 font-bold border border-gray-200">🏛️</div>
                            <div>
                                <p className="text-xs text-gray-400">Status Kemitraan</p>
                                <p className="font-bold text-green-700">Mitra Resmi Polibatam</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Deskripsi & Kualifikasi */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Tentang Perusahaan */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">//</span> Tentang Perusahaan
                            </h2>
                            <p className="text-gray-600 leading-relaxed">{job.deskripsiPerusahaan}</p>
                        </div>

                        {/* Deskripsi Pekerjaan */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">//</span> Deskripsi Pekerjaan & Tanggung Jawab
                            </h2>
                            <ul className="space-y-3">
                                {job.deskripsiPekerjaan.map((desc, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-blue-900 mt-2 shrink-0"></span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kualifikasi */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                            <h2 className="text-xl font-bold text-blue-950 mb-4 flex items-center gap-2">
                                <span className="text-yellow-500">//</span> Kualifikasi Kandidat
                            </h2>
                            <ul className="space-y-3">
                                {job.kualifikasi.map((qual, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                                        <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                                        <span>{qual}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Right Column: Benefit & Info Tambahan */}
                    <div className="space-y-8">

                        <div className="bg-blue-950 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 text-8xl font-black text-blue-900/40 select-none pointer-events-none">
                                CDC
                            </div>
                            <h2 className="text-lg font-bold mb-4 text-yellow-400 relative z-10">Benefit & Fasilitas</h2>
                            <ul className="space-y-3 relative z-10">
                                {job.benefit.map((ben, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-blue-100">
                                        <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                                        <span>{ben}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Peringatan / Info Portal */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-2">Informasi Pengajuan</h3>
                            <p className="text-xs text-gray-500 leading-relaxed mb-6">
                                Portal Career Development Center (CDC) Politeknik Negeri Batam tidak memungut biaya apapun dalam proses penyaluran kerja dan tidak menyediakan sistem lamaran internal. Seluruh proses pendaftaran dilakukan melalui tautan eksternal perusahaan mitra resmi.
                            </p>
                            <a
                                href={job.linkEksternal}
                                target="_blank"
                                rel="noreferrer"
                                className="block w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-4 rounded-2xl text-center text-sm transition-colors shadow-sm"
                            >
                                Kunjungi Tautan Pendaftaran ↗
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}