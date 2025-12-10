import React from "react";
import { useCategories } from "../../hooks/useCategories";

export default function CategoriesList() {
  const categories = useCategories();

  return (
    <div>
      {categories.map(cat => (
        <div key={cat.id}>
          <h3>{cat.name}</h3>
          <img src={cat.banner} alt={cat.name} />
        </div>
      ))}
    </div>
  );
}
