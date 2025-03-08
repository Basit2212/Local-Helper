import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import professional from './../../../../images/professional-img.png'
import './../../Style/Services.css'

const HomeServiceSection = () => {
    return (
        <>
            <section className='service'>
                <Container>
                    <Row>
                        
                        <Col md={6}>
                            <div className="profImg">
                                <img src={professional} alt="" srcset="" />
                                </div>
                        </Col>
                        <Col md={6}>
                            <div className="details">
                                <h2>We Provide Professional
                                    <br />
                                    Home Services.</h2>
                                <p>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>
                            </div>
                            <button className='button'>Read More</button>
                        </Col>
                        
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default HomeServiceSection