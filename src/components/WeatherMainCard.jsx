// Card principal do clima atual
export default function WeatherMainCard({ weather, dateInfo }) {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-4 md:p-8 flex flex-col items-center shadow-lg h-full min-w-[180px] md:min-w-[220px] w-full max-w-xs md:max-w-none mx-auto">
      <div className="text-6xl mb-2">{weather.icon ? <img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt={weather.description} className="w-20 h-20 inline" /> : "☀"}</div>
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">{weather.temp}°C</div>
      <div className="text-lg text-sky-300 mb-2">{weather.description}</div>
      <div className="text-base md:text-lg text-sky-300 mb-2">{weather.description}</div>
      <div className="text-gray-300 mt-2 text-base md:text-lg">{weather.name}</div>
      <div className="text-gray-400 text-base">{dateInfo}</div>
      <div className="text-gray-400 text-sm md:text-base">{dateInfo}</div>
    </div>
  );
}
