import React from "react";

const DriverList = ({ drivers }) => {
  return (
    <div className="driver-list">
      {drivers.map((driver) => (
        <div className="driver" key={driver.id}>
          <h2>
            {driver.forename} {driver.surname}
          </h2>
          <h2>{driver.surname}</h2>
          <p>Registration : {driver.vehicleRegistration}</p>
          <p>Total Acivity Time: TODO </p>
        </div>
      ))}
    </div>
  );
};

export default DriverList;
