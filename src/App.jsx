import React from "react";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner/banner";
import { Catalog } from "./components/catalog/catalog";
import { Phones } from "./components/phones/phones";
import { Ads } from "./components/ads";

const App = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="mb-4">
        <Banner />
      </div>
      <Catalog />
      <Phones />
      <Ads />
    </div>
  );
};

export default App;
