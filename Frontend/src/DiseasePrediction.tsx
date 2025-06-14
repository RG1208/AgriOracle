/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

const DiseasePrediction = () => {
  const [ , setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
    setPrediction(null);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/predict_disease', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setPrediction(data);
        setError('');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Error uploading image');
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-xl border border-gray-200 shadow-lg font-sans">
      <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">
        Upload Image for Disease Prediction
      </h2>

      <input
        type="file"
        onChange={handleImageUpload}
        accept="image/*"
        className="block mx-auto mb-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md cursor-pointer transition hover:bg-green-600 hover:scale-105"
      />

      {imageUrl && !prediction && (
        <div className="mt-6 text-center border-t pt-6 animate-fadeIn">
          <p className="text-gray-600 font-medium mb-2">Preview:</p>
          <img
            src={imageUrl}
            alt="Preview"
            className="mx-auto rounded-lg shadow-md w-80"
          />
        </div>
      )}

      {error && (
        <div className="text-red-600 text-center font-medium mt-4">{error}</div>
      )}

      {prediction && (
        <div className="mt-8 text-center border-t pt-6 animate-fadeIn">
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            Prediction: {prediction.prediction}
          </h3>
          <p className="text-gray-700 px-4 mb-2">
            <strong>Reason:</strong> {prediction.reason}
          </p>
          <p className="text-gray-700 px-4">
            <strong>Cure:</strong> {prediction.cure}
          </p>

          <h4 className="text-lg font-semibold text-green-600 mt-6">
            Processed Image from Server:
          </h4>
          <img
            src={`http://127.0.0.1:5000${prediction.image_url}`}
            alt="Predicted Disease"
            className="mx-auto rounded-lg shadow-md w-80 mt-4"
          />
        </div>
      )}
    </div>
  );
};

export default DiseasePrediction;
