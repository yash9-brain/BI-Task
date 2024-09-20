import React from "react";

const FlightCard = () => {
  return (
    <div className="bg-white relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1724691156679-5e42bb8ead52?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Flight Destination"
        className="rounded-xl mb-4 w-full"
      />
      <div className="absolute bg-white top-[70%] w-80 left-[8%] p-2 rounded-xl flex flex-col items-center shadow-lg">
        <h3 className="text-xl font-semibold">Columbia | Peru | Brazil</h3>
        <p className="text-gray-500 mt-2">
          Explore The Charming And Historic Cities Of Amsterdam, Utrecht,
          Rotterdam, and more.
        </p>
        <div className="flex justify-center gap-5 items-center mt-4">
          <span className="text-sm bg-[#DBDDED] rounded-full p-2">
            3 Countries,
          </span>
          <span className="text-sm bg-[#DBDDED] rounded-full p-2">
            5 Cities
          </span>
          <span className="text-sm bg-[#DBDDED] rounded-full p-2">
            18-21 Days
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
