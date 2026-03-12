// Seção de previsão para os próximos 5 dias
export default function NextDays({ days, activeDay, setActiveDay }) {
  return (
    <section className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-6">Next 5 Days</h2>
      <div className="flex gap-1 md:gap-2 mb-2 md:mb-4 flex-wrap">
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-lg font-semibold text-xs md:text-base transition ${activeDay === 'all' ? 'bg-sky-400 text-white' : 'bg-[#334155] text-gray-200 hover:bg-sky-500'}`}
          onClick={() => setActiveDay('all')}
        >
          All Days
        </button>
        {days.map((d, idx) => (
          <button
            key={idx}
            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg font-semibold text-xs md:text-base transition ${activeDay === d.date ? 'bg-sky-400 text-white' : 'bg-[#334155] text-gray-200 hover:bg-sky-500'}`}
            onClick={() => setActiveDay(d.date)}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {days
          .filter(d => activeDay === 'all' || d.date === activeDay)
          .map((d, idx) => (
            <div key={idx} className="bg-[#1e293b] rounded-xl p-2 md:p-4 flex flex-col items-center shadow-lg transition hover:bg-[#334155]">
              <div className="text-gray-400 text-xs md:text-sm mb-1">{d.label}</div>
              <img src={`https://www.weatherbit.io/static/img/icons/${d.icon}.png`} alt={d.description} className="w-8 h-8 md:w-10 md:h-10 mb-2" />
              <div className="text-lg md:text-2xl font-bold text-white mb-1">{d.temp}°C</div>
              <div className="text-gray-300 text-xs md:text-sm">{d.description}</div>
            </div>
          ))}
      </div>
    </section>
  );
}
