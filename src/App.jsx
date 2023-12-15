import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DriverList from "./components/DriverList";
import MenuList from "./components/MenuList";
import SearchBox from "./components/SearchBox";
import driversData from "./data/drivers.json";
import menuData from "./data/menu.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItemPage from "./pages/MenuItemPage";
import "./App.css";

const App = () => {
  const [drivers, setDrivers] = useState(driversData.data);
  const [menuItems, setMenuItems] = useState(menuData);

  useEffect(() => {
    // Fetch data from API or other sources if needed
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredDrivers = driversData.data.filter(
      (driver) =>
        driver.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        driver.vehicleRegistration
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    setDrivers(filteredDrivers);
  };

  return (
    <Router>
      <div>
        <Header />
        <MenuList menuItems={menuItems.data} />
        <Routes>
          <Route path="/menu/:id" element={<MenuItemPage />} />
          <Route
            path="/"
            element={
              <>
                <SearchBox onSearch={handleSearch} />
                <DriverList drivers={drivers} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
