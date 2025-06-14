import { useState } from 'react';
import axios from 'axios';

const CropRecommendation = () => {
  const [previousCrop, setPreviousCrop] = useState('');
  const [soilType, setSoilType] = useState('');
  const [season, setSeason] = useState('');
  const [recommendedCrop, setRecommendedCrop] = useState<string | null>(null);
  const [reasoning, setReasoning] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setRecommendedCrop(null);

    try {
      const response = await axios.post('http://127.0.0.1:5000/recommend_crop', {
        previous_crop: previousCrop,
        soil_type: soilType,
        season,
      });
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
    <div className="max-w-xl mx-auto my-12 p-8 bg-white shadow-lg rounded-xl font-sans">
      <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">Crop Recommendation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="previousCrop" className="block font-medium text-gray-700 mb-1">Previous Crop</label>
          <input
            type="text"
            id="previousCrop"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={previousCrop}
            onChange={(e) => setPreviousCrop(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="soilType" className="block font-medium text-gray-700 mb-1">Soil Type</label>
          <input
            type="text"
            id="soilType"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={soilType}
            onChange={(e) => setSoilType(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="season" className="block font-medium text-gray-700 mb-1">Season</label>
          <input
            type="text"
            id="season"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="block w-full py-2 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition transform hover:scale-105"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get Recommendation'}
        </button>
      </form>

      {error && (
        <p className="text-red-600 text-center mt-4 font-medium">{error}</p>
      )}

      {recommendedCrop && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn text-center">
          <p className="text-lg font-semibold text-green-800">🌱 Recommended Crop: {recommendedCrop}</p>
          <p className="text-gray-700 mt-2">{reasoning}</p>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
