import React from 'react';

const FruitsCard = ({img,name,price,description}) => {
  return (
    <div className='card mt-3 mb-3'>
        <div className='card-header bg-white'>
            <img 
            className='img-fluid'
            style={{height : '150px'}}
            src={img}
            alt=''/>
        </div>
        <div className='card-footer'>
            <h5 className='text-dark'>{name}</h5>
            <p><span className='text-primary'>{description}</span> Price:- <span className='text-success'>&#8377;{price}</span></p>
            <button className='btn btn-outline-secondary'>+ ADD</button>
        </div>
    </div>
  );
};

export default FruitsCard;
