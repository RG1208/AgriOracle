import { Microscope, LineChart, Leaf } from 'lucide-react';

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-900">Our Services</h1>

      <div className="flex flex-col gap-16">

        {/* Image Based Disease Prediction */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Microscope className="w-8 h-8 text-green-900 mr-3" />
              <a href="/predict_disease" className="no-underline text-inherit">
                <h2 className="text-3xl font-bold text-green-900 m-0">Image Based Disease Prediction</h2>
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Early detection of crop diseases is crucial for preventing yield loss.
              With AgriOracle's AI-powered image-based disease prediction, farmers can
              instantly diagnose plant diseases by simply uploading a photo. Our advanced
              machine learning models analyze leaf patterns, discoloration, and other
              symptoms to provide accurate disease identification and treatment recommendations.
            </p>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Crop Disease Detection"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Crop Recommendation */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <LineChart className="w-8 h-8 text-green-900 mr-3" />
              <a href="/recommend_crop" className="no-underline text-inherit">
                <h2 className="text-3xl font-bold text-green-900 m-0">Crop Recommendation</h2>
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Crop recommendation systems assist farmers in selecting the most suitable crops
              based on soil type, climate, water availability, and market demand. By analyzing
              historical data and weather patterns, these systems provide personalized suggestions.
            </p>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <img
              src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1747338835/crop_recommendation_pkpw59.png"
              alt="Crop Recommendation"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Intercropping*/}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <LineChart className="w-8 h-8 text-green-900 mr-3" />
              <a href="/crop_intercropping" className="no-underline text-inherit">
                <h2 className="text-3xl font-bold text-green-900 m-0">Crop Intercropping</h2>
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Intercropping is an agricultural practice where two or more crops are grown simultaneously
              on the same field. This technique aims to maximize the use of space, sunlight, water, and nutrients,
              often resulting in better overall yield and reduced risk of crop failure.
            </p>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <img
              src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891561/AgriOracle_IMG_kg9qjf.jpg"
              alt="Crop Intercropping"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        {/* General Info About Crops*/}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-green-900 mr-3" />
              <a href="/general-info" className="no-underline text-inherit">
                <h2 className="text-3xl font-bold text-green-900 m-0">General Info About Crops</h2>
              </a>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">
              Understanding your crops is the first step to a successful harvest.
              AgriOracle's General Info section provides insights into growing conditions,
              soil requirements, ideal climate, and common diseases to help farmers make
              informed decisions throughout the season.
            </p>
          </div>
          <div className="flex-1 w-full md:w-auto">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Crop Information"
              className="w-full h-48 object-cover rounded-md shadow-md"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurServices;
