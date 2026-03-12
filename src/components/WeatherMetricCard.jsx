// Card pequeno de métrica
export default function WeatherMetricCard({ icon, title, value }) {
  return (
    <div className="bg-[#334155] rounded-xl p-2 md:p-4 flex flex-col items-center shadow transition hover:bg-sky-900/40 w-full max-w-[120px] md:max-w-none mx-auto">
      <div className="text-xl md:text-2xl mb-1">{icon}</div>
      <div className="text-[10px] md:text-xs text-gray-400 mb-1">{title}</div>
      <div className="text-base md:text-xl font-bold text-white">{value}</div>
    </div>
  );
}
