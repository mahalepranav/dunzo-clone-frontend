import React from "react";
import GiftStoreCard from "../components/storecard/GiftStoreCard";
import allgifts from '../data/Allgifts.json';
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allgifts = () => {
  return (
    <>
    <Header />
      <div className="container text-center">
        <h1>Flower Gift Stores in Pune</h1>
      </div>
      
      <div className="container text-center mb-5">
        <NavLink to="/gifts" className="header-button-link"><div className="row justify-content-center">
          {allgifts.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <GiftStoreCard img={val.img} name={val.giftstorename} area={val.address} dist={val.distance} />
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

export default Allgifts;
