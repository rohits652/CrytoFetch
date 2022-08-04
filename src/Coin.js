import React from 'react';
import './Coin.css'

const Coin = ({name,image,price,symbol,marketcap,priceChange}) => {
  return (
//   <div className='coin-container'>
//       <div className='coin-row'>
//           <div className='coin'>
//               <img src={image} className='coin-image' alt="crypto" />
//               <h1 className='coin-name'>{name}</h1>
//               <p className='coin-symbol'>{symbol}</p>
//           </div>
//           <div className='coin-data'>
//               <p className='coin-price'>₹{price}</p>
//               <p className='coin-market'>₹{marketcap.toLocaleString()}</p>
//               {
//                   priceChange<0 ?
//                   <div className='coin-pricechange-red'>{priceChange}</div>
//                   :<div className='coin-pricechange-green'>{priceChange}</div>
//               }
//           </div>
//       </div>
//   </div>

  <div className='container row mb-3'>
      <div className='col-md-3 d-flex justify-content-center align-items-center'>
            <img src={image} className='coin-image' alt="crypto" />
            <h1 className='coin-name'>{name}</h1>
      </div>
      <div className='col-md-2 text-center'>
        <p className='coin-symbol'>{symbol}</p>
      </div>
      <div className='col-md-2 text-center'>
        <p className='coin-symbol'>₹{price}</p>
      </div>
      <div className='col-md-3 text-center'>
        <p className='coin-market text-center'>₹{marketcap.toLocaleString()}</p>
      </div>
      <div className='col-md-2 text-center'>
            {
               priceChange<0 ?
                <div className='coin-pricechange-red'>{priceChange}</div>
                :<div className='coin-pricechange-green'>{priceChange}</div>
            }
      </div>
  </div>
  );
};

export default Coin;
