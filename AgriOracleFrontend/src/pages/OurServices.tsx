import React from 'react';
import { Microscope, LineChart, Leaf } from 'lucide-react';

const OurServices = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Microscope className="w-8 h-8 text-[#2F4F3F]" />
                <h2 className="text-2xl font-bold text-[#2F4F3F]">Image Based Disease Prediction</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Early detection of crop diseases is crucial for preventing yield loss. 
                With AgriOracle's AI-powered image-based disease prediction, farmers can 
                instantly diagnose plant diseases by simply uploading a photo. Our advanced 
                machine learning models analyze leaf patterns, discoloration, and other 
                symptoms to provide accurate disease identification and treatment recommendations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Crop Disease Detection"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Market Price Prediction"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center space-x-3 mb-4">
                <LineChart className="w-8 h-8 text-[#2F4F3F]" />
                <h2 className="text-2xl font-bold text-[#2F4F3F]">Future Market Price Prediction</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selling crops at the right time and price is crucial for farmers to 
                maximize their profits. With AgriOracle's AI-powered market price prediction, 
                farmers get real-time insights into mandi prices, helping them make smarter 
                selling decisions. Our system analyzes historical data, market trends, and 
                various factors to provide accurate price forecasts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Leaf className="w-8 h-8 text-[#2F4F3F]" />
                <h2 className="text-2xl font-bold text-[#2F4F3F]">General Info About Crops</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Understanding your crops is the first step to a successful and healthy 
                harvest. With AgriOracle's General Info section, farmers get detailed 
                insights about various crops, including their best growing conditions, 
                soil requirements, ideal climate, and common diseases. This comprehensive 
                knowledge base helps farmers make informed decisions throughout the 
                growing season.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Crop Information"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600">
            Ready to transform your farming with AI-powered insights?
          </p>
          <a
            href="/register"
            className="inline-block mt-6 px-8 py-3 bg-[#2F4F3F] text-white rounded-md hover:bg-[#1F3F2F] transition"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurServices;