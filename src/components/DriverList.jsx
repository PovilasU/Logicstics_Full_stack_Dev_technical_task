import React from "react";

const DayBox = ({ isActive }) => (
  <div className={isActive ? "weekday weekday-active" : "weekday"}>&nbsp;</div>
);

const DriverList = ({ drivers }) => {
  return (
    <div className="row">
      {drivers.map((driver) => {
        const totalActivityTime = driver.traces.reduce((total, trace) => {
          return (
            total +
            trace.activity.reduce(
              (total, activity) => total + activity.duration,
              0
            )
          );
        }, 0);

        return (
          <div key={driver.vehicleRegistration}>
            <div className="row">
              <div class="col-sm border">
                {driver.forename} {driver.surname}
              </div>
              <div class="col-sm border">{driver.vehicleRegistration}</div>
              <div class="col-sm border">{totalActivityTime} </div>
              {[
                "2021-02-01",
                "2021-02-02",
                "2021-02-03",
                "2021-02-04",
                "2021-02-05",
                "2021-02-06",
                "2021-02-07",
              ].map((day) => {
                const isActive = driver.traces.some(
                  (trace) => trace.date === day
                );

                return <DayBox key={day} isActive={isActive} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DriverList;
