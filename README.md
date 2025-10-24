# 🌌 Star Wars Planets Explorer

Aplicação desenvolvida com **Next.js 14**, **TypeScript** e **Styled Components**, integrada à **SWAPI (Star Wars API)**.  
O foco foi criar uma experiência limpa, responsiva e funcional — listando planetas com paginação, busca e detalhes individuais.

---

## 🚀 Tecnologias Utilizadas

- **[Next.js 14 (App Router)](https://nextjs.org/docs)** – Framework React moderno, utilizado para renderização híbrida (SSR/SSG) e rotas de API integradas.  
- **[React 18](https://react.dev/)** – Biblioteca base da aplicação, responsável pela renderização de componentes e gerenciamento de estado.  
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática e suporte avançado a IntelliSense, garantindo maior segurança e produtividade no código.  
- **[Styled Components](https://styled-components.com/)** – Estilização de componentes utilizando CSS-in-JS com suporte a temas dinâmicos (dark/light).  
- **[Axios](https://axios-http.com/)** – Cliente HTTP simples e poderoso, utilizado para consumir a SWAPI e APIs internas.  
- **[Jest](https://jestjs.io/)** + **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** – Stack de testes para garantir qualidade e cobertura de componentes e hooks.  
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** – Padrões de código e formatação automatizada, integrados ao fluxo de desenvolvimento.  
- **[SWAPI (Star Wars API)](https://swapi.dev/)** – Fonte de dados oficial da aplicação, fornecendo informações sobre planetas, espécies e personagens.  
- **[Jotai](https://jotai.org/)** – Biblioteca de gerenciamento de estado atômico simples e escalável (ideal para controle global leve, caso seja integrado futuramente).


---

## Estrutura geral do projeto


- `/app` → páginas, rotas e layout principal  
- `/app/api` → rotas internas 
- `/components` → componentes reutilizáveis (Card, DetailsCard, ResidentList)  
- `/lib/api` → camada de integração com a API externa  
- `/__tests__` → testes unitários de páginas e componentes  


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


## 📚 Referências Oficiais

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Styled Components Docs](https://styled-components.com/docs)
- [Axios Docs](https://axios-http.com/docs/intro)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [Prettier Docs](https://prettier.io/docs/en/)
- [SWAPI (Star Wars API)](https://swapi.dev/)
- [Jotai Docs](https://jotai.org/docs)
