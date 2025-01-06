import React from "react";
import "./StoreCard.css";

const MeatStoreCard = ({img,name,dist,area}) => {
  return (
    <>
      <div className="grocery-card">
        <div className="g-card-first">
          <img
            className="g-card-img img-fluid w-75"
            style={{height: '100px'}}
            src={img}
            alt="gimg"
          />
        </div>
        <div className="g-card-content">
          <h4 className="text-dark">{name}</h4>
          <p className="text-muted">{area}</p>
          <p className="text-success">{dist}</p>
        </div>
      </div>      
    </>
  );
};

export default MeatStoreCard;
