import { Microscope, LineChart, Leaf } from 'lucide-react';
import './OurServices.css'; // Make sure to create and import this CSS file

const OurServices = () => {
  return (
    <div className="container">
      <h1 className="title">Our Services</h1>

      <div className="services-wrapper">
        <div className="service-item">
          <div className="service-text">
            <div className="service-header">
              <Microscope className="service-icon" />
              <a href="/predict_disease" className="service-title">
                <h2>Image Based Disease Prediction</h2>
              </a>
            </div>
            <p className="service-description">
              Early detection of crop diseases is crucial for preventing yield loss.
              With AgriOracle's AI-powered image-based disease prediction, farmers can
              instantly diagnose plant diseases by simply uploading a photo. Our advanced
              machine learning models analyze leaf patterns, discoloration, and other
              symptoms to provide accurate disease identification and treatment recommendations.
            </p>
          </div>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Crop Disease Detection"
            />
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-image">
            <img
              src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1747338835/crop_recommendation_pkpw59.png"
              alt="Crop Recommendation"
            />
          </div>
          <div className="service-text">
            <div className="service-header">
              <LineChart className="service-icon" />
              <a href="/recommend_crop" className="service-title">
                <h2>Crop Recommendation</h2>
              </a>
            </div>
            <p className="service-description">
              Crop recommendation systems assist farmers in selecting the most suitable crops
              based on soil type, climate, water availability, and market demand. By analyzing
              historical data and weather patterns, these systems provide personalized suggestions.
            </p>
          </div>
        </div>

        <div className="service-item reverse">
          <div className="service-image">
            <img
              src="https://res.cloudinary.com/dx2ttgkba/image/upload/v1746891561/AgriOracle_IMG_kg9qjf.jpg"
              alt="Crop Intercropping"
            />
          </div>
          <div className="service-text">
            <div className="service-header">
              <LineChart className="service-icon" />
              <a href="/crop_intercropping" className="service-title">
                <h2>Crop Intercropping</h2>
              </a>
            </div>
            <p className="service-description">
            Intercropping is an agricultural practice where two or more crops are grown simultaneously on the same field. This technique aims to maximize the use of space, sunlight, water, and nutrients, often resulting in better overall yield and reduced risk of crop failure.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-text">
            <div className="service-header">
              <Leaf className="service-icon" />
              <a href="/general-info" className="service-title">
                <h2>General Info About Crops</h2>
              </a>
            </div>
            <p className="service-description">
              Understanding your crops is the first step to a successful harvest.
              AgriOracle's General Info section provides insights into growing conditions,
              soil requirements, ideal climate, and common diseases to help farmers make
              informed decisions throughout the season.
            </p>
          </div>
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Crop Information"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
