import React from 'react';
import GroceriesCard from '../components/storecarddata/GroceriesCard';
import groceries from "../data/Groceries.json";
import Header from '../components/header';

const Groceries = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Groceries</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {groceries.map((val, index) => {
                return (
                    <>
                        <div className='col-md-2 text-center' key={index}>
                            <GroceriesCard img={val.img} name={val.groceryname} description={val.description} price={val.price}/>
                        </div>
                    </>
                );
            })}
        </div>
    </div>
    </>
  );
};

export default Groceries;