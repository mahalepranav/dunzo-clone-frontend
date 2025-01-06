import React from 'react';
import PartnerCard from "../components/dunzo-partner/PartnerCard.jsx";
import allpartners from "../data/Allpartners.json";
import Footer from '../components/footer/index.js';
import Header from '../components/header/index.js';

const Allpartners = () => {
  return (
    <>
    <Header />
    <div className='bg-color mb-5'>
        <div className='container'>
            <img src="http://localhost:3000/assets/images/dunzo.png" alt='' className='img-fluid mt-5'/>
            <div className='part-font pt-5'>Become a delivery <br/>superhero and start earning</div>
            <img src="http://localhost:3000/assets/images/divider-white.png" alt='' className='img-fluid pt-5'/>
            <div className='part-font-1 pt-5'>With Dunzo, you can have flexible working hours and help us make deliveries in your city.</div>
            <button className='btn btn-dark mt-5 mb-5 px-5 py-3'>BECOME A DUNZO PARTNER</button>
        </div>
    </div>

    <div className="container text-center mb-5">
        <div className="row justify-content-center">
          {allpartners.map((val, index) => {
            return (
              <>
                <div className="col-md-6" key={index}>
                  <PartnerCard img={val.img} title={val.imgtitle} name={val.description} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Allpartners;