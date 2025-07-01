import React, { useState } from "react";
import API from "../api";

export default function CategoryForm({ refresh }) {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/categories", { categoryName });
    setCategoryName("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="Category Name" />
      <button type="submit">Add Category</button>
    </form>
  );
}