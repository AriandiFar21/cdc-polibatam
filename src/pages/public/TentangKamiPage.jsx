import { motion } from 'framer-motion';

// Konfigurasi Animasi
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function TentangKamiPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header Section */}
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-yellow-500 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Profil Institusi</span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl font-extrabold text-blue-950 mb-6">
                        Tentang Career Development Center <span className="text-blue-600">Polibatam</span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed">
                        Pusat pengembangan karier resmi Politeknik Negeri Batam yang berdedikasi menjembatani mahasiswa dan alumni menuju dunia kerja profesional berskala nasional maupun global.
                    </motion.p>
                </motion.div>

                {/* Visi & Misi Grid */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
                >
                    {/* Visi Card */}
                    <motion.div variants={fadeInUp} className="bg-blue-950 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute -right-10 -bottom-10 text-9xl font-black text-blue-900/30 select-none pointer-events-none">
                            VISI
                        </div>
                        <div className="relative z-10">
                            <span className="text-yellow-400 font-bold italic">// 01</span>
                            <h3 className="text-2xl lg:text-3xl font-extrabold mt-2 mb-4">Visi Utama</h3>
                            <p className="text-blue-100 leading-relaxed text-base lg:text-lg">
                                Menjadi pusat layanan karier dan penempatan kerja terkemuka yang menghasilkan lulusan Politeknik Negeri Batam yang kompeten, adaptif, berdaya saing global, dan berkarakter industri.
                            </p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-blue-900 relative z-10 text-xs text-blue-300">
                            Politeknik Negeri Batam — Excellence in Technology
                        </div>
                    </motion.div>

                    {/* Misi Card */}
                    <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm flex flex-col justify-between">
                        <div>
                            <span className="text-blue-900 font-bold italic">// 02</span>
                            <h3 className="text-2xl lg:text-3xl font-extrabold text-blue-950 mt-2 mb-4">Misi Strategis</h3>
                            <ul className="space-y-4 text-gray-600 text-sm lg:text-base">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                                    <span>Memperluas jejaring kemitraan strategis dengan industri manufaktur, teknologi, dan jasa berskala nasional maupun multinasional.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                                    <span>Menyediakan informasi lowongan kerja, magang (MyInternship), dan tracer study yang akurat serta transparan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                                    <span>Menyelenggarakan bimbingan karier, pelatihan kesiapan kerja, dan konsultasi profesional bagi mahasiswa.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Nilai-Nilai Utama (Core Values) */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
                    className="mb-20"
                >
                    <div className="text-center max-w-xl mx-auto mb-12">
                        <span className="text-yellow-500 font-bold italic">// PRINSIP KERJA</span>
                        <h2 className="text-3xl font-extrabold text-blue-950 mt-1">Nilai-Nilai Utama Kami</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Integritas & Profesional", desc: "Menjunjung tinggi standar etika profesional dalam pelayanan penempatan karier dan hubungan industri." },
                            { title: "Inovasi Berkelanjutan", desc: "Mengembangkan platform digital berbasis teknologi modern untuk memudahkan akses informasi mahasiswa." },
                            { title: "Kolaborasi Global", desc: "Membangun sinergi kuat bersama ekosistem industri di kawasan Batam, nasional, dan internasional." }
                        ].map((item, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center font-extrabold text-lg mb-6 border border-blue-100">
                                    0{idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-blue-950 mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action Section */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                    className="bg-blue-900 text-white rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden shadow-xl"
                >
                    <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-800 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Siap Memulai Perjalanan Kariermu?</h2>
                        <p className="text-blue-200 text-base mb-8">
                            Jelajahi ratusan lowongan pekerjaan terbaru dari mitra industri resmi Politeknik Negeri Batam sekarang juga.
                        </p>
                        <a
                            href="/lowongan"
                            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-4 px-8 rounded-2xl transition-all shadow-lg"
                        >
                            Jelajahi Lowongan Kerja →
                        </a>
                    </div>  
                </motion.div>

            </div>
        </div>
    );
}