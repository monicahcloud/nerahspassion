import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';
import transfer from "../images/newclients.png"

const Services = () => {

  const services = [
    { service: "Sisterlocks®/ Brotherlocks", key: 0 },
    { service: "Interlocks", key: 1 },
    { service: "Lock Repair", key: 2 },
    { service: "Traditional Locks", key: 3 }
  ];

  return (
    <>
      <Container classname="col-md-12 ">
        <Row className='playfair-display'>
          <Col md={6}
            style={{
              color: "white",
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              justifyContent: 'left',
            }}>
            <h2> Services</h2>
            <ul>
              {services.map(service => {
                return (
                  <li key={service.key}
                  >{service.service}
                  </li>
                )
              })}

            </ul>
          </Col>
          <Col md={6}  
          style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'right',
              justifyContent: 'right',
              marginTop:30
            }}>
              <Image 
            rounded
            width="200"
            height="175"
            src={transfer} alt="new clients" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services
