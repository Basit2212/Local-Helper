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
    text: "92 1234567890"
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
          {icons.map((item, index) => (
            <Col  key={index} md={4} className="footer-item mx-auto">
              <div className="footerImg">
                {item.Image}
              </div>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Footer
