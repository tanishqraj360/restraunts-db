// src/components/AddFood.js
import React, { useState } from "react";
import { insertFood } from "../api";
import styles from "./AddFood.module.css";

function AddFood() {
  const [food, setFood] = useState({
    id: "",
    name: "",
    type: "",
    location: "",
    rating: "",
    top_food_type: "",
    top_food: "",
  });

  const handleChange = (e) => {
    setFood({ ...food, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await insertFood(food);
      alert("Food item added successfully!");
      setFood({
        id: "",
        name: "",
        type: "",
        location: "",
        rating: "",
        top_food_type: "",
        top_food: "",
      });
    } catch (error) {
      alert("Failed to add food item.");
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Add Food Item</h2>
      {Object.keys(food).map((key) => (
        <div className={styles.formGroup} key={key}>
          <label className={styles.formLabel}>{key}</label>
          <input
            className={styles.formInput}
            name={key}
            value={food[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button className={styles.submitButton} type="submit">
        Add Food
      </button>
    </form>
  );
}

export default AddFood;
