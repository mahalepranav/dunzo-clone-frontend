import React from "react";
import PetStoreCard from "../components/storecard/PetStoreCard";
import allpets from '../data/Allpets.json'
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allpets = () => {
  return (
    <>
    <Header />
      <div className="container text-center">
        <h1>Pet Shops in Pune</h1>
      </div>
      
      <div className="container text-center mb-5">
        <NavLink to="/pets" className="header-button-link"><div className="row justify-content-center">
          {allpets.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <PetStoreCard img={val.img} name={val.petstorename} area={val.address} dist={val.distance} />
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

export default Allpets;
