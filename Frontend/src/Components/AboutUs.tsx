const AboutUs = () => {
  const features = [
    "Faster & More Accurate Predictions - Real-time disease detection and crop recommendation based on soil and weather",
    "Designed for Indian Farmers - Our AI is trained specifically for regional crops, soil conditions, and local challenges",
    "Preventive Agriculture - We don't just detect diseases—we help prevent outbreaks before they spread",
    "Bridging the Technology Gap - Bringing cutting-edge AI solutions to farmers who need them most"
  ];

  return (
    <div className="py-16 px-4 bg-gray-100 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-900 mb-4">About Agri Oracle</h1>
          <p className="text-lg text-gray-700">
            At Agri Oracle, we are on a mission to revolutionize agriculture with AI-driven
            technology. We empower farmers by providing instant crop disease detection,
            intelligent crop recommendations, and data-driven insights, helping them make
            informed decisions and maximize their yield.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-900 mb-6">What We Do</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Crop Disease Detection</h3>
              <p className="text-gray-600">
                Simply upload an image of your affected crop and our AI model will instantly
                diagnose diseases with a confidence score and provide effective treatment solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Crop Recommendation System</h3>
              <p className="text-gray-600">
                Based on soil type, climate, and region-specific data, our model recommends
                the most suitable crops to plant for better productivity and profitability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Localized Disease Alerts</h3>
              <p className="text-gray-600">
                Receive early warnings if a crop disease outbreak is spreading in your region.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-900 mb-6">Why Choose Agri Oracle?</h2>
          <ul className="list-none space-y-4 text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="relative pl-6 before:content-['✅'] before:absolute before:left-0">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Vision Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-900 mb-6">Our Vision</h2>
          <div className="bg-white p-6 rounded-xl shadow-md mx-auto max-w-2xl">
            <p className="text-gray-700 text-lg leading-relaxed">
              🚀 We believe in a future where technology and agriculture go hand in hand,
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
