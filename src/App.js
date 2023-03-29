import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";
import InputContainer from "./components/InputContainer";

function App() {
  const [weather, setWeather] = useState({});

  const fetchWeather = (city) => {
    const API_key = "a47875efaad30d154d0a5835bedb9efa";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        setWeather(res);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="root-container">
      <InputContainer handleWeather={fetchWeather} />
      <CardContainer weather={weather} />
    </div>
  );
}

export default App;
