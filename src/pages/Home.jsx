import {useState, useEffect} from 'react';
import axios from 'axios';
import Coins from '../components/Coins';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [coinsNumber, setCoinsNumber] = useState(10);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinsNumber}&page=1&sparkline=false`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data[0]);
    }).catch((error) => {
      console.log(error);
    })
  }, [url]);

  const increaseNumberOfCoins = () => {
    setCoinsNumber((prevState) => prevState+10)
  }

  return (
    <>
      <Coins coins={coins} />
      <button className='btn' onClick={increaseNumberOfCoins}>Add 10</button>
    </>
  )
}

export default Home