import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const SlideShow = () => {
  const images = [
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2024/02/15/17339046_9fdc8a95_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/10/18/16946850_65be2e6f_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841819_d48e7e9e_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841812_a30567fa_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2024/02/15/17339045_d59e86ac_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},
    {url:"https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841810_111d314d_720x540.jpg"},

  
  ]
  return (
    <>
    <div className='SlideShowbody'>
    {/* <Container>
      <Row>
        <Col xs={3}>
          {images.map(image=> {
            return (

              <Image src={image.url} thumbnail/>
            )
          })}
      </Row>
    </Container> */}

<Container>
      <Row>
           <Col xs={3} >
          <Image src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/10/18/16946850_65be2e6f_720x540.jpg" thumbnail />
        </Col>
        <Col xs={3} >
          <Image src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg" thumbnail />
        </Col>
        <Col xs={3} >
          <Image src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/09/18/16841819_d48e7e9e_720x540.jpg" thumbnail />
        </Col>
        <Col xs={3} >
          <Image src="https://d220aniogakg8b.cloudfront.net/static/uploads/2023/12/11/17120033_29c7b5c6_720x540.jpg" thumbnail />
        </Col>
        </Row>
    </Container>

    </div>
    </>
  )
}

export default SlideShow
