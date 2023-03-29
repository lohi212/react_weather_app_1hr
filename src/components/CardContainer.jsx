import { Card } from "antd";
import React from "react";
import "./styles.css";

const CardContainer = ({ weather }) => {
  const icon = weather?.weather?.length
    ? weather?.weather[0]?.icon?.replace("n", "d") || ""
    : "";

  return (
    <div className="center-container" style={{ height: "100%" }}>
      <Card className="card-container">
        {weather?.weather?.length ? (
          <div className="flex">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="weather"
              width={150}
            />
            <div>
              Today
              <h1>{weather?.name}</h1>
              <div>Temperature: {weather?.main?.temp}</div>
              <div>{weather?.weather[0].description}</div>
            </div>
          </div>
        ) : (
          <div className="center-container">
            {weather.message ? (
              <h1 className="title">{weather.message}</h1>
            ) : (
              <>
                <img
                  src="https://alexkowsik-weather-app.netlify.app/static/media/02d.144d9a47.svg"
                  alt="weather-icon"
                  width={150}
                />
                <h1 className="title">Weather Forecast</h1>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default CardContainer;
