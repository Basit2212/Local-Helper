import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import './../../Style/ClientSection.css'

import client1 from './../../../../images/client-1.jpg'
import client2 from './../../../../images/client-2.jpg'
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
    return (
        <>
            <section className='client-section'>
         

            </section>

        </>
    )
}

export default ClientSection