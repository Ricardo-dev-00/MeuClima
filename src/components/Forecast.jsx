// Função para traduzir nomes de dias e meses
function traduzirData(data) {
  const dias = {
    'Monday': 'Segunda-feira', 'Tuesday': 'Terça-feira', 'Wednesday': 'Quarta-feira', 'Thursday': 'Quinta-feira', 'Friday': 'Sexta-feira', 'Saturday': 'Sábado', 'Sunday': 'Domingo'
  };
  const meses = {
    'January': 'Janeiro', 'February': 'Fevereiro', 'March': 'Março', 'April': 'Abril', 'May': 'Maio', 'June': 'Junho', 'July': 'Julho', 'August': 'Agosto', 'September': 'Setembro', 'October': 'Outubro', 'November': 'Novembro', 'December': 'Dezembro'
  };
  let traduzido = data;
  Object.entries(dias).forEach(([en, pt]) => { traduzido = traduzido.replace(en, pt); });
  Object.entries(meses).forEach(([en, pt]) => { traduzido = traduzido.replace(en, pt); });
  return traduzido;
}
// Previsão para os próximos 5 dias
export default function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) return null;
  return (
    <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
      {forecast.map((day, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
          <div className="font-semibold mb-1">{traduzirData(day.date)}</div>
          <img src={`https://www.weatherbit.io/static/img/icons/${day.icon}.png`} alt={day.description} className="w-12 h-12" />
          <div className="text-lg">{day.temp_min}°C / {day.temp_max}°C</div>
          <div className="text-gray-500 dark:text-gray-300 text-sm">{day.description}</div>
        </div>
      ))}
    </div>
  );
}
