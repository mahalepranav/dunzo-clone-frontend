import React from "react";
import RestaurantCard from "../components/storecard/RestaurantCard";
import allrestaurants from '../data/Allrestaurants.json'
import Header from "../components/header";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

const Allrestaurants = () => {
  return (
    <>
    <Header />
      <div className="container text-center">
        <h1>Restaurants in Pune</h1>
      </div>
      
      <div className="container text-center mb-5">
        <NavLink to="/restaurants" className="header-button-link"><div className="row justify-content-center">
          {allrestaurants.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <RestaurantCard img={val.img} name={val.restaurantname} area={val.address} dist={val.distance} />
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

export default Allrestaurants;
