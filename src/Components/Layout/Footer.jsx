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
const socialIcons = [
  {
    image: <i class="bi bi-facebook"></i>
  },
  {
    image: <i class="bi bi-twitter-x"></i>
  },
  {
    image: <i class="bi bi-youtube"></i>
  },
  {
    image: <i class="bi bi-instagram"></i>
  }
]

const Footer = () => {
  return (
    <section className='footer-section'>
      <Container>
        <h4>Get in touch</h4>
        <Row>
          <Col className='mx-auto' lg={10}>
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
          </Col>
          <div className="follow-Us">
            <h4>Follow Us</h4>
            <div className="icons">
              {socialIcons.map((item, index) => (
                <div className='icon-image'>
                  {item.image}
                </div>
              ))}
              
            </div>
          </div>
          <div className="last-section">
            <div className='line'></div>
            <div className='last '><p>© 2025 All Rights Reserved By Local Helpers</p></div>
          </div>

        </Row>
      </Container>
    </section>
  )
}

export default Footer
