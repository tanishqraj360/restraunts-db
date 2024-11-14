// src/components/UpdateFood.js
import React, { useState } from "react";
import { updateFood } from "../api";
import styles from "./UpdateFood.module.css";

function UpdateFood() {
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
      await updateFood(food);
      alert("Food item updated successfully!");
    } catch {
      alert("Failed to update food item.");
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Update Food Item</h2>
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
        Update Food
      </button>
    </form>
  );
}

export default UpdateFood;
