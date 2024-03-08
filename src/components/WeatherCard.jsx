import { FaTemperatureHigh, FaTint } from 'react-icons/fa';

const WeatherCard = ({ temperature, humidity }) => {
  return (
    <div className="bg-slate-500 text-white p-10 rounded-lg shadow-md mb-4 pl-16">
      <h2 className="text-2xl font-bold mb-2">Weather</h2>
      <div className="flex items-center mb-4">
        <FaTemperatureHigh size={30} className="mr-2" />
        <p className="text-4xl mb-2">{`${temperature}°C`}</p>
      </div>
      <div className="flex items-center">
        <FaTint size={30} className="mr-2" />
        <p className="text-3xl">{`${humidity}%`}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
