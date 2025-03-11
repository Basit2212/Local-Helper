import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import './../../Style/Contact.css'

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <section className='contact-form'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="heading-contact">
                            <h2>contact us</h2>
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="input-form" placeholder='Name' {...register("Name", { required: true, minLength: 5, })} type="text" />
                                {errors.Name && <div className='error'>Min Length is 5</div>}
                                <input className="input-form" placeholder='Phone Number' {...register("PhoneNumber", { required: true, maxLength: 11 })} type="text" />
                                {errors.PhoneNumber && <div className='error'>Maximum length is 11</div>}
                                <input className="input-form" placeholder='Email' {...register("Email", { required: true })} type="email" />
                                <input
                                    className="message-form"
                                    placeholder="Message"
                                    {...register("Message", { required: "Write something" })}
                                    type="text"
                                />
                                {errors.Message && <div className="error">{errors.Message.message}</div>}

                                <div className="buttn">
                                    <input className='new-btn' type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={6}>
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            style={{
                                border: 0,
                                borderRadius: '10px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                marginTop: '50px',
                            }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353155042!3d-37.81720974202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218cee40!2sMelbourne%20VIC,%20Australia!5e0!3m2!1sen!2sus!4v1613777889631!5m2!1sen!2sus"
                            allowFullScreen
                        ></iframe>
                    </Col>
                </Row>
            </Container>


        </section>

    )
}

export default ContactUs