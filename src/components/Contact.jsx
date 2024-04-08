import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Contact = () => {
 const info = {
    name:"Nerah's Passion",
    address: "Serving the following areas: Milwaukee, Wauwatosa, Brookfield, West Allies",
    email: "nerahspassion@yahoo.com",
    phone: "414-522-1811",
  };
  return (
    <>
      <Container>
      <Row>
        <h1  style={{
              color: "white",
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
            }}>Contact Us</h1>
        <Col
         style={{
          color: "white",
          // display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 15,
        }}>
          <h3>
        <div>{info.name}</div>
        <div>Address: {info.address}</div>
        <div>Phone: {info.phone}</div>
        <div>Email: {info.email}</div>
       </h3>
        </Col>
        <Col>
        <Image
            className=''
              rounded
              width="200"
              height="175"
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk" alt="new clients" />
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Contact
