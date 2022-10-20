import React from "react";
import { useState } from "react";
import "./Categories.css";

export const Categories = () => {
  const [category] = useState([
    { categoryName: "Jeans" },
    { categoryName: "Camisas" },
    { categoryName: "Suéter" },
    { categoryName: "Calças Moletom" },
    { categoryName: "Camisas Moletom" },
  ]);

  return (
    <div>
      <ul className="categories">
        {category.map((category) => (
          <li>
            <a href="#">{category.categoryName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
