import React, { useState } from "react";
import FlightResults from "./FlightResults";
import Cardage from "./Cardage";
import Aeroplane from "../assets/Aeroplane.png";
import Arrow from "../assets/Arrow.png";
import AeroplaneFlight from "../assets/AirplaneFlight.png";
import Calendar from "../assets/Calendar.png";
import User from "../assets/User.png";

const SearchForm = () => {
  const [departure, setDeparture] = useState("");
  const [returnCity, setReturnCity] = useState("");
  const [earliestDeparture, setEarliestDeparture] = useState("");
  const [lastReturn, setLastReturn] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="p-6 rounded-lg w-full mx-auto flex flex-col">
      <div className="mb-5 flex items-center justify-between">
        <div className="font-bold">
          <h2 className="text-4xl">Search Flights</h2>
          <p>Intelligent Search</p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="border border-black rounded-3xl w-fit px-3 py-1">
            Go to Manual Search
          </div>
          <div className="border border-black rounded-3xl w-fit px-3 py-1">
            Summary
          </div>
          <div className="border border-black rounded-3xl w-fit px-3 py-1">
            Save Trip
          </div>
        </div>
      </div>
      <div className="bg-[#DBDDED] p-10 rounded-3xl">
        <h1 className="text-xl font-bold">Where would you like to travel?</h1>
        {showResults ? (
          <div className="flex items-center justify-between gap-5 border border-black bg-white p-3 rounded-full m-5">
            <div className="flex items-center justify-center gap-5">
              <img src={Aeroplane} height={20} width={20} />
              {departure}
              <img src={Arrow} height={20} width={20} className="ml-2" />
              {returnCity}
            </div>
            <div className="flex items-center gap-5">
              <img src={AeroplaneFlight} height={20} width={20} />
              Flight
            </div>
            <div className="flex items-center gap-5">
              <img src={Calendar} height={20} width={20} />
              {earliestDeparture}
              {"  -  "}
              {lastReturn}
            </div>
            <div className="flex items-center gap-5">
              <img src={User} height={20} width={20} />
              {travellers}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="col-span-1 p-4 border-b border-black">
              <input
                type="text"
                placeholder="Enter City"
                className="w-[90%] px-4 py-2 mt-1 border rounded-full"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
              />
              <button className="bg-white px-4 py-2 rounded-full mx-2">
                + Add City
              </button>
            </div>

            <h1 className="text-xl font-bold m-5">Travel Details</h1>

            <div className="flex w-full justify-center gap-5 p-4">
              <div className="flex bg-white items-center w-1/2 justify-center gap-5 p-3 rounded-full">
                <label className="font-bold">Departure</label>
                <input
                  type="text"
                  placeholder="Departure City"
                  className="w-full outline-none"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>

              <div className="flex bg-white items-center w-1/2 justify-center gap-5 p-3 rounded-full">
                <label className="font-bold">Return</label>
                <input
                  type="text"
                  placeholder="Return City"
                  className="w-full outline-none"
                  value={returnCity}
                  onChange={(e) => setReturnCity(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 p-4">
              <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
                <label className="text-xl font-bold">Earliest Departure</label>
                <input
                  type="date"
                  className="px-4 py-2 rounded-lg w-full outline-none"
                  value={earliestDeparture}
                  onChange={(e) => setEarliestDeparture(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
                <label className="text-xl font-bold">Last Return</label>
                <input
                  type="date"
                  className="px-4 py-2 mt-1 rounded-lg w-full outline-none"
                  value={lastReturn}
                  onChange={(e) => setLastReturn(e.target.value)}
                />
              </div>

              <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
                <label className="text-xl font-bold">
                  Number of Travellers
                </label>
                <input
                  type="number"
                  className="px-4 py-2 mt-1 rounded-lg w-full outline-none"
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  min="1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#7179BD] text-white px-4 py-2 rounded-full mx-auto my-4"
            >
              Search Flights
            </button>
          </form>
        )}
      </div>

      {showResults ? (
        <FlightResults
          departure={departure}
          returnCity={returnCity}
          earliestDeparture={earliestDeparture}
          lastReturn={lastReturn}
          travellers={travellers}
        />
      ) : (
        <Cardage />
      )}
    </div>
  );
};

export default SearchForm;
