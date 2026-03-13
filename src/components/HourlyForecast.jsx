// Card lateral de horários
export default function HourlyForecast({ hours }) {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-3 md:p-6 flex flex-col shadow-lg min-w-[140px] md:min-w-[220px] w-full max-w-xs md:max-w-none mx-auto h-full">
      <h3 className="text-white text-base md:text-lg font-bold mb-2 md:mb-4">Próximas Horas</h3>
      <ul className="divide-y divide-[#334155]">
        {hours.map((h, idx) => (
          <li key={idx} className="py-1 md:py-2 flex justify-between items-center text-gray-200">
            <span className="text-xs md:text-base">{h.time}</span>
            <span className="flex items-center gap-2">
              <img src={`https://www.weatherbit.io/static/img/icons/${h.icon}.png`} alt={h.description} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-bold text-xs md:text-base">{String(h.temp).replace('\\u00b0', '°')}°C</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
