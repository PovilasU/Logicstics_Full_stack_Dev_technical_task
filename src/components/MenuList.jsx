import React from "react";
import { Link } from "react-router-dom";

const MenuList = ({ menuItems }) => {
  return (
    <nav className="col-md-1">
      <ul class="nav flex-column">
        {menuItems.map((menuItem) => (
          <li className="nav-item" key={menuItem.title}>
            <Link className="nav-link" to={`${menuItem.url}`}>
              {menuItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;
