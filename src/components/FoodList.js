import React, { useState } from "react";
import { getFood, deleteFood } from "../api";
import toast from "react-hot-toast";
import styles from "./FoodList.module.css";

function FoodList() {
  const [foodItems, setFoodItems] = useState([]);
  const [searchId, setSearchId] = useState("");

  // Fetch food by ID
  const fetchFood = async (id) => {
    try {
      const response = await getFood(id);
      if (response.data && response.data.data) {
        setFoodItems([response.data.data]); // Show only the fetched food item
      } else {
        toast.error("No food item found with this ID.", {
          position: "top-right",
        });
        setFoodItems([]);
      }
    } catch (error) {
      console.error("Failed to retrieve food items:", error);
      toast.error("Failed to retrieve food items.", { position: "top-right" });
    }
  };

  // Delete a food item
  const handleDelete = async (id) => {
    try {
      await deleteFood(id);
      setFoodItems(foodItems.filter((item) => item.id !== id)); // Update the list
      toast.success("Food item deleted successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.error("Failed to delete food item:", error);
      toast.error("Failed to delete food item.", { position: "top-right" });
    }
  };

  return (
    <div className={styles.listContainer}>
      <h2>Food List</h2>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Enter Food ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className={styles.searchInput}
        />
        <button
          onClick={() => fetchFood(searchId)}
          className={styles.searchButton}
        >
          Search
        </button>
      </div>

      {foodItems.length > 0 && (
        <div>
          {foodItems.map((item) => (
            <div key={item.id} className={styles.foodItem}>
              <div>
                <span className={styles.foodName}>{item.name}</span> -{" "}
                {item.type}
              </div>
              <div>Rating: {item.rating}</div>
              <div>Location: {item.location}</div>
              <div>
                Top Food: {item.top_food} ({item.top_food_type})
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      {foodItems.length === 0 && (
        <p>No food items found. Try searching with a valid Food ID.</p>
      )}
    </div>
  );
}
export default FoodList;
