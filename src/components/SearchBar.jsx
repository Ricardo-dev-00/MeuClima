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
      if (city.length >= 2) {
        fetchCitySuggestions(city).then(sugs => {
          if (active) setSuggestions(sugs);
        });
      } else {
        setSuggestions([]);
      }
    }, 400); // 400ms de debounce
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
    <div className="relative w-full max-w-xs">
      <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-4">
        <input
          type="text"
          className="input input-bordered w-full px-4 py-2 rounded shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={e => { setCity(e.target.value); setShowSuggestions(true); }}
          disabled={loading}
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 w-full mt-1 rounded shadow max-h-48 overflow-y-auto">
          {suggestions.map((sug, idx) => (
            <li
              key={idx}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
              onClick={() => handleSuggestionClick(sug)}
            >
              {sug}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
