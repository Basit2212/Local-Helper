import React from 'react'
import './../../Style/About.css'
import { Col, Container, Row } from 'react-bootstrap'
import about from './../../../../images/about-img.jpg'



const About = () => {
  return (
    <>
    <section className='about'>
      <Container>
        <Row lg={2} md={6}>
          <Col lg={5} md={6}>
            <div className="detail-box">
              <h2>About us</h2>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>

              <button className='btn'>Read More</button>
            </div>
          </Col>
          <Col lg={7} md={6}>
            <div className="about-image img-fluid">
              <img src={about} alt="" srcset="" />
            </div>
          </Col>

        </Row>
      </Container>
      </section>
    </>
  )
}

export default About