import React, { useState } from 'react';
import { BarChart, Clock, LineChart } from 'lucide-react';

const PriceForecasting = () => {
  const [formData, setFormData] = useState({
    crop: '',
    quantity: '',
    investment: '',
    state: '',
    district: '',
    mandi: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">PREDICTING FUTURE MARKET PRICE</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Select a Crop</label>
              <select
                value={formData.crop}
                onChange={(e) => setFormData({ ...formData, crop: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select crop name</option>
                <option value="wheat">Wheat</option>
                <option value="rice">Rice</option>
                <option value="corn">Corn</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Quantity (in kg)
              </label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Enter Quantity"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter Investment (in ₹)
              </label>
              <input
                type="number"
                value={formData.investment}
                onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Enter total investment"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select State</label>
              <select
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select State</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select District</label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select District</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Select Mandi</label>
              <select
                value={formData.mandi}
                onChange={(e) => setFormData({ ...formData, mandi: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              >
                <option value="">Select Mandi</option>
              </select>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4 text-gray-700">
              <Clock className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Real Time Data</h3>
                <p className="text-sm">Current market prices and trends</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-700">
              <BarChart className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Price Comparison</h3>
                <p className="text-sm">Compare historical and predicted prices</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-gray-700">
              <LineChart className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Market Forecasting</h3>
                <p className="text-sm">AI-powered price predictions</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-[#2F4F3F] text-white py-2 px-4 rounded-md hover:bg-[#1F3F2F] transition"
          >
            Get Prediction
          </button>
        </form>
      </div>
    </div>
  );
};

export default PriceForecasting;