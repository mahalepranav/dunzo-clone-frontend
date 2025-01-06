import React from 'react';

const GroceriesCard = ({img,name,price,description}) => {
  return (
    <div className='card mt-3'>
        <div className='card-header bg-white'>
            <img 
            className='img-fluid'
            style={{height : '150px'}}
            src={img}
            alt=''/>
        </div>
        <div className='card-footer'>
            <h5 className='text-dark'>{name}</h5>
            <p className='text-muted'>{description}</p>
            <p>Price:- <span className='text-success'>&#8377;{price}</span></p>
            <button className='btn btn-outline-secondary'>+ ADD</button>
        </div>
    </div>
  );
};

export default GroceriesCard;