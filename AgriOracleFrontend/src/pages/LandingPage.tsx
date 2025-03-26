import React from 'react';
import { Star, User } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <div 
        className="h-[500px] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto h-full flex items-center relative z-10">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">HARVESTING THE POWER OF AI</h1>
            <p className="text-xl">Smart insights for a bountiful future</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "AI-Powered Insights",
            "Easy-to-Use Platform",
            "Real-time Analysis",
            "Sustainable Solutions",
            "Reliable Results",
            "Farmer-Centric"
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What people say?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((review) => (
              <div key={review} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 rounded-full bg-gray-200 p-2" />
                  <div className="ml-4">
                    <h4 className="font-semibold">John Doe</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;