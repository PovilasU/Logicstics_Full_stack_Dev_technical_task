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
import About from "./components/About"; //
import Drivers from "./components/Drivers"; //
import Vehicles from "./components/Vehicles"; //

const App = () => {
  const [drivers, setDrivers] = useState(driversData.data);
  const [menuItems, setMenuItems] = useState(menuData);

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
      <Header />
      <div className="container-fluid">
        <div className="row">
          <MenuList menuItems={menuItems.data} />

          <div className="col-md-11">
            <div className="container">
              <Routes>
                <Route path="/menu/:id" element={<MenuItemPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/drivers" element={<Drivers />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route
                  path="/"
                  element={
                    <>
                      <SearchBox onSearch={handleSearch} />
                      <div className="row fw-bold">
                        <div className="col-sm">Driver Name</div>
                        <div className="col-sm">Vehicle Reg</div>
                        <div className="col-sm">Total Activity Duration</div>
                        <div className="weekday-label ">Mon</div>
                        <div className="weekday-label">Tue</div>
                        <div className="weekday-label">Wed</div>
                        <div className="weekday-label">Thu</div>
                        <div className="weekday-label">Fri</div>
                        <div className="weekday-label">Sat</div>
                        <div className="weekday-label">Sun</div>
                      </div>

                      <DriverList drivers={drivers} />
                    </>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
