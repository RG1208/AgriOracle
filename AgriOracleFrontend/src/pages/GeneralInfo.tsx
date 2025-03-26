import React, { useState } from 'react';
import { Plane as Plant, Droplet, Sun, Bug } from 'lucide-react';

const GeneralInfo = () => {
  const [selectedCrop, setSelectedCrop] = useState('wheat');

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
          <h2 className="text-3xl font-bold mb-6 text-[#2F4F3F]">WHEAT</h2>
          
          <p className="mb-8 text-gray-700">
            Wheat is one of the most important cereal crops globally, serving as a staple
            food for billions. Proper knowledge of its growth cycle, soil conditions, and
            disease management can significantly improve yield and quality.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Plant className="w-6 h-6 mr-2" />
                Key Growing Requirements:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Ideal Climate - Grows best in cool temperatures (10-25°C) with moderate rainfall.</li>
                <li>Soil Type - Prefers well-drained loamy or clayey soil with a pH between 6.0- 7.5.</li>
                <li>Water Requirement - Requires 4-6 irrigations, with critical stages being crown root initiation, tillering and grain filling.</li>
                <li>Sowing Time - Best sown in October-November (Rabi season in India).</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Sun className="w-6 h-6 mr-2" />
                Fertilizer & Nutrient Needs:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Nitrogen (N) - Boosts leaf and grain development.</li>
                <li>Phosphorus (P) - Strengthens root growth and plant establishment.</li>
                <li>Potassium (K) - Enhances disease resistance and drought tolerance.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Bug className="w-6 h-6 mr-2" />
                Common Diseases & Pests:
              </h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Rust (Yellow, Brown, & Black) - Fungal infection causing yellow or brown streaks on leaves.</li>
                <li>Powdery Mildew - White powdery coating on leaves.</li>
                <li>Loose Smut - Causes black spores in the grain.</li>
                <li>Aphids & Armyworms - Suck plant sap, weakening growth.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;