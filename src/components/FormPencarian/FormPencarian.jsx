import { Input, Button, Label, Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

function FormPencarian() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/search");
  };

  return (
    <>
      <Container>
        <div className="container-search pt-3">
          <div className="label">
            <Row className="px-2">
              <Col xs="12" lg="3">
                <Label for="tipeDriver" className="text-dark">
                  Tipe Driver
                </Label>
              </Col>
              <Col xs="2">
                <Label for="pilihTanggal" className="text-dark">
                  Tanggal
                </Label>
              </Col>
              <Col xs="3">
                <Label for="pilihWaktu" className="text-dark">
                  Waktu Jemput/Ambil
                </Label>
              </Col>
              <Col
                xs={{
                  size: "4",
                }}
              >
                <Label for="jumlahPenumpang" className="text-dark">
                  Jumlah Penumpang (optional)
                </Label>
              </Col>
            </Row>
          </div>
          <Row className="px-2">
            <Col xs="12" lg="3">
              <Input
                id="tipeDriver"
                bsSize="sm"
                type="select"
                className="input"
              >
                <option>Dengan Sopir</option>
                <option>Tanpa Sopir</option>
              </Input>
            </Col>
            <Col xs="12" lg="2">
              <Input
                id="pilihTanggal"
                bsSize="sm"
                type="date"
                placeholder="Pilih Tanggal"
                className="input"
              />
            </Col>
            <Col xs="12" lg="3">
              <Input
                id="pilihWaktu"
                name="time"
                placeholder="Pilih Waktu"
                type="time"
                bsSize="sm"
                className="input"
              />
            </Col>
            <Col xs="12" lg="3">
              <Input
                id="jumlahPenumpang"
                name="number"
                placeholder="Jumlah Penumpang"
                type="number"
                bsSize="sm"
                className="input"
              />
            </Col>
            <Col xs="12" lg="1">
              <Button color="success" size="sm" onClick={handleclick}>
                Cari Mobil
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default FormPencarian;
