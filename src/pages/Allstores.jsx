import React from "react";
import StoreCard from "../components/storecard/StoreCard";
import allstore from '../data/Allstores.json'
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allstores = () => {
  return (
    <>
    <Header />
      <div className="container text-center">
        <h1>Groceries Stores in Pune</h1>
      </div>
    
      <div className="container text-center mb-5">
        <NavLink to="/groceries" className="header-button-link"><div className="row justify-content-center">
          {allstore.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <StoreCard img={val.img} name={val.storename} area={val.address} dist={val.distance} />
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

export default Allstores;


  