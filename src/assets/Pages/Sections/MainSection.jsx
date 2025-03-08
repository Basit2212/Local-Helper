import React, { useState } from 'react'
import './../../Style/Section.css'
import { Col, Container, Row } from 'react-bootstrap'
import worker from './../../../../images/slider-img.png'
const Cards = [
    {
        image: <i className="bi bi-tools"></i>,
        title: "Repair"
    },
    {
        image: <i className="bi bi-easel3-fill"></i>,
        title: "Improve"
    },
    {
        image: <i className="bi bi-house-gear-fill"></i>,
        title: "Maintain"

    }
]


const MainSection = () => {
    return (
        <>
            <section className='hero_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6}>
                            <div className="detail_box">
                                <h1>Repair and
                                    <br />
                                    Maintenance
                                    <br />
                                    Services</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                                </p>
                                <button className='btn-class'>Contact us</button>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="worker">
                                <img className='img-fluid' src={worker} alt="" />
                            </div></Col>

                    </Row>

                </Container>
            </section>
            <section className="cards_section">
                <Container fluid>
                    <Row className='justify-content-md-center'>
                        {Cards.map((data, index) => (
                            <Col key={index} md={6} className="text-center card_box">
                                <div className="cardImg">{data.image}</div>
                                <div className="cardTitle">{data.title}</div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

        </>
    )

}

export default MainSection