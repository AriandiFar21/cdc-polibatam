import { Link } from 'react-router-dom';

// SVG Icons Polos untuk Footer
const IconInstagram = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const IconLinkedIn = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const IconYoutube = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
const IconMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;

export default function Footer() {
    return (
        <footer className="relative bg-blue-950 text-blue-100 pt-20 pb-6 overflow-hidden border-t-8 border-yellow-400">

            {/* Efek Watermark Background */}
            <div className="absolute -bottom-10 -right-10 text-[250px] font-extrabold text-blue-900/30 pointer-events-none select-none z-0 leading-none">
                CDC
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Kolom Kiri: Branding & Info Kontak */}
                    <div className="lg:col-span-5">
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                            Karier Gemilang untuk <br />
                            <span className="text-yellow-400 relative inline-block">
                                Masa Depan Global
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
                            </span>
                        </h2>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-8 mb-8">
                            {[
                                { icon: <IconInstagram />, link: "#" },
                                { icon: <IconLinkedIn />, link: "#" },
                                { icon: <IconYoutube />, link: "#" },
                                { icon: <IconMail />, link: "#" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.link} className="w-10 h-10 rounded-full border border-blue-800 flex items-center justify-center text-blue-300 hover:bg-yellow-400 hover:text-blue-950 hover:border-yellow-400 transition-all duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Address Info */}
                        <div className="space-y-3 text-sm text-blue-200">
                            <p className="flex items-start gap-3">
                                <svg className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Jl. Ahmad Yani Batam Kota,<br />Kota Batam, Kepulauan Riau 29461</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg className="w-5 h-5 shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+62 778 469858</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg className="w-5 h-5 shrink-0 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>cdc@polibatam.ac.id</span>
                            </p>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Kolom Tengah: Layanan CDC */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-lg mb-6">Layanan CDC</h3>
                        <ul className="space-y-4 text-sm font-medium text-blue-300">
                            <li><Link className="hover:text-yellow-400 transition-colors" to="/lowongan">Lowongan Pekerjaan</Link></li>
                            <li><Link className="hover:text-yellow-400 transition-colors" to="/pemetaan">Pemetaan Magang</Link></li>
                            <li><a href="https://tracerstudy.kemdikbud.go.id/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">Tracer Study Alumni</a></li>
                            <li><Link className="hover:text-yellow-400 transition-colors" to="/">Agenda Karier & Job Fair</Link></li>
                            <li><Link className="hover:text-yellow-400 transition-colors" to="/">Panduan Karier</Link></li>
                        </ul>
                    </div>

                    {/* Kolom Kanan: Tautan Ekosistem */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-lg mb-6">Tautan Kampus</h3>
                        <ul className="space-y-4 text-sm font-medium text-blue-300">
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Portal Polibatam</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">Sistem MyInternship</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">TalentHub</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">SIAKAD</a></li>
                            <li><a href="#" className="hover:text-yellow-400 transition-colors">E-Learning</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className="mt-16 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-blue-400">
                        2026 © Career Development Center Politeknik Negeri Batam. All rights reserved.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-blue-950 transition-colors shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7"></path></svg>
                    </button>
                </div>
            </div>
        </footer>
    );
}