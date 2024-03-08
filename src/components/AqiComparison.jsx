import React, { useState } from "react";
import { Link } from "react-router-dom";
import AqiCard from "./AqiCard";

const AqiComparison = () => {
  const [currentArea, setCurrentArea] = useState(1);
  const area1Data = {
    aqi: 75,
    pm25: 20,
  };
  const area2Data = {
    aqi: 90,
    pm25: 30,
  };
  return (
    <div className="container mx-auto mt-8 text-white">
      <h1 className="text-3xl font-bold mb-6">AQI and PM2.5 Comparison</h1>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 focus:outline-none rounded-lg ${
            currentArea === 1 ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setCurrentArea(1)}
        >
          Wapda Town
        </button>
        <button
          className={`px-4 py-2 focus:outline-none rounded-lg ${
            currentArea === 2 ? "bg-blue-500" : "bg-gray-500"
          }`}
          onClick={() => setCurrentArea(2)}
        >
          Comsats University
        </button>
      </div>

      {/* AQI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AqiCard {...(currentArea === 1 ? area1Data : area2Data)} />
      </div>
    </div>
  );
};

export default AqiComparison;
