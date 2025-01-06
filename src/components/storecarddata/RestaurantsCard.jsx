import React from 'react';

const RestaurantsCard = ({img,price}) => {
  return (
    <div className='card mt-3 mb-3 bg-black'>
            <img 
            className='img-fluid'
            style={{height : '250px', width : '100%', borderRadius : '0px' }}
            src={img}
            alt=''/>
        <div className='card-body text-light'>
            &#8377;{price}&emsp;&emsp;&emsp;&emsp;
            <button className='btn btn-outline-light'>+ ADD</button>
        </div>
    </div>
  );
};

export default RestaurantsCard;
