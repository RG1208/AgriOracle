import React, { useState } from 'react';
import { Plane as Plant, Sun, Bug } from 'lucide-react';
import './GeneralInfo.css';

const GeneralInfo = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  const cropInfo = {
    wheat: {
      title: 'Wheat',
      description:
        'Wheat is one of the most important cereal crops globally, serving as a staple food for billions. Proper knowledge of its growth cycle, soil conditions, and disease management can significantly improve yield and quality.',
      growingRequirements: [
        'Ideal Climate - Grows best in cool temperatures (10-25°C) with moderate rainfall.',
        'Soil Type - Prefers well-drained loamy or clayey soil with a pH between 6.0-7.5.',
        'Water Requirement - Requires 4-6 irrigations, with critical stages being crown root initiation, tillering and grain filling.',
        'Sowing Time - Best sown in October-November (Rabi season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Boosts leaf and grain development.',
        'Phosphorus (P) - Strengthens root growth and plant establishment.',
        'Potassium (K) - Enhances disease resistance and drought tolerance.',
      ],
      commonDiseases: [
        'Rust (Yellow, Brown, & Black) - Fungal infection causing yellow or brown streaks on leaves.',
        'Powdery Mildew - White powdery coating on leaves.',
        'Loose Smut - Causes black spores in the grain.',
        'Aphids & Armyworms - Suck plant sap, weakening growth.',
      ],
    },
    rice: {
      title: 'Rice',
      description:
        'Rice is a staple food for more than half of the world’s population. It is important to understand its cultivation, including water management, soil conditions, and pest control, to maximize yield and quality.',
      growingRequirements: [
        'Ideal Climate - Grows best in hot climates (25-35°C) with high rainfall.',
        'Soil Type - Prefers clay or silty soil with a pH between 5.5-6.5.',
        'Water Requirement - Requires abundant water, often grown in flooded conditions.',
        'Sowing Time - Best sown in June-July (Kharif season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Promotes vegetative growth and grain filling.',
        'Phosphorus (P) - Helps in root development and flower formation.',
        'Potassium (K) - Improves drought resistance and disease control.',
      ],
      commonDiseases: [
        'Rice Blast - Fungal infection causing lesions on leaves and panicles.',
        'Sheath Blight - Fungal infection causing lesions on the leaf sheaths.',
        'Brown Plant Hopper - Insect pests that damage plant tissue.',
      ],
    },
    corn: {
      title: 'Corn',
      description:
        'Corn is a versatile crop, used for food, fodder, and industrial products. To achieve a high yield, it is crucial to understand its growing conditions, nutrient needs, and disease management.',
      growingRequirements: [
        'Ideal Climate - Grows best in warm temperatures (21-29°C) with moderate rainfall.',
        'Soil Type - Prefers well-drained, fertile soil with a pH between 6.0-6.8.',
        'Water Requirement - Requires regular irrigation, especially during pollination.',
        'Sowing Time - Best sown in March-April (Rabi season in India).',
      ],
      fertilizerNeeds: [
        'Nitrogen (N) - Enhances vegetative growth and kernel development.',
        'Phosphorus (P) - Essential for root growth and early plant development.',
        'Potassium (K) - Helps with disease resistance and grain development.',
      ],
      commonDiseases: [
        'Corn Blight - Fungal disease causing lesions on leaves.',
        'Corn Smut - A fungal infection that forms tumors on ears and kernels.',
        'Corn Earworm - Insect pest that damages kernels and ears.',
      ],
    },
  };

  const crop = cropInfo[selectedCrop];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">GENERAL INFO ABOUT CROPS</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <label className="block text-lg font-medium mb-2">Select a Crop</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="wheat">Wheat</option>
            <option value="rice">Rice</option>
            <option value="corn">Corn</option>
          </select>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-[#2F4F3F]">{crop.title}</h2>

          <p className="mb-8 text-gray-700">{crop.description}</p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Plant className="w-6 h-6 mr-2" />
                Key Growing Requirements:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                {crop.growingRequirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sun className="w-6 h-6 mr-2" />
                Fertilizer & Nutrient Needs:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                {crop.fertilizerNeeds.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bug className="w-6 h-6 mr-2" />
                Common Diseases & Pests:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                {crop.commonDiseases.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
