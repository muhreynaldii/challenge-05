import React, { Fragment, useEffect } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import FormPencarian from "./../../components/FormPencarian/FormPencarian";
import iconuser from "../../assets/images/fi_users.png";
import iconsettings from "../../assets/images/fi_settings.png";
import iconcalendar from "../../assets/images/fi_calendar.png";
import { useParams } from "react-router-dom";
import { getCar } from "../../redux/action/carAction";
import { useSelector, useDispatch } from "react-redux";

function Cars() {
  const dispatch = useDispatch();
  const { isLoading, data: searchData } = useSelector((state) => state.carID);
  const { id } = useParams("id", null);

  useEffect(() => {
    dispatch(getCar(id));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      <Container
        fluid
        style={{ backgroundColor: "#F1F3FF", height: "266px" }}
      ></Container>
      <FormPencarian />
      <Container>
        <Row>
          <Col
            xs={{
              size: 12,
            }}
            lg={{
              size: 7,
            }}
            style={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
              marginTop: "20px",
            }}
            className="border"
          >
            <h6>Tentang Paket</h6>
            <p>Include</p>
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk Pajak</li>
            </ul>
            <p>Exclude</p>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam{" "}
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
            <h6>Refund, Reschedule, Overtime</h6>
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam{" "}
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam{" "}
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari </li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam{" "}
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </Col>
          <Col
            xs={{
              offset: 1,
              size: 10,
            }}
            lg={{
              size: 4,
              offset: 1,
            }}
          >
            <Card
              body
              style={{
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                borderRadius: "8px",
                marginTop: "20px",
              }}
            >
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <img alt="Cardimagecap" src={searchData.image} width="100%" />
              )}
              <CardTitle tag="h5">Nama/Tipe Mobil</CardTitle>
              <CardText>
                <img src={iconuser} alt="" className="px-1" /> 4 Orang
                <img src={iconsettings} alt="" className="px-1" /> Manual
                <img src={iconcalendar} alt="" className="px-1" /> Tahun 2020
              </CardText>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <h6>Rp.{searchData.price}</h6>
              </div>
              <Button>Lanjutkan Pembayaran</Button>
            </Card>
          </Col>
        </Row>
        <div className="mt-5 d-flex justify-content-center button-pembayaran">
          <Button>Lanjutkan Pembayaran</Button>
        </div>
      </Container>
    </Fragment>
  );
}

export default Cars;
