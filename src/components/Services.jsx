import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import transfer from "../images/transfer.jpg"

const Services = () => {
  return (
  <>
  <Container classname="col-md-12">
      <Row>
        <Col xs={6}>1 of 2</Col>
        <Col xs={6}><img
                className=""
                width="300"
                src={transfer} alt="new clients" /></Col>
      </Row>
    </Container>
  </>
  )
}

export default Services
