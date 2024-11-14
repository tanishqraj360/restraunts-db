// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddFood from "./components/AddFood";
import FoodList from "./components/FoodList";
import UpdateFood from "./components/UpdateFood";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <div>
        <nav className={styles.navbar}>
          <Link className={styles.navLink} to="/">
            Add Food
          </Link>{" "}
          |{" "}
          <Link className={styles.navLink} to="/list">
            View Food
          </Link>{" "}
          |{" "}
          <Link className={styles.navLink} to="/update">
            Update Food
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<AddFood />} />
          <Route path="/list" element={<FoodList />} />
          <Route path="/update" element={<UpdateFood />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
