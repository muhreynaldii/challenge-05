import React, { Fragment, useEffect, useState } from "react";
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
import axios from "axios";
import { useParams } from "react-router-dom";

function Cars() {
  const [dataList, setDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams("id", null);
  const getDataId = async (id) => {
    try {
      const res = await axios.get(
        `https://rent-cars-api.herokuapp.com/admin/car/${id}`
      );
      setDataList(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getDataId(id);
  }, [id]);
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
            style={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
              borderRadius: "8px",
            }}
            className="border"
            xs={{
              size: 7,
            }}
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
              size: 4,
              offset: 1,
            }}
          >
            <Card
              body
              style={{
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
                borderRadius: "8px",
              }}
            >
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <img alt="Cardimagecap" src={dataList.image} width="100%" />
              )}
              <CardTitle tag="h5">Nama/Tipe Mobil</CardTitle>
              <CardText>
                <img src={iconuser} alt="" className="px-1" /> 4 Orang
                <img src={iconsettings} alt="" className="px-1" /> Manual
                <img src={iconcalendar} alt="" className="px-1" /> Tahun 2020
              </CardText>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <h6>Rp.{dataList.price}</h6>
              </div>
              <Button>Lanjutkan Pembayaran</Button>
            </Card>
          </Col>
        </Row>
        <div className="mt-5 d-flex justify-content-center">
          <Button>Lanjutkan Pembayaran</Button>
        </div>
      </Container>
    </Fragment>
  );
}

export default Cars;
