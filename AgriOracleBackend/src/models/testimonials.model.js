import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    feedback: { type: String, required: true },
  }, { timestamps: true });
  
export const Testimonial = mongoose.model('Testimonial', TestimonialSchema);