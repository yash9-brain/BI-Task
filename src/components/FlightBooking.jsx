// FlightBooking.js
import React from "react";

const FlightBooking = ({ flight }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Flight Booking</h1>

      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">
            From: {flight.itineraries[0].segments[0].departure.iataCode}
          </h2>
          <p>
            {new Date(
              flight.itineraries[0].segments[0].departure.at
            ).toLocaleString()}
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            To:{" "}
            {
              flight.itineraries[0].segments[
                flight.itineraries[0].segments.length - 1
              ].arrival.iataCode
            }
          </h2>
          <p>
            {new Date(
              flight.itineraries[0].segments[
                flight.itineraries[0].segments.length - 1
              ].arrival.at
            ).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md">
          Price: {flight.price.currency} {flight.price.grandTotal}
        </h3>
      </div>

      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Confirm Booking
      </button>
    </div>
  );
};

export default FlightBooking;
