// Serviço para autocomplete de cidades usando a API do GeoDB Cities
// https://rapidapi.com/wirefreethought/api/geodb-cities/

const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const API_KEY = import.meta.env.VITE_GEODB_API_KEY; // Adicione sua chave no .env

export async function fetchCitySuggestions(query) {
  if (!query || query.length < 2) return [];
  const res = await fetch(`${API_URL}?namePrefix=${encodeURIComponent(query)}&limit=5&sort=-population`, {
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.data.map(city => `${city.city}${city.region ? ', ' + city.region : ''}, ${city.country}`);
}
