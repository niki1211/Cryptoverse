import React from 'react';
import { Select, Typography, Row, Avatar, Col, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import img from '../images/cryptocurrency.png';

const { Text, Title } = Typography;

const News = ({simplified}) =>
{
  const demoUrl = img;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({count: simplified ? 10 : 100});
  console.log( cryptoNews );

  if ( !cryptoNews?.value ) return 'Loading...';

  return (
    <>
      <Row gutter={ [ 24, 24 ] }>
        { cryptoNews?.value.map( ( news, i ) => (
          <Col xs={ 24 } sm={ 12 } lg={ 8 } key={ i }>
            <Card hoverable className='news-card'>
              <a href={ news.url } target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className="news-title" level={ 4 }>{ news.title }</Title>
                  <img src={ news?.image?.url || demoUrl } style={ { overflow: "auto", height: "50%", width: "50%"}} alt='news' />                  
                </div>
                <p>
                  { news.description > 100 ?
                  `${news.description.substring(0, 100)}` : `${news.description}`}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar src={ demoUrl } style={ {backgroundColor: 'black'} } />
                    <Text className='provider-name'>{ news.provider?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow() }</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News