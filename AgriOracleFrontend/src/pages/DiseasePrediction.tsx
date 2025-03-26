import React, { useState } from 'react';
import { Upload, Plane as Plant, FileCheck } from 'lucide-react';

const DiseasePrediction = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      // Simulate prediction
      setPrediction("Wheat Leaf Rust");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        HOW IMAGE BASED DISEASE PREDICTION WORKS
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Upload className="w-12 h-12 mx-auto mb-4 text-[#2F4F3F]" />
          <h3 className="text-xl font-semibold mb-2">Upload an Image of Your Crop</h3>
          <p className="text-gray-600">
            Easily Click a picture of the part which you find is mostly affected.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Plant className="w-12 h-12 mx-auto mb-4 text-[#2F4F3F]" />
          <h3 className="text-xl font-semibold mb-2">Let Our AI Diagnose and Analyze</h3>
          <p className="text-gray-600">
            Just wait for some time and let our AI do its work to bring the best output for you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <FileCheck className="w-12 h-12 mx-auto mb-4 text-[#2F4F3F]" />
          <h3 className="text-xl font-semibold mb-2">Get Personalized Solutions</h3>
          <p className="text-gray-600">
            Get the disease of our crop with a proper roadmap for treatment.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="block w-full py-3 px-4 text-center bg-[#2F4F3F] text-white rounded-md cursor-pointer hover:bg-[#1F3F2F] transition"
          >
            Upload Crop Image here
          </label>

          {prediction && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">{prediction}</h3>
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Disease Example"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseasePrediction;