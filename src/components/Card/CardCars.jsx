import React from "react";
import { CardText, CardTitle, Button, Card } from "reactstrap";
import iconuser from "../../assets/images/fi_users.png";
import iconsettings from "../../assets/images/fi_settings.png";
import iconcalendar from "../../assets/images/fi_calendar.png";
import { Link } from "react-router-dom";

function CardCars({ id, name, image, price }) {
  return (
    <>
      <Card
        body
        style={{
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
          width: "410px",
        }}
      >
        <img alt="Cardimagecap" src={image} width="100%" />
        <CardTitle tag="h5">{name}</CardTitle>
        <h4>Rp.{price}</h4>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardText>
          <img src={iconuser} alt="" /> 4 Orang
        </CardText>
        <CardText>
          <img src={iconsettings} alt="" /> Manual
        </CardText>
        <CardText>
          <img src={iconcalendar} alt="" /> Tahun 2020
        </CardText>
        <Link to={`/cars/${id}`}>
          <Button style={{ width: "100%" }}>Pilih Mobil</Button>
        </Link>
      </Card>
    </>
  );
}

export default CardCars;
