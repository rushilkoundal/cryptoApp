import { useGetCryptosQuery } from '../cryptoApi';
import millify from 'millify';
import { useState } from 'react';
import './Currencies.css'
import { Link } from 'react-router-dom';

function Currencies({ simplified }) {
  const count = simplified ? 9 : 100
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [crypto] = useState(cryptoList?.data?.coins);
  const [search, setSearch] = useState('');

  if (isFetching) return 'Loading'

  return (
    <div className='currency_container'>
      {!simplified && <div className="search">
        <input style={{ width: '300px', border: 'none', padding: '10px', outlineColor: 'lightblue' }} type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
      </div>}
      <div className='currencies'>
        {crypto?.filter((coin) => {
          if (search === '') return coin
        else if (coin?.name.toLowerCase().includes(search.toLowerCase())) return coin
        }).map((currency) => (
          <Link key={currency.uuid} to={`/crypto-details/${currency.uuid}`}>
            <div key={currency.uuid} className='currency_card'>
              <img src={currency?.iconUrl} alt="crypto-icon" />
              <h3>{currency?.name}</h3>
              <p>Price: {millify(currency?.price)}</p>
              <p>Market Cap: {millify(currency?.marketCap)}</p>
              <p>Daily Changes: {millify(currency?.change)}%</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Currencies