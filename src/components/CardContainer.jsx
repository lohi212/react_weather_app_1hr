import { Card } from "antd";
import React from "react";
import "./styles.css";

const CardContainer = () => {
  return (
    <div className="center-container" style={{ height: "100%" }}>
      <Card className="card-container">Weather Forecast</Card>
    </div>
  );
};

export default CardContainer;
