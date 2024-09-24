import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="hero">
      <Header />
      <SearchForm />
      <Footer className="bgI" />
    </div>
  );
};

export default App;
