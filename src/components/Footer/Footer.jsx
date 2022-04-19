import React, {Fragment} from 'react'
import { Row, Col, Container } from 'reactstrap';
import fb from '../../assets/images/icon_facebook.png'
import ig from '../../assets/images/icon_instagram.png'
import tw from '../../assets/images/icon_twitter.png'
import mail from '../../assets/images/icon_mail.png'
import twc from '../../assets/images/icon_twitch.png'
import logo from "../../assets/images/logo.png"

function Footer() {
  return (
    <Fragment>
    <Container className='pt-5'>
    <Row>
     <Col
      className=""
      xs="3"
    >
      <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
      <p>binarcarrental@gmail.com</p>
      <p>081-233-334-808</p>
    </Col>
    <Col
      className=""
      xs={{
          offset:1,
          size:2,
      }}
    >

      <p>Our Service</p>
      <p>Why Us</p>
      <p>Testimonial</p>
      <p>FAQ</p>

    </Col>
    <Col
      className=""
      xs="3"
    >
      <p>Connect with US</p>
      <img className='mx-2' src={fb} alt="" />
      <img className='mx-2' src={ig} alt="" />
      <img className='mx-2' src={tw} alt="" />
      <img className='mx-2' src={mail} alt="" />
      <img className='mx-2' src={twc} alt="" />
    </Col>
    <Col
      className=""
      xs="3"
    >
      <p>Copyright Binar 2022</p>
      <img src={logo}alt="" />
    </Col>
   </Row>
    </Container>
    </Fragment>
  )
}

export default Footer