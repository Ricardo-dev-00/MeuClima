// Grid de métricas
import WeatherMetricCard from "./WeatherMetricCard";

export default function MetricsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-3 gap-2 md:gap-4 h-full w-full max-w-xs md:max-w-none">
      {metrics.map((m, idx) => (
        <WeatherMetricCard key={idx} icon={m.icon} title={m.title} value={m.value} />
      ))}
    </div>
  );
}
