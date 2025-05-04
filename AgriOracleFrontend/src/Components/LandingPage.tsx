import React from 'react';
import { Star, User } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const features = [
    "AI-Powered Insights",
    "Easy-to-Use Platform",
    "Real-time Analysis",
    "Sustainable Solutions",
    "Reliable Results",
    "Farmer-Centric"
  ];

  const reviews = [
    { name: "Rachit", rating: 5, review: "AgriOracle has completely changed the way I analyze market trends. The insights are precise and very useful!" },
    { name: "Paramjeet", rating: 4, review: "The platform is user-friendly and provides accurate predictions. Highly recommended for farmers looking to maximize their yield!" },
    { name: "Rishab", rating: 5, review: "The AI-powered insights are a game changer. Now, I make informed decisions backed by real data." }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>HARVESTING THE POWER OF AI</h1>
          <p>Smart insights for a bountiful future</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section reviews">
        <h2>What People Say?</h2>
        <div className="reviews-grid">
          {reviews.map((user, index) => (
            <div className="review-card" key={index}>
              <div className="review-header">
                <User className="user-icon" />
                <div className="review-user-info">
                  <h4>{user.name}</h4>
                  <div className="stars">
                    {[...Array(user.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">{user.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
