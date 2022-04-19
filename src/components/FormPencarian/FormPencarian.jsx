import { Input, Button, Label, Container, Row, Col } from "reactstrap";
import './FormPencarian.css'
import { useNavigate } from 'react-router-dom';

  function FormPencarian() {
    const navigate = useNavigate();
    const handleclick = () => {
      navigate('/search')
    }

    return (
      <>
      <Container>
      <div className="container-search pt-3">
      <div className="label">
      <Row className="px-2">
      <Col
        xs="3"
      >
        <Label for="exampleDriver" className="text-dark">
        Tipe Driver
        </Label>
      </Col>
      <Col
        xs="2"
      >
        <Label for="exampleDriver" className="text-dark">
        Tanggal
        </Label>
      </Col>
      <Col
        xs="3"
      >
        <Label for="exampleDriver" className="text-dark">
        Waktu Jemput/Ambil
        </Label>
      </Col>
      <Col
        xs={{
          size: "4",
        }}

      >
        <Label for="exampleDriver" className="text-dark">
        Jumlah Penumpang (optional)
        </Label>
      </Col>
    </Row>
      <Row className="px-2">
      <Col
        xs="3"
      >
        <Input id= "exampleDriver" bsSize="sm" type="select" className="input">
        <option>
        Dengan Sopir
        </option>
        <option>
        Tanpa Sopir
        </option>

        </Input>
      </Col>
      <Col
        xs="2"
      >
        <Input bsSize="sm" type="date" placeholder="Pilih Tanggal" className="input"/>
      </Col>
      <Col
        xs="3"
      >
        <Input id="exampleTime" name="time" placeholder="Pilih Waktu " type="time" bsSize="sm"
        className="input"
        />
      </Col>
      <Col
        xs={{
          size: "3",
        }}
      >
        <Input id="exampleNumber" name="number" placeholder="Jumlah Penumpang"type="number" bsSize="sm"
        className="input"
        />
      </Col>
      <Col
        xs={{
          size: "1"
        }}
      >
        <Button color="success" size="sm" onClick={handleclick}>
          Cari Mobil
        </Button>
      </Col>
    </Row>
        </div>
      </div>
      </Container>
      </>
    );
  }

  export default FormPencarian;