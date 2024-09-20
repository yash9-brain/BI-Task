import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import FlightCard from "./components/FlightCard";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="hero">
      <Header />
      <SearchForm />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
