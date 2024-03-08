import React, { useState, useEffect } from "react";
import AqiCard from "../components/AqiCard";
import WeatherCard from "../components/WeatherCard";
import AqiComparison from "../components/AqiComparison";

const Home = () => {
  const aqiData = {
    aqi: 80,
    pm25: 25,
  };
  const weatherData = {
    temperature: 28,
    humidity: 60,
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <div className="container mx-auto mt-8 text-white px-16">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="md:col-span-4">
          <h2 className="text-5xl font-bold mb-4 text-start">
            Air Quality in Lahore
          </h2>
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-2 text-end">{formattedDate}</h1>
          <h3 className="text-lg mb-4 text-end">{formattedTime}</h3>
        </div>
      </div>

      {/* Secondary Grid for AQI and Weather Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* AQI Card (60% width) */}
        <div className="md:col-span-4">
          <AqiCard {...aqiData} />
        </div>

        {/* Weather Card (40% width) */}
        <div className="md:col-span-2">
          <WeatherCard {...weatherData} />
        </div>
      </div>
      {/* AQI Comparison */}
      <AqiComparison />
    </div>
  );
};

export default Home;
