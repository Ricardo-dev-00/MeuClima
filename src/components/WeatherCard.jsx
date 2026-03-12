// Cartão de clima atual
export default function WeatherCard({ weather }) {
  if (!weather) return null;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center gap-2 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt={weather.description} className="w-24 h-24" />
      <div className="text-4xl font-semibold">{weather.temp}°C</div>
      <div className="text-gray-500 dark:text-gray-300">{weather.description}</div>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        <div>
          <span className="font-semibold">Sensação:</span> {weather.feels_like}°C
        </div>
        <div>
          <span className="font-semibold">Umidade:</span> {weather.humidity}%
        </div>
        <div>
          <span className="font-semibold">Vento:</span> {weather.wind_speed} km/h
        </div>
      </div>
    </div>
  );
}
