// Serviço para consumir a API do Weatherbit
const API_KEY = import.meta.env.VITE_WEATHERBIT_API_KEY;
const BASE_URL = "https://api.weatherbit.io/v2.0";

export async function fetchWeatherByCity(city) {
  const res = await fetch(`${BASE_URL}/current?city=${encodeURIComponent(city)}&key=${API_KEY}&lang=pt`);
  if (!res.ok) throw new Error("Cidade não encontrada");
  const data = await res.json();
  const w = data.data[0];
  return {
    name: w.city_name,
    temp: Math.round(w.temp),
    feels_like: Math.round(w.app_temp),
    humidity: w.rh,
    wind_speed: Math.round(w.wind_spd * 3.6),
    description: w.weather.description,
    icon: w.weather.icon,
    coord: { lat: w.lat, lon: w.lon },
    dew_point: w.dewpt,
    clouds: w.clouds,
    uv: w.uv,
  };
}

export async function fetchForecastByCity(city) {
  const res = await fetch(`${BASE_URL}/forecast/daily?city=${encodeURIComponent(city)}&key=${API_KEY}&lang=pt&days=5`);
  if (!res.ok) throw new Error("Erro ao buscar previsão");
  const data = await res.json();
  return data.data.map(day => ({
    date: day.valid_date,
    temp_min: Math.round(day.min_temp),
    temp_max: Math.round(day.max_temp),
    icon: day.weather.icon,
    description: day.weather.description,
  }));
}

export async function fetchWeatherByCoords(lat, lon) {
  const res = await fetch(`${BASE_URL}/current?lat=${lat}&lon=${lon}&key=${API_KEY}&lang=pt`);
  if (!res.ok) throw new Error("Erro ao buscar clima por localização");
  const data = await res.json();
  const w = data.data[0];
  return {
    name: w.city_name,
    temp: Math.round(w.temp),
    feels_like: Math.round(w.app_temp),
    humidity: w.rh,
    wind_speed: Math.round(w.wind_spd * 3.6),
    description: w.weather.description,
    icon: w.weather.icon,
    coord: { lat: w.lat, lon: w.lon },
    dew_point: w.dewpt,
    clouds: w.clouds,
    uv: w.uv,
  };
}
