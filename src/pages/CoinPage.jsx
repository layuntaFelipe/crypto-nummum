import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
            <span className='rank'>Rank #{coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
              <p>{coin.symbol}</p>
            </div>
            <div className="coin-price">
              <h1>{coin.market_data.current_price}</h1>
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
                <td>{coin.market_data.price_change_percentage_1h_in_currency.usd}</td>
                <td>{coin.market_data.price_change_percentage_24h_in_currency.usd}</td>
                <td>{coin.market_data.price_change_percentage_7d_in_currency.usd}</td>
                <td>{coin.market_data.price_change_percentage_14d_in_currency.usd}</td>
                <td>{coin.market_data.price_change_percentage_30d_in_currency.usd}</td>
                <td>{coin.market_data.price_change_percentage_1yr_in_currency.usd}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CoinPage