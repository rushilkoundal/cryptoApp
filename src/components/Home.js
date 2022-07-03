import React from 'react';
import { useGetCryptosQuery } from '../cryptoApi';
import CryptoStats from './CryptoStats';
import Currencies from './Currencies'
import { Link } from 'react-router-dom';
import millify from 'millify';
import News from './News';
import './Home.css';

function Home() {
  const { data, isFetching } = useGetCryptosQuery(9);
  const globalStats = data?.data?.stats;

  if (isFetching) return 'Loading';

  return (
    <div className='home'>
      <h1>Global Crypto Stats</h1>
      <div className="stat_card">
        <CryptoStats title='Total Crypto Currencies' stat={millify(globalStats?.total)} />
        <CryptoStats title='Total Exchanges' stat={millify(globalStats?.totalExchanges)} />
        <CryptoStats title='Total Markets' stat={millify(globalStats?.totalMarkets)} />
        <CryptoStats title='Total Markets Cap' stat={millify(globalStats?.totalMarketCap)} />
        <CryptoStats title='Total 24h Volume' stat={millify(globalStats?.total24hVolume)} />
      </div>
      <div className="crypto_currency">
        <div className="crypto_currency_title">
          <h1>Top 10 Crypto Currencies</h1>
          <Link to='/currencies'><button>Show More</button></Link>
        </div>
        <Currencies simplified />
      </div>
      <div className="crypto_news">
        <div className="crypto_currency_title">
          <h1>Latest Crypto News</h1>
          <Link to='/news'><button>Show More</button></Link>
        </div>
        <News simplified />
      </div>
    </div>
  )
}

export default Home