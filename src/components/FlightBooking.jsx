// FlightBooking.js
import React from "react";
import Aeroplane from "../assets/Aeroplane.png";
import Line from "../assets/Line.png";
import Location from "../assets/Location.png";
import Flight from "../assets/Flight.png";

const FlightBooking = ({ flight }) => {
  return (
    <div className="bg-[#DBDDED] w-full my-10 rounded-3xl flex flex-col items-center justify-center">
      <div className="flex items-center gap-5 w-fit p-5 justify-between mb-6 bg-white rounded-3xl m-10">
        <div>
          <h1 className="text-2xl font-bold text-center p-5">
            {flight.itineraries[0].segments[0].departure.iataCode}
            <p className="text-sm font-light">
              {new Date(
                flight.itineraries[0].segments[0].departure.at
              ).toLocaleString()}
            </p>
          </h1>
          <h1 className="text-2xl font-bold text-center p-5">
            {
              flight.itineraries[0].segments[
                flight.itineraries[0].segments.length - 1
              ].arrival.iataCode
            }
            <p className="text-sm font-light">
              {new Date(
                flight.itineraries[0].segments[
                  flight.itineraries[0].segments.length - 1
                ].arrival.at
              ).toLocaleString()}
            </p>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={Aeroplane} height={20} width={20} />
          <img src={Line} className="h-20 w-1" />
          <img src={Location} height={20} width={20} />
        </div>
        <img src={Flight} height={200} width={200} />
      </div>

      <div className=" text-center bg-[#6B71B2] text-white w-full rounded-b-3xl p-5">
        <p className="text-xl font-bold mb-2">
          {flight.price.currency} {flight.price.grandTotal}
        </p>
        <button
          onClick={() => setSelectedFlight(flight)} // Pass flight to selectedFlight
          className="text-black bg-white py-2 px-4 rounded-full"
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default FlightBooking;
