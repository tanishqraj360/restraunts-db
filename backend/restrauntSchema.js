import mongoose from "mongoose";

const restrauntSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  top_food_type: {
    type: String,
    required: true,
  },
  top_food: {
    type: String,
    required: true,
  },
});

export const Food = mongoose.model("Food", restrauntSchema);
