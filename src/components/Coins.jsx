import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';

const Coins = ({coins, fromSearch}) => {
  return (
    <div className='container'>
      <div>
        <div className="heading">
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p >Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {coins.map((coin, index) => (
            <Link key={index} to={`/coin/${coin.id}`}>
              <CoinItem coin={coin} fromSearch={fromSearch} />
            </Link>
        ))}

      </div>
    </div>
  )
}

export default Coins