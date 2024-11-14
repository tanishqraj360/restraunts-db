// src/api.js
import axios from "axios";

const API_URL = "http://localhost:8766/api";

export const insertFood = (foodData) =>
  axios.post(`${API_URL}/insert`, foodData);
export const getFood = (id) => axios.get(`${API_URL}/data/${id}`);
export const updateFood = (foodData) =>
  axios.put(`${API_URL}/update`, foodData);
export const deleteFood = (id) => axios.delete(`${API_URL}/delete/${id}`);
