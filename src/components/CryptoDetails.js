import HTMLReactParser from 'html-react-parser'
import { useGetCryptoDetailQuery } from '../cryptoApi'
import { useGetCryptoHistoryQuery } from '../cryptoApi'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import './CryptoDetail.css'
import { useState } from 'react'
// import LineChart from './LineChart'

function CryptoDetails() {
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState('7d')
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return 'Loading'

  const time = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}` },
    { title: 'Rank', value: cryptoDetails?.rank },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}` },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}` },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}` },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? 'check' : 'stop' },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}` },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}` },
  ];

  return (
    <div className="coin-detail-container">
      <div className="coin-heading-container">
        <h1 level={2} className="coin-name">
          {data?.data?.coin.name} ({data?.data?.coin.symbol}) Price
        </h1>
        <p>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </div>
      <select defaultValue="7d" className="select-timeperiod" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
        {time.map((date) => <option key={date}>{date}</option>)}
      </select>
      {/* <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} /> */}
      <div className="stats-container">
        <div className="coin-value-statistics">
          <div className="coin-value-statistics-heading">
            <h1 level={3} className="coin-details-heading">{cryptoDetails?.name} Value Statistics</h1>
            <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
          {stats.map(({ title, value }) => (
            <div className="coin-stats">
              <div className="coin-stats-name">
                <p>{title}</p>
                <p className="stats">{value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="other-stats-info">
          <div className="coin-value-statowistics-heading">
            <h1 level={3} className="coin-details-heading">Other Stats Info</h1>
            <p>An overview showing the statistics of {cryptoDetails?.name}, such as the base and quote currency, the rank, and trading volume.</p>
          </div>
          {genericStats.map(({ title, value }) => (
            <div className="coin-stats">
              <div className="coin-stats-name">
                <p>{title}</p>
                <p className="stats">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="coin-desc-link">
        <div className="coin-desc">
          <h1 level={3} className="coin-details-heading">What is {cryptoDetails?.name}?</h1>
          <p style={{ width: '80%' }}>{HTMLReactParser(`${cryptoDetails?.description}`)}</p>
        </div>
        <div className="coin-links">
          <h1 style={{ textAlign: 'center' }} level={3} className="coin-details-heading">{cryptoDetails?.name} Links</h1>
          <div className="coin-link">
            {cryptoDetails?.links?.map((link) => (
              <div key={link.uuid}>
                <h1 level={5} className="link-name">{link.type}</h1>
                <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetails

