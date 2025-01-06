import React from "react";
import MeatStoreCard from "../components/storecard/MeatStoreCard";
import allmeats from '../data/Allmeats.json'
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allmeats = () => {
  return (
    <>
    <Header />
      <div className="container text-center">
        <h1>Meat and Fish Stores in Pune</h1>
      </div>
      
      <div className="container text-center mb-5">
      <NavLink to="/meats" className="header-button-link"><div className="row justify-content-center">
          {allmeats.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <MeatStoreCard img={val.img} name={val.meatstorename} area={val.address} dist={val.distance} />
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

export default Allmeats;
