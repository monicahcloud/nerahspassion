import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import '../App.css';
import transfer from "../images/newclients.png"

const Services = () => {

  const services = [
    { service: "Sisterlocks®/ Brotherlocks (Consultation is required)", key: 0 },
    { service: "Microlocs (Consultation is required)", key: 1 },
    { service: "Lock Repair", key: 2 },
    { service: "Traditional Locks", key: 3 },
    { service: "Retigthening/Interlocking", key: 4 },
    { service: "Sisterlocks® Establishment/ Microloc Establishment", key: 5 },
    { service: "Transfer Client Fees", key: 6 },
    { service: "Lock Maintance", key: 7 },
  ];

  return (
    <>
      <Container classname="  " >
        <Row className='playfair-display'>
          <Col md={8}
            style={{
              color: "white",
              // display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 15,
            }}>
           
              <h2 style={{
                color: "white",
                textDecoration: "underline",
              }}> Services</h2>
              <ul> 
                {services.map(service => {
                return (
                  <h4>
                    <li key={service.key}
                    >{service.service}
                    </li>
                  </h4>
                )
              })}
            </ul>
            <Button
              variant="warning"
              size="lg"
              href='https://www.styleseat.com/m/v/nerahferguson?fbclid=IwAR0J9PA3UKHeTK28pRnrL12SeGqtkMoILxaLMO-wzy3P-EsF9lgoiowhFkc_aem_AZxJkILJV-oKLYqKcEy8Abf7GAZOpyTRAorHdrcmZ1YYw1xqpUUTWtBTDJDrHYTUwbSrdP4Jn8sQ9R9wUsWORdyp'
              target="_blank"
              active>
              Book Appointment
            </Button>
          </Col>
          <Col md={4}
            style={{
              // display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100
            }}
          >
            <Image
            className='grow'
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
