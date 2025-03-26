import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Info, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Image Based Disease Prediction',
      icon: <Microscope className="w-12 h-12" />,
      path: '/disease-prediction',
    },
    {
      title: 'General Info for Crops',
      icon: <Info className="w-12 h-12" />,
      path: '/general-info',
    },
    {
      title: 'Price Forecasting',
      icon: <TrendingUp className="w-12 h-12" />,
      path: '/price-forecasting',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#2F4F3F] mb-12">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.path}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition text-center group"
          >
            <div className="flex justify-center mb-4 text-[#2F4F3F] group-hover:scale-110 transition">
              {service.icon}
            </div>
            <h2 className="text-xl font-semibold text-[#2F4F3F]">{service.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;