import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/LoginStyle.css";

const UserHome = () => {
  return (
    <div>
      <Card className="imgwinery">
        <Card.Img
          variant="top"
          src="https://i0.wp.com/zeroaxis-studios.com/wp-content/uploads/2020/11/ubaldo-bitumi-SecR2ak__yU-unsplash-scaled-e1606060082667.jpg?fit=1280%2C746&ssl=1%27"
        />
      </Card>

      <Card className="container">
        <Card.Text className="null">Scopri la nostra storia</Card.Text>
        <Card.Text className="nuff">
          Tutto ciò che ci rende unici tra vigneti, vini e cantine
        </Card.Text>
      </Card>
    </div>
  );
};

export default UserHome;
