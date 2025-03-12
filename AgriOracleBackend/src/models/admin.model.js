import mongoose from "mongoose";

const AdminPanelSchema = new mongoose.Schema(
    {
    districtWiseResponse: Object,
    newUsers: Object,
    avgTimeSpent: Object,
    accessLogs: [String],
  }, { timestamps: true });
  
export const AdminPanel = mongoose.model('AdminPanel', AdminPanelSchema);