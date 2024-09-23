import React, { useState, useEffect } from "react";
import axios from "axios";
import Flight from "../assets/Flight.png";
import Aeroplane from "../assets/Aeroplane.png";
import Route from "../assets/Route.png";
import Location from "../assets/Location.png";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return new Date(dateString).toLocaleString(undefined, options);
};

const FlightResults = ({
  departure,
  returnCity,
  earliestDeparture,
  lastReturn,
  travellers,
}) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const getToken = async () => {
    const response = await fetch(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "FBuudjAPIsmi7f3ar2bbfpysaRzbabxA",
          client_secret: "Hk47Ozo5hPXAgtuO",
        }),
      }
    );

    const data = await response.json();
    return data.access_token;
  };

  const fetchFlights = async (token) => {
    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v2/shopping/flight-offers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            originLocationCode: departure,
            destinationLocationCode: returnCity,
            departureDate: earliestDeparture,
            returnDate: lastReturn,
            adults: travellers,
            max: 5,
          },
        }
      );

      setFlights(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching flights", error.response.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    const getFlights = async () => {
      const token = await getToken();
      if (token) {
        fetchFlights(token);
      }
    };

    getFlights();
  }, [departure, returnCity, earliestDeparture, lastReturn, travellers]);

  if (loading) {
    return <p>Loading flights...</p>;
  }

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 bg-gray-100 rounded-lg">
        <h2 className="font-bold text-lg">Filters</h2>
        <div className="my-4">
          <label className="block text-sm">Flight Outbound</label>
          <input type="range" min="0" max="24" className="w-full" />
        </div>
        <div className="my-4">
          <label className="block text-sm">Flight Inbound</label>
          <input type="range" min="0" max="24" className="w-full" />
        </div>
        <div className="my-4">
          <label className="block text-sm">Total Duration</label>
          <input type="range" min="0" max="24" className="w-full" />
        </div>
        <div className="my-4">
          <label className="block text-sm">Maximum Stopovers</label>
          <select className="w-full border p-2 rounded-lg">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="my-4">
          <label className="block text-sm">Rewards Partner</label>
          <select className="w-full border p-2 rounded-lg">
            <option value="emirates">Emirates</option>
            <option value="qatar">Qatar Airways</option>
          </select>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">
          Reset Filters
        </button>
      </aside>

      <main className="w-3/4 p-4 bg-[#DBDDED]">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-bold">100 Total Routes Found</div>
          <div>
            <label className="mr-2">Currency:</label>
            <select className="border p-2 rounded-lg">
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
            </select>
          </div>
        </div>

        {flights.length > 0 ? (
          flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-lg shadow-md mb-10 flex justify-between gap-5 items-center"
            >
              <img src={Flight} height={150} width={150} className="ml-7" />

              <div className="flex items-center justify-center gap-5 border-l-2 border-r-2 border-black p-5">
                <div className="text-2xl font-bold flex flex-col items-center">
                  {flight.itineraries[0].segments[0].departure.iataCode}
                  <p className="text-sm font-light">
                    {" "}
                    {formatDate(flight.itineraries[0].segments[0].departure.at)}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="flex justify-center items-center gap-1">
                    <img src={Aeroplane} height={20} width={20} />
                    <img src={Route} height={100} width={200} />
                    <img src={Location} height={20} width={20} />
                  </span>
                  <p className="text-sm font-bold">
                    Airline: {flight.validatingAirlineCodes.join(", ")}
                  </p>
                </div>
                <div className="text-2xl font-bold flex flex-col items-center">
                  {
                    flight.itineraries[0].segments[
                      flight.itineraries[0].segments.length - 1
                    ].arrival.iataCode
                  }
                  <p className="text-sm font-light">
                    {flight.itineraries[1]?.segments[0]?.departure
                      ? formatDate(
                          flight.itineraries[1].segments[0].departure.at
                        )
                      : "N/A"}
                  </p>
                </div>
              </div>

              <div className=" text-center bg-[#6B71B2] text-white p-5 rounded-r-lg">
                <p className="text-xl font-bold mb-2">
                  {flight.price.currency} {flight.price.grandTotal}
                </p>
                <button className="text-black bg-white py-2 px-4 rounded-full">
                  Book
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No flights found</p>
        )}
        <button className="w-full bg-gray-200 text-gray-700 py-2 mt-4 rounded-lg">
          Load More
        </button>
      </main>
    </div>
  );
};

export default FlightResults;
