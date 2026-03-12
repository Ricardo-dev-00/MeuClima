import { useState } from "react";

export default function Navbar({ onSearch, onGeolocate, loading }) {
  const [city, setCity] = useState("");
  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-3 md:px-8 py-2 md:py-4 bg-transparent mb-4 md:mb-8 gap-2">
      <div className="flex items-center gap-1 md:gap-2">
        <span className="text-xl md:text-2xl">☁</span>
        <span className="text-white text-lg md:text-xl font-bold tracking-wide">weather</span>
      </div>
      <form
        onSubmit={e => { e.preventDefault(); if (city.trim()) onSearch(city); }}
        className="flex-1 flex justify-center min-w-[180px]"
      >
        <div className="relative w-full max-w-[220px] md:max-w-md">
          <input
            type="text"
            className="w-full py-2 md:py-3 pl-10 md:pl-12 pr-2 md:pr-4 rounded-xl bg-[#1e293b] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base md:text-lg shadow"
            placeholder="Search city..."
            value={city}
            onChange={e => setCity(e.target.value)}
            disabled={loading}
          />
          <span className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg md:text-xl">🔍</span>
        </div>
      </form>
      <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-0">
        <button
          onClick={onGeolocate}
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#334155] text-white rounded-lg hover:bg-sky-500 transition"
          title="Usar localização"
        >
          <span>📍</span>
        </button>
        <button
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#334155] text-white rounded-lg hover:bg-sky-500 transition"
          title="Modo claro/escuro"
        >
          <span>🌙</span>
        </button>
        <a
          href="https://github.com/seu-usuario/seu-repo" // Substitua pelo link real
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 md:ml-4 px-2 md:px-4 py-1 md:py-2 bg-white text-black rounded-xl font-semibold hover:bg-sky-200 transition flex items-center gap-1 md:gap-2 text-xs md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-5 md:h-5">
            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
          </svg>
          Repositorio
        </a>
      </div>
    </nav>
  );
}
