// Seção de previsão para os próximos 5 dias
import React from "react";

export default function NextDays({ days, activeDay, setActiveDay }) {
  const [carouselIdx, setCarouselIdx] = React.useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const visibleCount = 3; // Quantos botões mostrar por vez no mobile
  const maxIdx = Math.max(0, days.length - visibleCount);

  // Função para avançar/voltar no carrossel
  const handlePrev = () => setCarouselIdx(idx => Math.max(0, idx - 1));
  const handleNext = () => setCarouselIdx(idx => Math.min(maxIdx, idx + 1));

  // Dias visíveis no carrossel
  const visibleDays = isMobile ? days.slice(carouselIdx, carouselIdx + visibleCount) : days;

  return (
    <section className="mb-10">
      <h2 className="text-white text-2xl font-bold mb-6">Next 5 Days</h2>
      <div className="flex gap-1 md:gap-2 mb-2 md:mb-4 items-center w-full overflow-x-auto">
        {isMobile && (
          <button
            className="px-2 py-1 rounded-lg font-semibold text-xs bg-[#334155] text-gray-200 hover:bg-sky-500 transition disabled:opacity-40"
            onClick={handlePrev}
            disabled={carouselIdx === 0}
            aria-label="Ver anteriores"
          >
            ◀
          </button>
        )}
        <button
          className={`px-2 md:px-4 py-1 md:py-2 rounded-lg font-semibold text-xs md:text-base transition ${activeDay === 'all' ? 'bg-sky-400 text-white' : 'bg-[#334155] text-gray-200 hover:bg-sky-500'}`}
          onClick={() => setActiveDay('all')}
        >
          All Days
        </button>
        {visibleDays.map((d, idx) => (
          <button
            key={d.date}
            className={`px-2 md:px-4 py-1 md:py-2 rounded-lg font-semibold text-xs md:text-base transition ${activeDay === d.date ? 'bg-sky-400 text-white' : 'bg-[#334155] text-gray-200 hover:bg-sky-500'}`}
            onClick={() => setActiveDay(d.date)}
          >
            {d.label}
          </button>
        ))}
        {isMobile && (
          <button
            className="px-2 py-1 rounded-lg font-semibold text-xs bg-[#334155] text-gray-200 hover:bg-sky-500 transition disabled:opacity-40"
            onClick={handleNext}
            disabled={carouselIdx >= maxIdx}
            aria-label="Ver próximas"
          >
            ▶
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
        {days
          .filter(d => activeDay === 'all' || d.date === activeDay)
          .map((d, idx) => (
            <div key={d.date} className="bg-[#1e293b] rounded-xl p-2 md:p-4 flex flex-col items-center shadow-lg transition hover:bg-[#334155]">
              <div className="text-gray-400 text-xs md:text-sm mb-1">{d.label}</div>
              <img src={`https://www.weatherbit.io/static/img/icons/${d.icon}.png`} alt={d.description} className="w-8 h-8 md:w-10 md:h-10 mb-2" />
              <div className="text-lg md:text-2xl font-bold text-white mb-1">{String(d.temp).replace('\\u00b0', '°')}°C</div>
              <div className="text-gray-300 text-xs md:text-sm">{d.description}</div>
            </div>
          ))}
      </div>
    </section>
  );
}
