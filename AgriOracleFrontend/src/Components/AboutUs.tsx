import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    "Faster & More Accurate Predictions - Real-time disease detection and crop recommendation based on soil and weather",
    "Designed for Indian Farmers - Our AI is trained specifically for regional crops, soil conditions, and local challenges",
    "Preventive Agriculture - We don't just detect diseases—we help prevent outbreaks before they spread",
    "Bridging the Technology Gap - Bringing cutting-edge AI solutions to farmers who need them most"
  ];

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <h1>About Agri Oracle</h1>
          <p>
            At Agri Oracle, we are on a mission to revolutionize agriculture with AI-driven
            technology. We empower farmers by providing instant crop disease detection,
            intelligent crop recommendations, and data-driven insights, helping them make
            informed decisions and maximize their yield.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Do</h2>
          <div className="about-cards">
            <div className="card">
              <h3>AI-Powered Crop Disease Detection</h3>
              <p>
                Simply upload an image of your affected crop and our AI model will instantly
                diagnose diseases with a confidence score and provide effective treatment solutions.
              </p>
            </div>
            <div className="card">
              <h3>Crop Recommendation System</h3>
              <p>
                Based on soil type, climate, and region-specific data, our model recommends
                the most suitable crops to plant for better productivity and profitability.
              </p>
            </div>
            <div className="card">
              <h3>Localized Disease Alerts</h3>
              <p>
                Receive early warnings if a crop disease outbreak is spreading in your region.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose Agri Oracle?</h2>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>
                ✅ {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-section vision">
          <h2>Our Vision</h2>
          <div className="card vision-card">
            <p>
              🚀 We believe in a future where technology and agriculture go hand in hand,
              ensuring that no farmer suffers losses due to lack of information. By leveraging
              AI and data analytics, Agri Oracle is paving the way for a smarter, more
              profitable, and sustainable farming ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
