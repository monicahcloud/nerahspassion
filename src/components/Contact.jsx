import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
            color: "white"
          }}>
        <Row className='playfair-display Footer'>
          {/* <Image
              roundedCircle
              width="300"
              height="175"
              src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk" 
              alt="new clients" 
              /> */}
          
  
          <h2 style={{
                color: "white",
                textDecoration: "underline",
                 paddingTop: 5,
                 paddingBottom:15,
                 margin:5
              }}> Contact Us</h2>
              

            <h6>
              <div>{info.name}</div>
              <div>{info.address}</div>
              <div>Phone: {info.phone}</div>
              <div>Email: {info.email}</div>
            </h6>
        </Row>
      </Container>
    </>
  )
}

export default Contact
