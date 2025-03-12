import mongoose from "mongoose";

const CropSchema = new mongoose.Schema({
    cropName: { type: String, unique: true, required: true },
    about: String,
    plantationTechnique: String,
    benefits: String,
    avgProfitPerAcre: String,
    soilType: String,
    waterNeed: String,
    commonDiseases: String,
    nutrients: String,
    season: String,
  }, { timestamps: true });
  
export const Crop = mongoose.model('Crop', CropSchema);