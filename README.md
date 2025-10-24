# 🌌 Star Wars Planets Explorer

Aplicação desenvolvida com **Next.js 14**, **TypeScript** e **Styled Components**, integrada à **SWAPI (Star Wars API)**.  
O foco foi criar uma experiência limpa, responsiva e funcional — listando planetas com paginação, busca e detalhes individuais.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js 14 (App Router)](https://nextjs.org/docs)** – Framework React moderno com renderização híbrida (SSR/SSG) e rotas de API integradas.  
- **[React 18](https://react.dev/)** – Biblioteca base da aplicação, responsável pela renderização e composição de componentes.  
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática e IntelliSense avançado para maior segurança e produtividade.  
- **[Styled Components](https://styled-components.com/)** – CSS-in-JS com suporte a temas dinâmicos (dark/light).  
- **[Axios](https://axios-http.com/)** – Cliente HTTP para consumo da SWAPI e APIs internas.  
- **[Jest](https://jestjs.io/)** + **[React Testing Library](https://testing-library.com/)** – Stack de testes unitários e de componentes.  
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** – Padrões de código e formatação automatizada.  
- **[SWAPI (Star Wars API)](https://swapi.dev/)** – Fonte de dados principal sobre planetas, espécies e personagens.  
- **[Jotai](https://jotai.org/)** – Gerenciamento de estado atômico simples e escalável (planejado para futuras versões).

---

## 🗂 Estrutura Geral do Projeto

- `/app` → páginas, rotas e layout principal  
- `/app/api` → rotas internas que comunicam com a SWAPI  
- `/components` → componentes reutilizáveis (`Card`, `DetailsCard`, `ResidentList`)  
- `/lib/api` → camada de integração e tipos de API  
- `/__tests__` → testes unitários de páginas, rotas e componentes  

---

## ✨ Funcionalidades

- ✅ Listagem de planetas com paginação (10 por página)  
- 🔍 Busca por nome de planeta  
- 📄 Página de detalhes com informações completas  
- 👽 Exibição de nativos, espécies e veículos  
- ⚙️ Rotas de API internas via Next.js  
- 🌗 Tema dark automático  
- 📱 Layout responsivo (mobile-first)

---

🧩 Como Rodar o Projeto Localmente

Clone o repositório

git clone https://github.com/seu-usuario/starwars-app.git
cd starwars-app

Instale as dependências

npm install
# ou
yarn

Crie o arquivo .env.local

NEXT_PUBLIC_BASE_URL=http://localhost:3000


4️Comandos principais
# Rodar o servidor local
npm run dev

# Build de produção
npm run build

# Rodar em modo produção
npm start

# Testes unitários
npm test

# Testes com cobertura
npm run test:cov

# Lint do código
npm run lint
