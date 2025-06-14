import React from 'react';
import { Star, User } from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    "AI-Powered Insights",
    "Easy-to-Use Platform",
    "Real-time Analysis",
    "Sustainable Solutions",
    "Reliable Results",
    "Farmer-Centric"
  ];

  const reviews = [
    {
      name: "Rachit",
      rating: 5,
      review: "AgriOracle has completely changed the way I analyze market trends. The insights are precise and very useful!",
    },
    {
      name: "Paramjeet",
      rating: 4,
      review: "The platform is user-friendly and provides accurate predictions. Highly recommended for farmers looking to maximize their yield!",
    },
    {
      name: "Rishab",
      rating: 5,
      review: "The AI-powered insights are a game changer. Now, I make informed decisions backed by real data.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center bg-[url('/Images/coverpage.png')]">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-white max-w-3xl px-6 py-10 mx-auto top-1/2 -translate-y-1/2">
          <h1 className="text-4xl font-bold mb-4">HARVESTING THE POWER OF AI</h1>
          <p className="text-xl">Smart insights for a bountiful future</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 px-4 text-center bg-[#EAFCE0]">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white w-64 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 text-center bg-[#EAFCE0]">
        <h2 className="text-3xl font-bold mb-10">What People Say?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((user, index) => (
            <div
              key={index}
              className="bg-white w-72 p-6 rounded-lg shadow-md hover:shadow-xl text-left transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-gray-200 rounded-full">
                  <User className="w-6 h-6 text-gray-800" />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{user.name}</h4>
                  <div className="flex">
                    {[...Array(user.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{user.review}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
