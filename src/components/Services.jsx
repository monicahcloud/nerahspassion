import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../App.css';
import transfer from "../images/transfer.jpg"

const Services = () => {

  const services = [
    {service: "Sisterlocks®/ Brotherlocks", key:0},
    {service: "Interlocks", key:1},
    {service: "Lock Repair", key:2},
    {service: "Traditional Locks", key:3}
  ];

  return (
  <>
  <Container classname="col-md-12">
      <Row className='playfair-display'>
        <Col md={6}
        style={{
          color: "white"
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
        <Col md={6}><Image
                rounded
                width="300"
                src={transfer} alt="new clients" />
                </Col>
      </Row>
    </Container>
  </>
  )
}

export default Services
