import { useState } from "react";
import DonationContext from "./DonationContext";

const DonationState = (props) => {
    const donations = [
        {
          id: 1,
          name: "Kubra",
          collected: 2000,
          total: 5000,
        },
        {
          id: 2,
          name: "Aiza",
          collected: 3500,
          total: 5000,
        },
        {
          id: 3,
          name: "Areeb",
          collected: 1200,
          total: 5000,
        },
        {
          id: 4,
          name: "Seema",
          collected: 4000,
          total: 5000,
        }
      ];
  

  return (
    <DonationContext.Provider value={{ donations }}>
      {props.children}
    </DonationContext.Provider>
  );

};

export default DonationState;