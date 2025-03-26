import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Have Questions?</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2F4F3F] text-white py-2 px-4 rounded-md hover:bg-[#1F3F2F] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-[#2F4F3F] p-8 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>agrioracle@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>VIPS-TC, Pitampura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;