import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

// Data Dummy Sebaran Wilayah & Perusahaan Magang MyInternship
const dataSebaran = [
    {
        wilayah: "Kota Batam (Lokal)",
        jumlahMahasiswa: "450+ Mahasiswa",
        perusahaanUtama: ["PT McDermott Indonesia", "PT Panasonic Industrial", "PT Kinema Systrans", "PT Pegatron Technology"],
        deskripsi: "Pusat konsentrasi magang terbesar di bidang manufaktur, perkapalan, dan teknologi digital.",
        badgeColor: "bg-blue-100 text-blue-800"
    },
    {
        wilayah: "Jabodetabek",
        jumlahMahasiswa: "120+ Mahasiswa",
        perusahaanUtama: ["Bank Indonesia", "Gojek (PT Aplikasi Karya Anak Bangsa)", "Telkom Indonesia", "Tokopedia"],
        deskripsi: "Fokus pada sektor finansial, e-commerce, teknologi skala nasional, dan lembaga negara.",
        badgeColor: "bg-green-100 text-green-800"
    },
    {
        wilayah: "Bandung & Sekitarnya",
        jumlahMahasiswa: "65+ Mahasiswa",
        perusahaanUtama: ["PT Len Industri", "PT Dirgantara Indonesia", "Startup Riset Teknologi Lokal"],
        deskripsi: "Pengembangan riset rekayasa perangkat lunak, sistem telekomunikasi, dan dirgantara.",
        badgeColor: "bg-purple-100 text-purple-700"
    },
    {
        wilayah: "Internasional (Singapura & Malaysia)",
        jumlahMahasiswa: "25+ Mahasiswa",
        perusahaanUtama: ["Infineon Technologies Asia Pacific", "Universiti Teknologi Malaysia Partner Labs"],
        deskripsi: "Program magang global dan kolaborasi riset teknologi lintas negara.",
        badgeColor: "bg-yellow-100 text-yellow-800"
    }
];

export default function PemetaanPage() {
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
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Integrasi MyInternship</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4">
                        Dashboard Pemetaan <span className="text-blue-600">Lokasi Magang</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                        Visualisasi data sebaran mahasiswa aktif Politeknik Negeri Batam yang sedang melaksanakan program magang di berbagai mitra industri strategis.
                    </motion.p>
                </motion.div>

                {/* Statistik Ringkas MyInternship */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    <motion.div variants={fadeInUp} className="bg-blue-900 text-white p-8 rounded-3xl shadow-lg">
                        <p className="text-blue-200 text-sm font-medium mb-1">Total Mahasiswa Magang Aktif</p>
                        <h3 className="text-4xl font-extrabold text-yellow-400">660+</h3>
                        <p className="text-xs text-blue-300 mt-2">Tersebar di seluruh penjuru nusantara & global</p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
                        <p className="text-gray-500 text-sm font-medium mb-1">Total Mitra Industri Terdaftar</p>
                        <h3 className="text-4xl font-extrabold text-blue-950">50+</h3>
                        <p className="text-xs text-gray-400 mt-2">Perusahaan multinasional & BUMN</p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
                        <p className="text-gray-500 text-sm font-medium mb-1">Cakupan Wilayah Penempatan</p>
                        <h3 className="text-4xl font-extrabold text-blue-950">15+ Kota</h3>
                        <p className="text-xs text-gray-400 mt-2">Termasuk mitra institusi luar negeri</p>
                    </motion.div>
                </motion.div>

                {/* Grid Wilayah Sebaran */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {dataSebaran.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">{item.wilayah}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor}`}>
                                        {item.jumlahMahasiswa}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {item.deskripsi}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Mitra Penempatan Utama:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.perusahaanUtama.map((mitra, mIdx) => (
                                            <span key={mIdx} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-gray-200">
                                                {mitra}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100 text-right">
                                <span className="text-xs text-blue-900 font-bold hover:underline cursor-pointer">
                                    Lihat Detail Sebaran →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}