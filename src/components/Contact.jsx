import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Contact = () => {
  const info = {
    name: "Nerah's Passion",
    address: "Serving the following areas: Milwaukee, Wauwatosa, Brookfield, West Allies",
    email: "nerahspassion@yahoo.com",
    phone: "414-522-1811",
  };
  return (
    <>
      <Container style={{
            color: "white",
          }}>
        <Row className='playfair-display'>
         
            <Image
              className=''
              rounded
              width="200"
              height="175"
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk" alt="new clients" />
          <h2 >Contact Us</h2>

            <h4>
              <div>{info.name}</div>
              <div>{info.address}</div>
              <div>Phone: {info.phone}</div>
              <div>Email: {info.email}</div>
            </h4>
        </Row>
      </Container>
    </>
  )
}

export default Contact
