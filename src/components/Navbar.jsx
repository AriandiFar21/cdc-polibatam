import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Efek transparan berubah jadi solid putih saat di-scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';
    const isSolid = isScrolled || !isHome;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

                <Link
                    to="/"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all ${!isSolid ? 'bg-white text-blue-900 shadow-lg' : 'bg-transparent text-blue-900'
                        }`}
                >
                    <span className="font-extrabold text-lg tracking-tight">
                        CDC <span className="text-yellow-500">Polibatam</span>
                    </span>
                </Link>

                <div className={`hidden lg:flex items-center gap-8 font-semibold text-sm transition-colors ${isSolid ? 'text-gray-700' : 'text-white'
                    }`}>
                    <Link to="/" className="hover:text-yellow-400 transition-colors">Beranda</Link>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
                        <Link to="/lowongan">Lowongan</Link>
                        <span className="text-xs">▼</span> {/* Aksen panah dropdown seperti referensi */}
                    </div>

                    <Link to="/pemetaan" className="hover:text-yellow-400 transition-colors">Pemetaan Magang</Link>
                    <a href="https://if.polibatam.ac.id/pamerin/detail.php?title=aplikasi-tracer-study-alumni-polibatam-berbasis-web&id=MzMxMjAwMTA1OQ==&ta=Mw==" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                        Tracer Study
                    </a>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
                        <Link to="/tentang">Tentang Kami</Link>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition-colors">
                        <Link to="/agenda">Agenda</Link>
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
                    <button className={`focus:outline-none ${isSolid ? 'text-blue-900' : 'text-white'}`}>
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
    );
}