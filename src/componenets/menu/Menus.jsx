import React from "react";
import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import "./menus.css";
function Menu() {
  const { foods, loading } = useGlobalContext();

  if (loading) {
    <Loading />;
  }
  return (
    <div className="menu-container">
      {foods.map((food) => {
        const { id, img, category, tag } = food;
        return (
          <div className="menu-card" key={id}>
            <img src={img} alt="" />
            <h2>{category}</h2>
            <p>{tag}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
