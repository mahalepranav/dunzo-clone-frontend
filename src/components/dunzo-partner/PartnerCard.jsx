import React from 'react'
import "./partner.css"

const PartnerCard = ({img, title, name}) => {
  return (
    <>
      <div className="partner-card">
        <div className="p-card-first">
          <img
            className="p-card-img img-fluid w-100"
            style={{height: '100px'}}
            src={img}
            alt="gimg"
          />
        </div>
        <div className="g-card-content">
          <h4 className="text-dark">{title}</h4>
          <p className="text-muted">{name}</p>
        </div>
      </div>      
    </>
  )
}

export default PartnerCard;