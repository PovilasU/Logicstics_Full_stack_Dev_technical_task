import React from "react";

const MenuList = ({ menuItems }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((menuItem) => (
          <li className="menu-item" key={menuItem.title}>
            {menuItem.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
