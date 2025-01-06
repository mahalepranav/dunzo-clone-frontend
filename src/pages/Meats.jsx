import React from 'react';
import MeatsCard from '../components/storecarddata/MeatsCard';
import meats from "../data/Meats.json";
import Header from '../components/header';

const Meats = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Meat and Fish</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {meats.map((val, index) => {
                return (
                    <>
                        <div className='col-md-3 text-center' key={index}>
                            <MeatsCard img={val.img} name={val.meatname} description={val.description} price={val.price}/>
                        </div>
                    </>
                );
            })}
        </div>
    </div>
    </>
  );
};

export default Meats;