import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isHome = location.pathname === '/';
    const isSolid = isScrolled || !isHome || isMobileMenuOpen;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none"
                >
                    <img
                        src="/logo-polibatam.png"
                        alt="Logo CDC Polibatam"
                        className="h-12 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className={`font-extrabold text-base tracking-tight ${isSolid ? 'text-blue-950' : 'text-white'}`}>
                            CDC
                        </span>
                        <span className="font-bold text-xs tracking-widest text-yellow-400 mt-0.5">
                            POLIBATAM
                        </span>
                    </div>
                </Link>

                <div className={`hidden lg:flex items-center gap-7 font-semibold text-sm transition-colors ${isSolid ? 'text-gray-700' : 'text-white'
                    }`}>
                    <Link to="/" className="hover:text-yellow-400 transition-colors">Beranda</Link>
                    <Link to="/lowongan" className="hover:text-yellow-400 transition-colors">Lowongan</Link>
                    <Link to="/pemetaan" className="hover:text-yellow-400 transition-colors">Pemetaan Magang</Link>
                    <a
                        href="https://myinternship.polibatam.ac.id"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        MyInternship
                    </a>
                    <a
                        href="https://talent.polibatam.ac.id"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                    >
                        Talent Cerdas
                    </a>

                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-1.5 cursor-pointer hover:text-yellow-400 transition-colors focus:outline-none py-2"
                        >
                            <span>Informasi</span>
                            <span className={`text-xs transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 text-gray-800 z-50">
                                <Link
                                    to="/tentang"
                                    className="block px-5 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
                                >
                                    Tentang Kami
                                </Link>
                                <Link
                                    to="/tips"
                                    className="block px-5 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
                                >
                                    Tips & Artikel Karier
                                </Link>
                                <div className="my-1 border-t border-gray-100"></div>
                                <Link
                                    to="/faq"
                                    className="block px-5 py-2.5 text-sm hover:bg-blue-50 hover:text-blue-900 font-medium transition-colors"
                                >
                                    FAQ (Pusat Bantuan)
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden lg:flex items-center">
                    <Link
                        to="/admin"
                        className={`font-bold text-sm px-6 py-2.5 rounded-full transition-all flex items-center gap-2 ${!isSolid
                            ? 'bg-white text-blue-900 shadow-lg hover:bg-gray-100'
                            : 'bg-blue-900 text-white hover:bg-blue-800'
                            }`}
                    >
                        <span>Portal Admin</span>
                        <span className="text-lg leading-none">↗</span>
                    </Link>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`focus:outline-none ${isSolid ? 'text-blue-900' : 'text-white'}`}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 text-gray-800 flex flex-col gap-4 font-semibold text-base"
                    >
                        <Link to="/" className="py-2 hover:text-blue-900 transition-colors border-b border-gray-100">Beranda</Link>
                        <Link to="/lowongan" className="py-2 hover:text-blue-900 transition-colors border-b border-gray-100">Lowongan</Link>
                        <Link to="/pemetaan" className="py-2 hover:text-blue-900 transition-colors border-b border-gray-100">Pemetaan Magang</Link>
                        <a
                            href="https://myinternship.polibatam.ac.id"
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 hover:text-blue-900 transition-colors border-b border-gray-100"
                        >
                            MyInternship
                        </a>
                        <a
                            href="https://talent.polibatam.ac.id"
                            target="_blank"
                            rel="noreferrer"
                            className="py-2 hover:text-blue-900 transition-colors border-b border-gray-100"
                        >
                            Talent Cerdas
                        </a>
                        <div className="py-1">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2">Informasi</span>
                            <div className="flex flex-col pl-3 gap-3 border-l-2 border-blue-900">
                                <Link to="/tentang" className="py-1 hover:text-blue-900 transition-colors">Tentang Kami</Link>
                                <Link to="/tips" className="py-1 hover:text-blue-900 transition-colors">Tips & Artikel Karier</Link>
                                <Link to="/faq" className="py-1 hover:text-blue-900 transition-colors">FAQ (Pusat Bantuan)</Link>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                to="/admin"
                                className="w-full bg-blue-900 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-blue-800 transition-colors"
                            >
                                <span>Portal Admin</span>
                                <span>↗</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}