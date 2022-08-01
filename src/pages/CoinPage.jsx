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
    <div>{coin.name}</div>
  )
}

export default CoinPage