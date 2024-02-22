import React from "react";
import MyAppointmentItem from "./my_appointment_item";

const AppointmentList = ({ appointments }) => {
  console.log(appointments);

  return (
    <div>
      {appointments.map((appointment) => (
        <MyAppointmentItem appointment={appointment}></MyAppointmentItem>
      ))}
    </div>
  );
};

export default AppointmentList;
