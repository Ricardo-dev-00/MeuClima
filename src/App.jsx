import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import Forecast from "./components/Forecast.jsx";
import Loading from "./components/Loading.jsx";
import { fetchWeatherByCity, fetchForecastByCity, fetchWeatherByCoords } from "./services/weatherbitApi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TodayOverview from "./components/TodayOverview";
import NextDays from "./components/NextDays";


function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Restaurar último local ao carregar
  React.useEffect(() => {
    const last = localStorage.getItem("lastLocation");
    if (last) {
      try {
        const parsed = JSON.parse(last);
        if (parsed.type === "city" && parsed.value) {
          handleSearch(parsed.value, true);
        } else if (parsed.type === "coords" && parsed.value) {
          handleCoords(parsed.value.lat, parsed.value.lon, true);
        }
      } catch (e) {
        // bloco vazio removido
      }
    }
  }, []);

  async function handleSearch(city, silent = false) {
    setLoading(!silent);
    setError("");
    try {
      const w = await fetchWeatherByCity(city);
      setWeather(w);
      const f = await fetchForecastByCity(city);
      setForecast(f);
      localStorage.setItem("lastLocation", JSON.stringify({ type: "city", value: city }));
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleCoords(lat, lon, silent = false) {
    setLoading(!silent);
    setError("");
    try {
      const w = await fetchWeatherByCoords(lat, lon);
      setWeather(w);
      const f = await fetchForecastByCity(w.name);
      setForecast(f);
      localStorage.setItem("lastLocation", JSON.stringify({ type: "coords", value: { lat, lon } }));
    } catch (err) {
      setError("Erro ao buscar clima por localização");
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleGeolocate() {
    setLoading(true);
    setError("");
    if (!navigator.geolocation) {
      setError("Geolocalização não suportada");
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      await handleCoords(pos.coords.latitude, pos.coords.longitude);
    }, () => {
      setError("Permissão de localização negada");
      setLoading(false);
    });
  }

  // Exemplo de dados para cards informativos e horários (substitua pelos dados reais do Weatherbit)
  const metrics = weather ? [
    { icon: "💨", title: "Vento", value: weather.wind_speed + " km/h" },
    { icon: "💧", title: "Umidade", value: weather.humidity + "%" },
    { icon: "🌡️", title: "Sensação térmica", value: weather.feels_like + "°C" },
    { icon: "🌫️", title: "Ponto de orvalho", value: weather.dew_point !== undefined ? weather.dew_point + "°C" : "-" },
    { icon: "☁️", title: "Nuvens", value: weather.clouds !== undefined ? weather.clouds + "%" : "-" },
    { icon: "🔆", title: "Índice UV", value: weather.uv !== undefined ? weather.uv : "-" },
  ] : [];
  const hours = forecast.slice(0, 5).map(f => ({
    time: f.date,
    icon: f.icon,
    temp: f.temp_max,
    description: f.description,
  }));
  const days = forecast.map(f => ({
    date: f.date,
    label: f.date,
    icon: f.icon,
    temp: f.temp_max,
    description: f.description,
  }));
  const [activeDay, setActiveDay] = React.useState('all');
  const dateInfo = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', weekday: 'long' });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0f172a] to-[#020617] transition-colors duration-300">
      <Navbar onSearch={handleSearch} onGeolocate={handleGeolocate} loading={loading} />
      <div className="flex justify-center mt-2 mb-4 px-3 sm:px-0">
        <SearchBar onSearch={handleSearch} loading={loading} />
      </div>
      <main className="max-w-[1200px] mx-auto p-6 md:p-10 rounded-3xl bg-[#0f172a]/80 shadow-lg mt-6">
        {loading && <Loading />}
        {error && <div className="text-red-400 text-center mb-4">{error}</div>}
        {weather && (
          <>
            <TodayOverview weather={weather} metrics={metrics} dateInfo={dateInfo} hours={hours} />
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <NextDays days={days} activeDay={activeDay} setActiveDay={setActiveDay} />
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
