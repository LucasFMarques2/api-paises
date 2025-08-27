# 🌎 API de Catálogo de Países

API RESTful que fornece dados sobre países, consumindo informações da API pública [Rest Countries](https://restcountries.com/) e enriquecendo com um sistema de avaliação local (curtir/não curtir) armazenado em um banco de dados PostgreSQL.

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express.js
- PostgreSQL
- Knex.js
- Axios
- Dotenv
- Swagger

---

## ⚙️ Instalação na Máquina Local

### 🛠️ Programas Necessários
- Node.js (v18 ou superior)
- Npm
- PostgreSQL

---

### 📥 Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/LucasFMarques2/api-paises
```

2. **Acesse a pasta do projeto:**
```bash
cd api-paises
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Crie e configure o arquivo de ambiente:**
   - Crie um arquivo chamado `.env` na raiz do projeto.
   - Cole o conteúdo abaixo e preencha com suas credenciais.
```env
# Porta em que o servidor irá rodar
PORT=3000

# String de conexão com seu banco de dados PostgreSQL
DB_CONNECTION_STRING="postgresql://usuario:senha@host:porta/database?sslmode=require"

# URL base da API externa
API_BASE_URL=[https://restcountries.com/v3.1](https://restcountries.com/v3.1)
```

5. **Execute as migrations do Banco de Dados:**
   - Este comando irá criar a tabela `avaliacoes` no seu banco de dados.
   - *Ajuste o caminho para o `knexfile.js` se a sua estrutura de pastas for diferente.*
```bash
npx knex migrate:latest --knexfile src/config/knexfile.js
```

6. **Inicie o servidor:**
```bash
npm start
```

---

## 📖 Documentação da API

A documentação interativa com todos os endpoints está disponível via Swagger após iniciar o servidor:
**http://localhost:3000/api-docs**

🎉 Pronto! Sua API de Catálogo de Países está configurada e pronta para uso!
