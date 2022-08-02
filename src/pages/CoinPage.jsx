import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const CoinPage = () => {

  const [coin, setCoin] = useState({});
  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);
      setCoin(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [url]);

  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img style={{margin: '0.5rem 1rem 0 0'}} src={coin.image.small} alt="" /> : null}
              <p>{coin.symbol?.toUpperCase()} /USD</p>
            </div>
            <div className="coin-price">
              {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1hr</th>
                <th>24hr</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_1h_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(1)}%</p></td>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_24h_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(1)}%</p></td>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_7d_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(1)}%</p></td>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_14d_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(1)}%</p></td>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_30d_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(1)}%</p></td>
                <td><p style={{color: `${coin.market_data?.price_change_percentage_1y_in_currency?.usd > 0 ? 'rgb(32, 255, 125)' : 'rgb(255, 62, 32)'}`}}>{coin.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(1)}%</p></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {coin.market_data ? <p>${coin.market_data.circulating_supply.toLocaleString()}</p> : null}
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
            }}>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinPage