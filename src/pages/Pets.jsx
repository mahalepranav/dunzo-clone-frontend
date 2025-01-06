import React from 'react';
import PetsCard from '../components/storecarddata/PetsCard';
import pets from "../data/Pets.json";
import Header from '../components/header';

const Pets = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Pet Supplies</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {pets.map((val, index) => {
                return (
                    <>
                        <div className='col-md-3 text-center' key={index}>
                            <PetsCard img={val.img} name={val.name} description={val.description} price={val.price}/>
                        </div>
                    </>
                );
            })}
        </div>
    </div>
    </>
  );
};

export default Pets;