import { Food } from "./restrauntSchema.js";

export const insertData = async (req, res) => {
  const { id, name, type, location, rating, top_food_type, top_food } =
    req.body;

  if (
    !id ||
    !name ||
    !type ||
    !location ||
    !rating ||
    !top_food_type ||
    !top_food
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const restraunt = new Food({
      id,
      name,
      type,
      location,
      rating,
      top_food_type,
      top_food,
    });
    const result = await restraunt.save();
    res
      .status(201)
      .json({ message: "Restraunt inserted successfully", data: result });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "Failed to insert data" });
  }
};

export const getData = async (req, res) => {
  const id = req.params.id;

  try {
    const food = await Food.findOne({ id });

    if (food) {
      res.status(200).json({ message: "Record found", data: food });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};

export const updateData = async (req, res) => {
  const { id, name, type, location, rating, top_food_type, top_food } =
    req.body;

  try {
    const result = await Food.updateOne(
      { id },
      { name, type, location, rating, top_food_type, top_food },
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Record updated successfully" });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Failed to update data" });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Food.deleteOne({ id });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: "Record deleted successfully" });
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Failed to delete data" });
  }
};
