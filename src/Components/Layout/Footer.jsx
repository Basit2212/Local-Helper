import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './../../assets/Style/Footer.css'

const icons = [
  {
    Image: <i className="bi bi-geo-alt-fill"></i>,
    text: "lorem ipsum dummy text address"
  },
  {
    Image: <i className="bi bi-telephone-fill"></i>,
    text: "+92 1234567890"
  },
  {
    Image: <i className="bi bi-envelope-fill"></i>,
    text: "demo@gmail.com"
  }
]

const Footer = () => {
  return (
    <section className='footer-section'>
      <Container>
        <h4>Get in touch</h4>
        <Row>
          <Col className='mx-auto' lg={10}>
            <div className="line">
            <Row className="justify-content-center position-relative">
  {icons.map((item, index) => (
    <Col key={index} md={4} className="footer-item">
      <div className="footerImg">
        {item.Image}
      </div>
      <p>{item.text}</p>
      {/* Line between the items */}
      {index < icons.length - 1 && <div className="footer-line"></div>}
    </Col>
  ))}
</Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
