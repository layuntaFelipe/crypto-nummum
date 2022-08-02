import React from 'react';

const CoinItem = ({coin, fromSearch}) => {
  return (
    <div className='coin-row'>
      <p>{coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={fromSearch ? coin.image?.small : coin.image} alt={coin.id} />
        <p>{coin.symbol.toUpperCase()}</p>
      </div>
      <p>${fromSearch ? coin.current_price?.usd.toLocaleString() : coin.current_price.toLocaleString()}</p>
      <p style={{color: `${coin.price_change_percentage_24h > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>${fromSearch ? coin.total_volume?.usd.toLocaleString() : coin.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>${fromSearch ? coin.market_cap?.usd.toLocaleString() : coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem