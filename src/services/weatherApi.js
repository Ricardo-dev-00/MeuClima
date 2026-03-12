// Serviço para consumir a API do OpenWeather
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchWeatherByCity(city) {
  const res = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`);
  if (!res.ok) throw new Error("Cidade não encontrada");
  const data = await res.json();
  return {
    name: data.name,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind_speed: Math.round(data.wind.speed * 3.6),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    coord: data.coord,
  };
}

export async function fetchForecastByCity(city) {
  const res = await fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=pt_br`);
  if (!res.ok) throw new Error("Erro ao buscar previsão");
  const data = await res.json();
  // Agrupar por dia
  const days = {};
  data.list.forEach(item => {
    const date = item.dt_txt.split(" ")[0];
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });
  // Pegar 5 dias
  return Object.keys(days).slice(0, 5).map(date => {
    const dayData = days[date];
    const temps = dayData.map(d => d.main.temp);
    const min = Math.round(Math.min(...temps));
    const max = Math.round(Math.max(...temps));
    const icon = dayData[0].weather[0].icon;
    const description = dayData[0].weather[0].description;
    return { date, temp_min: min, temp_max: max, icon, description };
  });
}

export async function fetchWeatherByCoords(lat, lon) {
  const res = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`);
  if (!res.ok) throw new Error("Erro ao buscar clima por localização");
  const data = await res.json();
  return {
    name: data.name,
    temp: Math.round(data.main.temp),
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    wind_speed: Math.round(data.wind.speed * 3.6),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    coord: data.coord,
  };
}
