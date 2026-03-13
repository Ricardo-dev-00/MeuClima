import React from "react";
import { fetchCitySuggestions } from "../services/cityAutocomplete";
// Componente de busca por cidade com autocomplete
export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);


  // Debounce para evitar excesso de requisições
  React.useEffect(() => {
    let active = true;
    const handler = setTimeout(() => {
      fetchCitySuggestions(city).then(sugs => {
        if (active) setSuggestions(sugs);
      });
    }, 200); // 200ms de debounce
    return () => {
      active = false;
      clearTimeout(handler);
    };
  }, [city]);

  function handleSubmit(e) {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setShowSuggestions(false);
    }
  }

  function handleSuggestionClick(sug) {
    setCity(sug);
    onSearch(sug);
    setShowSuggestions(false);
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-2">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400 text-lg pointer-events-none">🔍</span>
          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 rounded-xl bg-[#1e293b] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 text-base shadow border border-[#334155] focus:border-sky-400 transition"
            placeholder="Digite o nome da cidade..."
            value={city}
            onChange={e => { setCity(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            disabled={loading}
            autoComplete="off"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-sky-600 transition shadow disabled:opacity-60"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-2"><span className="animate-spin">⏳</span>Buscando...</span>
          ) : (
            <span className="flex items-center gap-2">Buscar</span>
          )}
        </button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-20 bg-[#1e293b] border border-[#334155] w-full mt-1 rounded-xl shadow-lg max-h-60 overflow-y-auto animate-fade-in">
          {suggestions.map((sug, idx) => (
            <li
              key={idx}
              className="px-4 py-3 cursor-pointer hover:bg-sky-700/40 text-white transition border-b border-[#334155] last:border-b-0"
              onMouseDown={() => handleSuggestionClick(sug)}
            >
              <span className="flex items-center gap-2"><span className="text-sky-400">📍</span>{sug}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
