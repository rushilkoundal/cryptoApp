import { useGetCryptosNewsQuery } from '../cryptoNewsApi';
import moment from 'moment';
import './News.css';

function News({ simplified }) {
  const count = simplified ? 9 : 30
  const { data: cryptoNews } = useGetCryptosNewsQuery(count)

  const demoImg = 'https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6'

  return (
    <div className='news_container'>
      {
        cryptoNews?.value.map((news, i) => (
          <a style={{ color: '#000' }} href={news.url} target='_blank' rel='noreferrer'>
            <div key={i} className='news'>
              <img src={news?.image?.thumbnail?.contentUrl || demoImg} alt='img' />
              <h4>{news.name}</h4>
              <p>{news?.description > 100 ? `${news?.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider">
                <img className='author' src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImg} alt="author" />
                <p>{moment(news?.datePublished).startOf('ss').fromNow()}</p>
              </div>
            </div>
          </a>
        ))
      }
    </div>
  )
}

export default News