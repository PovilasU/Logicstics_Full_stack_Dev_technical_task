import React from "react";

const MenuList = ({ menu }) => {
  return (
    <nav>
      <ul>
        {menu.map((menuItem) => (
          <li className="menu-item" key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
