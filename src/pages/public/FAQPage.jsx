import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Konfigurasi Animasi
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Data Pertanyaan & Jawaban FAQ
const faqData = [
    {
        kategori: "Lowongan & Pendaftaran",
        tanya: "Apakah saya bisa langsung melamar pekerjaan melalui tombol di portal CDC Polibatam?",
        jawab: "Tidak. Sesuai dengan sistem dan kebijakan portal CDC Polibatam, platform ini berfungsi sebagai pusat informasi resmi (portal direktori). Tombol aksi pada tiap lowongan akan mengarahkan Anda langsung ke tautan pendaftaran eksternal (website resmi perusahaan mitra, platform rekrutmen, atau Google Form yang disediakan perusahaan)."
    },
    {
        kategori: "Lowongan & Pendaftaran",
        tanya: "Apakah lowongan yang dibagikan di CDC terbuka untuk umum atau khusus alumni Polibatam?",
        jawab: "Sebagian besar lowongan dan program magang yang dipublikasikan dikhususkan bagi mahasiswa aktif tingkat akhir dan alumni resmi Politeknik Negeri Batam yang telah bekerja sama secara strategis dengan kampus."
    },
    {
        kategori: "Magang (MyInternship)",
        tanya: "Bagaimana cara melihat data sebaran lokasi magang mahasiswa Polibatam?",
        jawab: "Anda dapat mengakses menu 'Pemetaan Magang' di navigasi atas. Halaman tersebut menyajikan dashboard visualisasi data sebaran mahasiswa magang aktif di berbagai wilayah (Batam, Jabodetabek, Bandung, hingga Internasional) beserta daftar perusahaan mitra penempatannya."
    },
    {
        kategori: "Tracer Study",
        tanya: "Mengapa pengisian Tracer Study bagi alumni itu penting?",
        jawab: "Tracer Study adalah instrumen penelusuran jejak alumni yang diwajibkan oleh kementerian untuk mengevaluasi relevansi kurikulum pendidikan tinggi Polibatam dengan kebutuhan dunia kerja nyata di industri."
    },
    {
        kategori: "Layanan & Umum",
        tanya: "Apakah seluruh layanan bimbingan dan informasi di CDC Polibatam dipungut biaya?",
        jawab: "Tidak sama sekali. Seluruh layanan informasi karier, akses lowongan, sosialisasi, hingga pameran bursa kerja (Job Fair) yang diselenggarakan oleh CDC Polibatam bersifat GRATIS bagi seluruh mahasiswa aktif dan alumni."
    },
    {
        kategori: "Layanan & Umum",
        tanya: "Bagaimana perusahaan mitra dapat mempublikasikan lowongan kerja di portal CDC?",
        jawab: "Perusahaan mitra dapat berkoordinasi langsung dengan tim pengelola Career Development Center Politeknik Negeri Batam melalui email resmi cdc@polibatam.ac.id atau menghubungi kontak layanan kampus yang tertera pada bagian bawah halaman."
    }
];

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("Semua");

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Filter kategori
    const filteredFaq = faqData.filter(item => {
        if (selectedCategory === "Semua") return true;
        return item.kategori === selectedCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-yellow-500 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Pusat Bantuan & Pertanyaan</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-4">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg">
                        Temukan jawaban lengkap seputar informasi lowongan kerja, prosedur magang MyInternship, dan layanan karier di Polibatam.
                    </motion.p>
                </motion.div>

                {/* Filter Kategori */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {["Semua", "Lowongan & Pendaftaran", "Magang (MyInternship)", "Tracer Study", "Layanan & Umum"].map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setSelectedCategory(cat); setActiveIndex(null); }}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${selectedCategory === cat
                                ? 'bg-blue-900 text-white shadow-md'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Accordion List */}
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="space-y-4"
                >
                    {filteredFaq.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm transition-all"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                                >
                                    <span className="font-bold text-gray-900 text-base lg:text-lg">
                                        {item.tanya}
                                    </span>
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-blue-900 text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                                        ↓
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 pt-2 text-gray-600 text-sm lg:text-base leading-relaxed border-t border-gray-100">
                                                <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-lg mb-3">
                                                    {item.kategori}
                                                </p>
                                                <p>{item.jawab}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bantuan Lain Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 bg-blue-950 text-white rounded-3xl p-8 lg:p-10 text-center shadow-lg relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold mb-2">Masih Punya Pertanyaan Lain?</h3>
                    <p className="text-blue-200 text-sm mb-6 max-w-lg mx-auto">
                        Jika pertanyaan Anda belum terjawab di atas, silakan hubungi tim pengelola Career Development Center melalui email resmi kampus.
                    </p>
                    <a
                        href="mailto:cdc@polibatam.ac.id"
                        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-6 rounded-2xl text-sm transition-colors shadow-md"
                    >
                        Hubungi Tim CDC Polibatam ↗
                    </a>
                </motion.div>

            </div>
        </div>
    );
}