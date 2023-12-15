import React from "react";
import { useParams } from "react-router-dom";
import menuData from "../data/menu.json";

const MenuItemPage = () => {
  const { id } = useParams();
  const menuItem = menuData.find((item) => item.id === id);

  if (!menuItem) {
    return <div>Menu item not found</div>;
  }

  return (
    <div>
      <h2>{menuItem.name}</h2>
      <p>Description: {menuItem.description}</p>
    </div>
  );
};

export default MenuItemPage;
