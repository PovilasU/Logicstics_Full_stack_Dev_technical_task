import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => (
          <li className="menu-item" key={menuItem.title}>
            <Link to={`${menuItem.url}`}>{menuItem.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
