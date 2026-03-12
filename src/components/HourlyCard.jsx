// Card lateral de horários
export default function HourlyCard({ hours }) {
  return (
    <div className="bg-[#1e293b] rounded-2xl p-6 flex flex-col shadow-lg min-w-[220px]">
      <h3 className="text-white text-lg font-bold mb-4">Próximas Horas</h3>
      <ul className="divide-y divide-[#334155]">
        {hours.map((h, idx) => (
          <li key={idx} className="py-2 flex justify-between items-center text-gray-200">
            <span>{h.time}</span>
            <span className="flex items-center gap-2">
              <img src={`https://www.weatherbit.io/static/img/icons/${h.icon}.png`} alt={h.description} className="w-6 h-6" />
              <span className="font-bold">{h.temp}°C</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
