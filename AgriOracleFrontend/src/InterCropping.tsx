/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(false);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/recommend_intercrop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          primary_crop: formData.previousCrop,
          soil_type: formData.soilType,
          season: formData.season,
        }),
      });

      if (!response.ok) throw new Error('Something went wrong while fetching data.');

      const data = await response.json();
      setResult(data);
      setShowResult(true);
    } catch (err: any) {
      setError(err.message || 'Unknown error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white border border-gray-300 rounded-xl shadow-md font-sans">
      <h2 className="text-center text-3xl font-semibold text-green-800 mb-8">Crop Intercropping</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Previous Crop */}
        <div>
          <label htmlFor="previousCrop" className="block mb-2 font-medium text-green-900">Previous Crop</label>
          <input
            type="text"
            id="previousCrop"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={formData.previousCrop}
            onChange={handleChange}
            required
          />
        </div>

        {/* Soil Type */}
        <div>
          <label htmlFor="soilType" className="block mb-2 font-medium text-green-900">Soil Type</label>
          <input
            type="text"
            id="soilType"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={formData.soilType}
            onChange={handleChange}
            required
          />
        </div>

        {/* Season */}
        <div>
          <label htmlFor="season" className="block mb-2 font-medium text-green-900">Season</label>
          <input
            type="text"
            id="season"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={formData.season}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-fit mx-auto block px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-md transition-transform duration-200 ease-in-out ${
            loading
              ? 'bg-green-300 cursor-not-allowed'
              : 'bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 transform hover:-translate-y-1'
          }`}
        >
          {loading ? 'Getting Recommendation...' : 'Get Recommendation'}
        </button>
      </form>

      {error && (
        <p className="text-red-600 text-center mt-4 font-medium">❌ {error}</p>
      )}

      {showResult && result && (
        <div className="mt-10 text-center p-6 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
          <p className="text-xl font-bold text-green-900 mb-3">
            🌾 AI Recommended Companion Crop: <strong>{result.recommended_crop}</strong>
          </p>
          <p className="text-gray-700">{result.reasoning}</p>
        </div>
      )}
    </div>
  );
};

export default CropIntercropping;
