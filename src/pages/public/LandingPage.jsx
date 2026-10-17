import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const mitraRow1 = ["PT McDermott Indonesia", "PT Pegatron Technology", "PT Panasonic Industrial", "Bank Indonesia", "PT Kinema Systrans", "PT Sat Nusapersada", "PT Telkom Indonesia", "PT Infineon Technologies"];
const mitraRow2 = ["Universiti Teknologi Malaysia", "Sekolah Tinggi Teknologi Pekanbaru", "Politeknik Aceh Selatan", "SMA Negeri 3 Dumai", "Ming Chi University of Technology", "Advance Pact SDN BHD", "Universitas Indonesia"];
const mitraRow3 = ["PT ESSA Consulting", "PT Sinergi Aitikom", "Gojek", "Kimchi Medika", "RSUD Petala Bumi", "Dinas Pemuda dan Olahraga", "Pemerintah Kota Batam", "BP Batam"];

const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
        title: "Pusat Pengembangan",
        highlight: "Karier & Alumni"
    },
    {
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
        title: "Jembatan Menuju",
        highlight: "Dunia Profesional"
    },
    {
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
        title: "Wujudkan Generasi",
        highlight: "Siap Berkarya"
    }
];

const IconTrophy = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M19 3v4M5 11h14M5 11c0 3.866 3.134 7 7 7s7-3.134 7-7M5 11a4 4 0 01-4-4V5a2 2 0 012-2h2M19 11a4 4 0 004-4V5a2 2 0 00-2-2h-2M12 18v3m-4 0h8" /></svg>;
const IconHandshake = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const IconGlobe = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconCheck = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconBook = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const IconUser = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
const IconBriefcase = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconStar = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
const IconClock = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconBuilding = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const IconCog = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const IconShield = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const IconDesktop = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
    const loopItems = [...items, ...items];
    return (
        <div className="flex overflow-hidden w-full mb-6">
            <motion.div
                className="flex whitespace-nowrap gap-8 w-max"
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: speed }}
            >
                {loopItems.map((mitra, idx) => (
                    <div key={idx} className="flex items-center bg-gray-100 rounded-full pr-10 pl-3 py-3 shadow-md border border-gray-200 shrink-0 hover:bg-gray-200 transition-colors cursor-default">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-gray-400 mr-4 border border-gray-300 overflow-hidden shrink-0">
                            <span className="text-xs">LOGO</span>
                        </div>
                        <span className="font-bold text-gray-700 text-lg">{mitra}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};


export default function LandingPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="font-sans overflow-hidden bg-gray-50">

            {/* 1. HERO SECTION (Carousel) */}
            <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24 text-white overflow-hidden">
                {heroSlides.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
                    </div>
                ))}

                <motion.div
                    key={currentSlide}
                    className="relative z-10 max-w-4xl"
                    initial="hidden" animate="visible" variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
                        <span className="text-yellow-400 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-200">CDC Politeknik Negeri Batam</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                        {heroSlides[currentSlide].title} <br />
                        <span className="text-yellow-400">{heroSlides[currentSlide].highlight}</span>
                    </motion.h1>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Link to="/lowongan" className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                            Cari Lowongan ↗
                        </Link>
                        <a href="https://tracerstudy.kemdikbud.go.id/" target="_blank" rel="noreferrer" className="border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-colors">
                            Tracer Study
                        </a>
                    </motion.div>
                </motion.div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-12 right-12 z-20 flex gap-3">
                    {heroSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-yellow-400 scale-125' : 'bg-white hover:bg-gray-300'}`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. FAKTA DAN STATISTIK */}
            <section className="py-24 px-6 lg:px-24 bg-white relative">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    className="max-w-7xl mx-auto relative z-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div variants={fadeInUp} className="relative flex justify-center lg:justify-start">
                            <div className="h-[400px] w-full max-w-md bg-gray-200 rounded-[2rem] overflow-hidden relative shadow-lg">
                                {/* Gambar di-fix */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop')" }}></div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-yellow-500 font-bold italic">//</span>
                                <span className="tracking-widest text-sm font-bold uppercase text-gray-500">FAKTA DAN STATISTIK</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="text-blue-900">Integritas</span> Ekosistem <br /> Polibatam
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Career Development Center (CDC) Polibatam merupakan platform terintegrasi dengan TalentHub dan MyInternship untuk menjembatani mahasiswa dan alumni ke dunia profesional secara efektif.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                        {[
                            { title: "Unggul", desc: "Akreditasi Institusi", icon: <IconTrophy />, type: "dark" },
                            { title: "50+", desc: "Mitra Kerjasama", icon: <IconHandshake />, type: "dark" },
                            { title: "15 Negara", desc: "Sebaran Alumni", icon: <IconGlobe />, type: "dark" },
                            { title: "100%", desc: "Lulusan Tersertifikasi", icon: <IconCheck />, type: "dark" },

                            { title: "15", desc: "Program Studi", icon: <IconBook />, type: "light" },
                            { title: "106", desc: "Dosen", icon: <IconUser />, type: "light" },
                            { title: "40%", desc: "Bekerja Sebelum Lulus", icon: <IconBriefcase />, type: "light" },
                            { title: "400+", desc: "Penerima Beasiswa", icon: <IconStar />, type: "light" },

                            { title: "3900+", desc: "Mahasiswa Aktif", icon: <IconUser />, type: "light" },
                            { title: "Satu", desc: "Guru Besar", icon: <IconTrophy />, type: "light" },
                            { title: "< 2 Bulan", desc: "Masa Tunggu Lulusan", icon: <IconClock />, type: "light" },
                            { title: "100%", desc: "Fasilitas Modern", icon: <IconBuilding />, type: "light" },

                            { title: "60%", desc: "Praktikum", icon: <IconCog />, type: "light" },
                            { title: "100%", desc: "Mahasiswa Diasuransikan", icon: <IconShield />, type: "light" },
                            { title: "6700+", desc: "Alumni", icon: <IconUser />, type: "light" },
                            { title: "100+", desc: "Lab Modern", icon: <IconDesktop />, type: "light" },
                        ].map((stat, idx) => (
                            stat.type === "dark" ? (
                                <div key={idx} className="flex items-center p-2.5 bg-blue-900 rounded-full shadow-md">
                                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mr-4 shrink-0 text-blue-900">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white">{stat.title}</h4>
                                        <p className="text-xs text-blue-200 font-medium">{stat.desc}</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={idx} className="flex items-center p-2.5 bg-transparent">
                                    <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mr-4 shrink-0 text-white shadow-sm">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{stat.title}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{stat.desc}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. AGENDA & INFORMASI CDC */}
            <section className="py-24 px-6 lg:px-24 bg-blue-900 text-white relative overflow-hidden">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="max-w-7xl mx-auto relative z-10"
                >
                    <div className="flex flex-col lg:flex-row gap-12 mb-16">
                        <motion.div variants={fadeInUp} className="lg:w-1/3 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-yellow-400 font-bold italic">//</span>
                                <span className="tracking-widest text-xs font-bold uppercase text-white">AGENDA KARIER</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Pusat Informasi &<br />Persiapan Karier
                            </h2>
                            <p className="text-blue-100 text-sm leading-relaxed mb-8">
                                Persiapkan dirimu menuju dunia kerja profesional. Dapatkan informasi terbaru seputar agenda Job Fair, Workshop pembuatan CV, hingga Campus Hiring langsung dari industri mitra.
                            </p>
                            <div>
                                <button className="bg-white text-blue-900 font-bold py-2.5 px-6 rounded-full hover:bg-gray-200 transition-colors text-sm flex items-center gap-2 shadow-lg">
                                    Lihat Agenda ↗
                                </button>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="lg:w-2/3">
                            <div className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
                                {/* Gambar Headline Agenda */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop')" }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                                        Polibatam Job Fair 2026: Sinergi Kampus dan Industri untuk Lulusan Unggul
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
                                        <span className="text-blue-200">1 Hari yang lalu</span>
                                        <div className="flex gap-2">
                                            <span className="bg-white text-blue-900 px-3 py-1 rounded-sm">Auditorium</span>
                                            <span className="bg-white text-blue-900 px-3 py-1 rounded-sm">Campus Hiring</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={fadeInUp} className="group cursor-pointer">
                            <h4 className="text-lg font-semibold mb-4 text-white">Workshop & Pelatihan</h4>
                            <div className="h-52 rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                                {/* Gambar Sub Berita 1 */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')" }}></div>
                            </div>
                            <h3 className="text-sm font-bold mb-2 leading-relaxed group-hover:text-yellow-400 transition-colors">
                                Membangun Resume ATS-Friendly dan Persiapan Interview HR Bersama Pakar Industri
                            </h3>
                            <p className="text-xs text-blue-200">2 Minggu yang lalu</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="group cursor-pointer">
                            <h4 className="text-lg font-semibold mb-4 text-white">Kegiatan Alumni</h4>
                            <div className="h-52 rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                                {/* Gambar Sub Berita 2 */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=2070&auto=format&fit=crop')" }}></div>
                            </div>
                            <h3 className="text-sm font-bold mb-2 leading-relaxed group-hover:text-yellow-400 transition-colors">
                                Talkshow Alumni: Berbagi Pengalaman Karier di Perusahaan Multinasional Batam
                            </h3>
                            <p className="text-xs text-blue-200">1 Bulan yang lalu</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="group cursor-pointer">
                            <h4 className="text-lg font-semibold mb-4 text-white">Pengumuman Rekrutmen</h4>
                            <div className="h-52 rounded-2xl overflow-hidden mb-4 relative shadow-lg">
                                {/* Gambar Sub Berita 3 */}
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')" }}></div>
                            </div>
                            <h3 className="text-sm font-bold mb-2 leading-relaxed group-hover:text-yellow-400 transition-colors">
                                Pembukaan Program Magang Bersertifikat MyInternship Batch 2 Tahun 2026
                            </h3>
                            <p className="text-xs text-blue-200">2 Bulan yang lalu</p>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* 4. MITRA INDUSTRI (Animasi Marquee Slide) */}
            <section className="py-24 bg-white overflow-hidden">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    className="text-center mb-16 px-6 lg:px-24"
                >
                    <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-yellow-500 font-bold italic">//</span>
                        <span className="tracking-widest text-sm font-bold uppercase text-gray-500">Kerja Sama</span>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-900">
                        <span className="text-blue-900">Sinergi Kuat, Jaringan Luas</span> <br />
                        Mitra Industri Polibatam
                    </motion.h2>
                </motion.div>

                <div className="flex flex-col relative w-full">
                    <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                    <MarqueeRow items={mitraRow1} direction="left" speed={45} />
                    <MarqueeRow items={mitraRow2} direction="left" speed={35} />
                    <MarqueeRow items={mitraRow3} direction="left" speed={50} />
                </div>
            </section>

        </div>
    );
}