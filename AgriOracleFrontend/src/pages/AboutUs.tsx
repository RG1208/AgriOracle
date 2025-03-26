import React from 'react';
import { CheckCircle2, Rocket } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About Agri Oracle</h1>
          <p className="text-lg text-gray-600">
            At Agri Oracle, we are on a mission to revolutionize agriculture with AI-driven
            technology. We empower farmers by providing instant crop disease detection, real-time
            market price predictions, and data-driven insights, helping them make informed
            decisions and maximize their yield.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#2F4F3F]">What We Do</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Crop Disease Detection</h3>
              <p className="text-gray-600">
                Simply upload an image of your affected crop and our AI model will instantly
                diagnose diseases with a confidence score and provide effective treatment solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Market Price Predictions</h3>
              <p className="text-gray-600">
                Get real-time mandi price forecasts, enabling you to sell crops at the best possible price.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Localized Disease Alerts</h3>
              <p className="text-gray-600">
                Receive early warnings if a crop disease outbreak is spreading in your region.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#2F4F3F]">Why Choose Agri Oracle?</h2>
          <div className="space-y-4">
            {[
              "Faster & More Accurate Predictions - Unlike existing platforms, we offer real-time disease detection and price forecasts",
              "Designed for Indian Farmers - Our AI is trained specifically for regional crops, soil conditions, and local challenges",
              "Preventive Agriculture - We don't just detect diseases—we help prevent outbreaks before they spread",
              "Bridging the Technology Gap - Bringing cutting-edge AI solutions to farmers who need them most"
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#2F4F3F]">Our Vision</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Rocket className="w-12 h-12 mx-auto mb-4 text-[#2F4F3F]" />
            <p className="text-gray-600">
              We believe in a future where technology and agriculture go hand in hand,
              ensuring that no farmer suffers losses due to lack of information. By leveraging
              AI and data analytics, Agri Oracle is paving the way for a smarter, more
              profitable, and sustainable farming ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;