import React, { useState } from 'react';
import './CropIntercropping.css';

const CropIntercropping = () => {
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="recommendation-container">
      <h2 className="recommendation-title">Crop Intercropping</h2>

      <form className="recommendation-form" onSubmit={handleSubmit}>
        <div className="recommendation-form-group">
          <label htmlFor="previousCrop">Previous Crop</label>
          <input
            type="text"
            id="previousCrop"
            className="recommendation-input"
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="soilType">Soil Type</label>
          <input
            type="text"
            id="soilType"
            className="recommendation-input"
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="season">Season</label>
          <input
            type="text"
            id="season"
            className="recommendation-input"
            required
          />
        </div>

        <button type="submit" className="recommendation-button">
          Get Recommendation
        </button>
      </form>

      {showResult && (
        <div className="recommendation-result">
          <p className="recommended-crop">🌾 AI Recommended Companion Crop: Corn</p>
          <p className="recommendation-info">
            📌 Reason: During Kharif, warm-season crops like Maize grow vigorously,
            making it ideal for intercropping with legumes.
          </p>
        </div>
      )}
    </div>
  );
};

export default CropIntercropping;
