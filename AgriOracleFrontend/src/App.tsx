import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import Navbar from './components/Navbar';
import AuthenticatedNavbar from './components/AuthenticatedNavbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Services from './pages/Services';
import OurServices from './pages/OurServices';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DiseasePrediction from './pages/DiseasePrediction';
import GeneralInfo from './pages/GeneralInfo';
import PriceForecasting from './pages/PriceForecasting';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (admin = false) => {
    setIsAuthenticated(true);
    setIsAdmin(admin);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isAuthenticated ? (
          <AuthenticatedNavbar logo={<Sprout className="w-8 h-8" />} isAdmin={isAdmin} />
        ) : (
          <Navbar logo={<Sprout className="w-8 h-8" />} />
        )}
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route
              path="/services"
              element={isAuthenticated ? <Services /> : <Navigate to="/login" />}
            />
            <Route
              path="/disease-prediction"
              element={isAuthenticated ? <DiseasePrediction /> : <Navigate to="/login" />}
            />
            <Route
              path="/general-info"
              element={isAuthenticated ? <GeneralInfo /> : <Navigate to="/login" />}
            />
            <Route
              path="/price-forecasting"
              element={isAuthenticated ? <PriceForecasting /> : <Navigate to="/login" />}
            />
            <Route
              path="/admin"
              element={<AdminDashboard />}
            />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;