
# Clima Agora 🌤️

[Acesse o projeto online](https://ricardo-dev-00.github.io/MeuClima/)

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

## Deploy automático
O projeto conta com deploy automático via GitHub Pages, utilizando GitHub Actions:

- Build e deploy são feitos automaticamente a cada push na branch main.
- O workflow está em `.github/workflows/ci-cd.yml`.
- O build do Vite é publicado na branch `gh-pages`.
- O endereço do site é: [https://ricardo-dev-00.github.io/MeuClima/](https://ricardo-dev-00.github.io/MeuClima/)
- O favicon.svg está incluído na raiz e copiado para o deploy.
- O Vite está configurado com base `/MeuClima/` para compatibilidade total com GitHub Pages.
- Variáveis de ambiente são injetadas via secrets do GitHub.

### CI/CD
O projeto utiliza CI/CD com GitHub Actions:
- Instala dependências, roda lint, builda o projeto e faz deploy automático.
- Permissões de deploy são gerenciadas via Personal Access Token (PAT) salvo como secret `GH_PAGES_TOKEN`.

### Suporte
Se tiver dúvidas ou problemas com o deploy, consulte os logs do GitHub Actions ou peça ajuda!

---
Desenvolvido por Ricardo Vieira.
