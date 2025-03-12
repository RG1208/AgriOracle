import mongoose from "mongoose";

const PriceForecastSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cropId: { type: mongoose.Schema.Types.ObjectId, ref: 'Crop', required: true },
    quantity: Number,
    investment: Number,
    priceHistory: [Number],
    predictedPrice: Number,
    district: String,
    mandi: String,
    confidenceScore: Number,
  }, { timestamps: true });
  
export const PriceForecast = mongoose.model('PriceForecast', PriceForecastSchema);