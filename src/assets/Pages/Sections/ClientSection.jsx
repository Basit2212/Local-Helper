import React from 'react';
import Slider from 'react-slick';
import { Card, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from './../../../../images/client-1.jpg';
import client2 from './../../../../images/client-2.jpg';
import './../../Style/ClientSection.css'

const clientData = [
    {
        Image: client1,
        Name: "John morik",
        paragraph: "chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"

    },
    {
        Image: client2,
        Name: "Jorch morik",
        paragraph: "chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum"

    }
]
const ClientSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };
    return (
        <>
            <section className='client-section'>
            <Container>
            <h2 className="text-center">What Our Clients Say</h2>
            <Slider {...settings}>
                {clientData.map((client, index) => (
                    <div key={index} className="d-flex justify-content-center">
                        <Card className="text-center shadow-sm p-4" style={{ maxWidth: '500px' }}>
                            <Card.Img variant="top" src={client.Image} className="rounded-circle mx-auto" style={{ width: '80px', height: '80px' }} />
                            <Card.Body>
                                <Card.Title className="fw-bold">{client.Name}</Card.Title>
                                <div className="text-warning">★★★★★</div>
                                <Card.Text className="mt-2">{client.paragraph}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Slider>
        </Container>
            </section>

        </>
    )
}

export default ClientSection