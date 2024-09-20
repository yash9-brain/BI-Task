import React from "react";

const SearchForm = () => {
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
      <div className="col-span-1 bg-[#DBDDED] p-5 border-b border-black rounded-t-3xl">
        <label className="font-medium">Where would you like to travel ?</label>
        <input
          type="text"
          placeholder="Enter City"
          className="w-[90%] px-4 py-2 mt-1 border rounded-full"
        />
        <button className="bg-white px-4 py-2 rounded-full mx-2">
          {" "}
          + Add City
        </button>
      </div>
      <div className="bg-[#DBDDED] p-5 rounded-b-3xl">
        <h1 className="text-xl font-bold">Travel Details</h1>
        <div className="flex w-full justify-center gap-5 p-5">
          <div className="flex bg-white items-center w-1/2 justify-center gap-5 p-3 rounded-full">
            <label className="font-bold">Departure</label>
            <input
              type="text"
              placeholder="Departure City"
              className="w-full  outline-none"
            />
          </div>
          <div className="flex bg-white items-center w-1/2 justify-center gap-5 p-3 rounded-full">
            <label className="font-bold">Return</label>
            <input
              type="text"
              placeholder="Return City"
              className="w-full  outline-none"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 p-5">
          <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
            <label className="text-xl font-bold">Earliest Departure</label>
            <input
              type="date"
              placeholder="00"
              className="px-4 py-2 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
            <label className="text-xl font-bold">Last Return</label>
            <input
              type="date"
              placeholder="00"
              className="px-4 py-2 mt-1 rounded-lg w-full outline-none"
            />
          </div>
          <div className="flex flex-col items-center bg-white w-2/6 p-2 rounded-3xl">
            <label className="text-xl font-bold">Number of Travellers</label>
            <input
              type="number"
              placeholder="00"
              className="px-4 py-2 mt-1 rounded-lg w-full outline-none"
            />
          </div>
        </div>
      </div>
      <button className="bg-[#7179BD] text-white px-4 py-2 rounded-full mx-auto my-4">
        Search Flights
      </button>
    </div>
  );
};

export default SearchForm;
