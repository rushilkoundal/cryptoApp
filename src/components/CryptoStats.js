import './CryptoStats.css'

function CryptoStats({title, stat}) {
  return (
    <div className='crypto_stats'>
        <h3>{title}</h3>
        <p>{stat}</p>
    </div>
  )
}

export default CryptoStats