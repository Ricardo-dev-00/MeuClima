// Autocomplete de cidades usando lista local (cidadesBrasil.js)
import { cidadesBrasil } from "../data/cidadesBrasil";

export async function fetchCitySuggestions(query) {
  const q = (query || '').toLowerCase();
  return cidadesBrasil.filter(cidade => cidade.toLowerCase().includes(q)).slice(0, 8);
}
