import React from 'react';
import FruitsCard from '../components/storecarddata/FruitsCard';
import vegefruits from "../data/Vegefruits.json";
import Header from '../components/header';

const Vegefruits = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Fruits & Vegetables</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {vegefruits.map((val, index) => {
                return (
                    <>
                        <div className='col-md-2 text-center' key={index}>
                            <FruitsCard img={val.img} name={val.vegefruitname} description={val.description} price={val.price}/>
                        </div>
                    </>
                );
            })}
        </div>
    </div>
    </>
  )
}

export default Vegefruits;