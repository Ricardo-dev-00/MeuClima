import WeatherMainCard from "./WeatherMainCard";
import MetricsGrid from "./MetricsGrid";
import HourlyForecast from "./HourlyForecast";

export default function TodayOverview({ weather, metrics, dateInfo, hours }) {
  return (
    <section className="mb-6 md:mb-10">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-6">Resumo de Hoje</h2>
      <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3 items-stretch">
        <div className="flex justify-center md:block">
          <WeatherMainCard weather={weather} dateInfo={dateInfo} />
        </div>
        <div className="flex items-center justify-center h-full">
          <MetricsGrid metrics={metrics} />
        </div>
        <div className="flex justify-center md:block">
          <HourlyForecast hours={hours} />
        </div>
      </div>
    </section>
  );
}
