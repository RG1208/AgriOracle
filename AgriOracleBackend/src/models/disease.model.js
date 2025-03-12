import mongoose from "mongoose";

const DiseaseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cropId: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
    imageUrl: String,
    detectedDisease: String,
    severityLevel: Number,
    recoveryDays: Number, 
    roadmap: String,
    recommendedSolution: String,
    confidenceScore: Number,
  }, { timestamps: true });
  
export const Disease = mongoose.model('Disease', DiseaseSchema);