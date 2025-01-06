import React, { useState } from "react";
import FruitStoreCard from "../components/storecard/FruitStoreCard";
import allfruit from '../data/Allfruits.json'
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allfruits = () => {



  return (
    <>

    <Header />
      <div className="container text-center">
        <h1>Fruits & Vegetables Stores in Pune</h1>
      </div>
    
      <div className="container text-center mb-5">
        <NavLink to="/vegefruits" className="header-button-link"><div className="row justify-content-center">
          {allfruit.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <FruitStoreCard img={val.img} name={val.fruitstorename} area={val.address} dist={val.distance} />
                </div>
              </>
            );
          })}
        </div></NavLink>
      </div>
    <Footer />
    </>
  );
};

export default Allfruits;
