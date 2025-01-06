import React from 'react';
import RestaurantsCard from '../components/storecarddata/RestaurantsCard';
import restaurants from "../data/Restaurants.json";
import Header from '../components/header';

const Vegefruits = () => {
  return (
    <>
    <Header/>
    <div className='container text-center'>
        <h1 className='text-dark mt-4'>Restaurant Menu</h1>
    </div>

    <div className='container'>
        <div className='row justify-content-center'>
            {restaurants.map((val, index) => {
                return (
                    <>
                        <div className='col-md-3 text-center' key={index}>
                            <RestaurantsCard img={val.img} price={val.price}/>
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

// name={val.restaurantname} description={val.description}