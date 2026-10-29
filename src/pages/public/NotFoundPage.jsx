import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans relative overflow-hidden">

            {/* Dekorasi Background Latar Blur (Biar Estetik) */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

            <div className="relative z-10 text-center max-w-lg">

                {/* Angka 404 dengan Animasi Mengambang (Floating) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.5 }}
                >
                    <motion.h1
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="text-9xl md:text-[10rem] font-extrabold text-blue-950 mb-2 tracking-tighter drop-shadow-sm"
                    >
                        4<span className="text-yellow-500">0</span>4
                    </motion.h1>
                </motion.div>

                {/* Pesan Error (Diubah menjadi formal) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                        Mohon maaf, halaman yang Anda tuju mungkin telah dipindahkan, dihapus, atau tidak tersedia di portal Career Development Center (CDC) Politeknik Negeri Batam.
                    </p>
                </motion.div>

                {/* Tombol Aksi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        to="/"
                        className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        <span>←</span> Kembali ke Beranda
                    </Link>
                    <Link
                        to="/lowongan"
                        className="bg-white border-2 border-blue-950 text-blue-950 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-sm transition-all hover:-translate-y-1 flex items-center justify-center"
                    >
                        Cari Lowongan
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}