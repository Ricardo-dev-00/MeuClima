# Clima Agora 🌤️

Aplicação web moderna para consultar o clima atual, previsão e informações meteorológicas de qualquer cidade, utilizando React, JavaScript, HTML, Tailwind CSS e a API do OpenWeather.

## Funcionalidades
- Busca por cidade
- Exibe: nome da cidade, temperatura, sensação térmica, umidade, vento, condição e ícone
- Previsão para 5 dias
- Geolocalização automática
- Layout responsivo, tema claro/escuro, design moderno
- Estados de loading, erro e cidade não encontrada

## Tecnologias Utilizadas
- React
- JavaScript
- HTML
- Tailwind CSS
- Fetch API

## Como rodar o projeto
1. Clone o repositório
2. Instale as dependências:
	```bash
	npm install
	```
3. Crie um arquivo `.env` na raiz com sua chave da API:
	```env
	VITE_WEATHER_API_KEY=sua_chave_aqui
	```
	(Veja `.env.example`)
4. Rode o projeto:
	```bash
	npm run dev
	```
5. Acesse em [http://localhost:5173](http://localhost:5173)

## Exemplo de .env.example
```
VITE_WEATHER_API_KEY=your_api_key_here
```

## Segurança
- O arquivo `.env` está no `.gitignore` para evitar o envio da chave ao GitHub.

## Deploy
Você pode fazer deploy facilmente no Vercel, Netlify ou outra plataforma de sua preferência.

---
Desenvolvido por [Seu Nome].
