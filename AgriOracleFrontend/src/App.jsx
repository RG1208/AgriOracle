import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiseasePrediction from './DiseasePrediction';
import CropRecommendation from './CropRecommendation.jsx';
import LandingPage from './Components/LandingPage.tsx';
import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx'; 
import GeneralInfo from './Components/GeneralInfo.tsx';
import OurServices from './Components/OurServices.tsx';
import AboutUs from './Components/AboutUs.tsx';
import ContactUs from './Components/ContactUs.tsx';
import CropIntercropping from './CropIntercropping.tsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/predict_disease" element={<DiseasePrediction />} />
            <Route path="/recommend_crop" element={<CropRecommendation />} />
            <Route path="/general-info"element={<GeneralInfo />} />
            <Route path="/our-services" element={<OurServices />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/crop_intercropping" element={<CropIntercropping />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
