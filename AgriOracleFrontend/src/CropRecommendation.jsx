import { useState } from 'react';
import axios from 'axios';
import './CropRecommendation.css';

const CropRecommendation = () => {
  const [previousCrop, setPreviousCrop] = useState('');
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [recommendedCrop, setRecommendedCrop] = useState(null);
  const [reasoning, setReasoning] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setRecommendedCrop(null);

    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/recommend_crop',
        { previous_crop: previousCrop, soil_type: soilType, season }
      );

      setRecommendedCrop(response.data.recommended_crop);
      setReasoning(response.data.reasoning);
    } catch (err) {
      console.error(err);
      setError('Error fetching crop recommendation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="recommendation-container">
      <h2 className="recommendation-title">Crop Recommendation</h2>

      <form className="recommendation-form" onSubmit={handleSubmit}>
        <div className="recommendation-form-group">
          <label htmlFor="previousCrop">Previous Crop</label>
          <input
            type="text"
            id="previousCrop"
            value={previousCrop}
            onChange={(e) => setPreviousCrop(e.target.value)}
            className="recommendation-input"
            placeholder="Enter previous crop"
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="soilType">Soil Type</label>
          <input
            type="text"
            id="soilType"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            className="recommendation-input"
            placeholder="Enter soil type"
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="season">Season</label>
          <input
            type="text"
            id="season"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="recommendation-input"
            placeholder="Enter season"
            required
          />
        </div>

        <button
          type="submit"
          className="recommendation-button"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
      </form>

      {error && <div className="recommendation-error">{error}</div>}

      {recommendedCrop && (
        <div className="recommendation-result">
          <p className="recommended-crop">
            Recommended Crop: {recommendedCrop}
          </p>
          <p className="recommendation-info">
            <strong>Reasoning:</strong> {reasoning}
          </p>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
