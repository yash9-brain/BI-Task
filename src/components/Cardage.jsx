import React from "react";
import FlightCard from "./FlightCard";

const Cardage = () => {
  return (
    <div className="w-full p-10">
      <div className="flex items-center justify-center gap-10">
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
};

export default Cardage;
