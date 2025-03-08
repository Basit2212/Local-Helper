import React from 'react'
import './../../Style/OurService.css'
import Maintanence from './../../../../images/s1.png'
import Electrical from './../../../../images/s2.png'
import Plumbing from './../../../../images/s3.png'
import { Col, Container, Row } from 'react-bootstrap'

const cardData = [
    {
        Image: Maintanence,
        Title: "Maintenance",
        paragraph: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"

    },
    {
        Image: Electrical,
        Title: "Electrical",
        paragraph: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"

    },
    {
        Image: Plumbing,
        Title: "Plumbing",
        paragraph: "when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"

    },

]


const OurServices = () => {
    return (
        <>
            <section className='our-service'>
                <Container>
                    <Row>

                        <div className="service-card">
                            <h2>Our services</h2>
                        </div>
                        <Col md={12} className="card-service">
                            {cardData.map((data, index) => (
                                <div key={index} className="card_box">
                                    <div className="card_image">
                                        <img src={data.Image} alt={data.Title} />
                                    </div>
                                    <h3 className="card_title">{data.Title}</h3>
                                    <p className="card_text">{data.paragraph}</p>
                                </div>
                            ))}
                       
                        </Col>
                        <div className="button-class">
                            <button className='btn'>view more</button>
                        </div>
                      
                        


                    </Row>
                </Container>

            </section>
        </>
    )
}

export default OurServices