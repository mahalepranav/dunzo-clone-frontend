import React from 'react';
import GiftsCard from '../components/storecarddata/GiftsCard';
import gifts from "../data/Gifts.json";
import Header from '../components/header';

const Gifts = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Meat and Fish</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {gifts.map((val, index) => {
                return (
                    <>
                        <div className='col-md-3 text-center' key={index}>
                            <GiftsCard img={val.img} name={val.giftname} description={val.description} price={val.price}/>
                        </div>
                    </>
                );
            })}
        </div>
    </div>
    </>
  );
};

export default Gifts;