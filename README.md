# 🌌 Star Wars Planets Explorer

Aplicação desenvolvida com **Next.js 14**, **TypeScript** e **Styled Components**, integrada à **SWAPI (Star Wars API)**.  
O foco foi criar uma experiência limpa, responsiva e funcional — listando planetas com paginação, busca e detalhes individuais.

---

##  Tecnologias utilizadas

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Jest + React Testing Library](https://jestjs.io/)
- [ESLint + Prettier](https://eslint.org/)
- [SWAPI (Star Wars API)](https://swapi.dev/)

---

##  Funcionalidades

- Listagem de planetas com paginação (10 por página)
- Busca por nome de planeta
- Página de detalhes com informações completas
- Exibição de nativos, espécies e veículos
- Rotas de API internas via Next.js
- Tema dark automático
- Layout responsivo (mobile-first)

---

##  Como rodar o projeto localmente

###  Clone o repositório

```bash
git clone https://github.com/seu-usuario/starwars-app.git
cd starwars-app


Instale as dependências

npm install
# ou
yarn

Crie a variável .env.local

NEXT_PUBLIC_BASE_URL=http://localhost:3000

💻 Comandos principais

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
