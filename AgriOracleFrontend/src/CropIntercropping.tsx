import { useState } from 'react';
import './CropIntercropping.css';

const CropIntercropping = () => {
  const [formData, setFormData] = useState({
    previousCrop: '',
    soilType: '',
    season: '',
  });

  const [result, setResult] = useState<{ recommended_crop: string; reasoning: string } | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowResult(false);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/recommend_intercrop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          primary_crop: formData.previousCrop,
          soil_type: formData.soilType,
          season: formData.season,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong while fetching data.');
      }

      const data = await response.json();
      setResult(data);
      setShowResult(true);
    } catch (err) {
      setError(err.message || 'Unknown error occurred.');
    } finally {
      setLoading(false);
    }
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
            value={formData.previousCrop}
            onChange={handleChange}
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="soilType">Soil Type</label>
          <input
            type="text"
            id="soilType"
            className="recommendation-input"
            value={formData.soilType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="recommendation-form-group">
          <label htmlFor="season">Season</label>
          <input
            type="text"
            id="season"
            className="recommendation-input"
            value={formData.season}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="recommendation-button" disabled={loading}>
          {loading ? 'Getting Recommendation...' : 'Get Recommendation'}
        </button>
      </form>

      {error && <p className="error-message">❌ {error}</p>}

      {showResult && result && (
        <div className="recommendation-result">
          <p className="recommended-crop">
            🌾 AI Recommended Companion Crop: <strong>{result.recommended_crop}</strong>
          </p>
          <p className="recommendation-info"> Reason: {result.reasoning}</p>
        </div>
      )}
    </div>
  );
};

export default CropIntercropping;
