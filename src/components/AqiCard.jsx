const AqiCard = ({ aqi, pm25 }) => {
  return (
    <div className="bg-slate-500 text-white p-10 rounded-lg shadow-md mb-4 pl-16">
      <h2 className="text-2xl font-bold mb-2">Air Quality Index</h2>
      <p className="text-6xl mb-2">{`AQI: ${aqi}`}</p>
      <p className="text-2xl">{`PM2.5: ${pm25}`}</p>
    </div>
  );
};

export default AqiCard;
