import React, { useState, useEffect } from "react";

const WeatherSimulator = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    condition: "",
    humidity: 0,
    windSpeed: 0,
  });

  const weatherConditions = [
    "Ensoleillé",
    "Nuageux",
    "Pluvieux",
    "Orageux",
    "Neigeux",
    "Brouillard",
  ];

  const generateRandomWeather = () => {
    const randomTemperature = (Math.random() * 35 - 5).toFixed(1);
    const randomCondition =
      weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomHumidity = Math.floor(Math.random() * 101);
    const randomWindSpeed = (Math.random() * 20).toFixed(1);

    setWeatherData({
      temperature: randomTemperature,
      condition: randomCondition,
      humidity: randomHumidity,
      windSpeed: randomWindSpeed,
    });
  };

  useEffect(() => {
    generateRandomWeather();
    const interval = setInterval(generateRandomWeather, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div align="center" className="weather-simulator">
      <p>🌡️ Température : {weatherData.temperature}°C</p>
      <p>🚩 Conditions : {weatherData.condition}</p>
      <p>💧 Humidité : {weatherData.humidity}%</p>
      <p>💨 Vent : {weatherData.windSpeed} km/h</p>
    </div>
  );
};

export default WeatherSimulator;
