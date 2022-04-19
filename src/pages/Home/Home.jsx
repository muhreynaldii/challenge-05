import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import Hero from '../../assets/images/img_car.png';
import FormPencarian from './../../components/FormPencarian/FormPencarian';

function Home() {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#F1F3FF' }}>
      <Container style={{ backgroundColor: '#F1F3FF' }}>
        <Row>
      <Col
        xs="6"
        className='d-flex flex-column justify-content-center align-items-center'
      >
        <h1 className='text-dark text-start'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p className='text-dark text-start'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
      </Col>
      <Col
        xs="6"
      >
        <img src={Hero} alt="" />
      </Col>
    </Row>
    </Container>
    </Container>
    <FormPencarian/>
  </>
  )
}

export default Home;