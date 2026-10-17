import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

// Import Halaman Publik
import LandingPage from '../pages/public/LandingPage';
import LowonganPage from '../pages/public/LowonganPage';
import JobDetailPage from '../pages/public/JobDetailPage';
import PemetaanPage from '../pages/public/PemetaanPage';
import TentangKamiPage from '../pages/public/TentangKamiPage';
import Agenda from '../pages/public/AgendaPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import LoginPage from '../pages/admin/LoginPage';
import DashboardPage from '../pages/admin/DashboardPage';
import KelolaLowongan from '../pages/admin/KelolaLowongan';
import PemetaanMagang from '../pages/admin/PemetaanMagang';

// Layout Khusus Publik (Navbar & Footer Hanya Muncul di Sini)
const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Pengaman Rute Admin (Mencegah Akses Tanpa Login)
const ProtectedAdminRoute = () => {
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  
  return isLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* ----------------- RUTE PUBLIK (MAHASISWA / ALUMNI) ----------------- */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/lowongan" element={<LowonganPage />} />
          <Route path="/lowongan/:id" element={<JobDetailPage />} />
          <Route path="/pemetaan" element={<PemetaanPage />} />
          <Route path="/tentang" element={<TentangKamiPage />} />
           <Route path="/agenda" element={<Agenda />} />
        </Route>

        {/* ----------------- RUTE ADMIN ----------------- */}
        <Route path="/admin/login" element={<LoginPage />} />

        {/* Redirect otomatis jika akses /admin saja */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Rute Admin Terproteksi */}
        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin/dashboard" element={<DashboardPage />} />
          <Route path="/admin/lowongan" element={<KelolaLowongan />} />
          <Route path="/admin/pemetaan" element={<PemetaanMagang />} />
        </Route>

        {/* Fallback jika URL tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}