import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/public/LandingPage';
import LowonganPage from '../pages/public/LowonganPage';
import JobDetailPage from '../pages/public/JobDetailPage';
import PemetaanPage from '../pages/public/PemetaanPage';
import TentangKamiPage from '../pages/public/TentangKamiPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lowongan" element={<LowonganPage />} />
        <Route path="/lowongan/:id" element={<JobDetailPage />} />
        <Route path="/pemetaan" element={<PemetaanPage />} />
        <Route path="/tentang" element={<TentangKamiPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}