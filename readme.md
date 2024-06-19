
### README.md

---

# Sistema de Armazenamento Simulado

Este projeto é um sistema simulado de armazenamento de arquivos, pastas e usuários, desenvolvido usando Node.js, Express.js, Sequelize (ORM para interação com banco de dados MySQL), e outras tecnologias.

### Funcionalidades Principais

- CRUD (Create, Read, Update, Delete) de Usuários
- CRUD de Arquivos
- CRUD de Pastas

### Requisitos

Para executar este projeto localmente, você precisa ter instalado:

- Node.js
- npm (gerenciador de pacotes do Node.js)
- MySQL Server

### Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/onedrive_simulado.git
   cd onedrive_simulado
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```plaintext
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=database_development
   DB_HOST=127.0.0.1
   PORT=3000
   ```

   Substitua `sua_senha` pelo password do seu MySQL, e ajuste as variáveis conforme necessário.

4. **Executar as migrações do banco de dados:**

   ```bash
   npx sequelize-cli db:migrate
   ```

   Isso irá aplicar as migrações necessárias para criar as tabelas no banco de dados configurado.

5. **Executar seeders (opcional):**

   Se desejar popular o banco de dados com dados iniciais:

   ```bash
   npx sequelize-cli db:seed:all
   ```

6. **Iniciar o servidor:**

   ```bash
   npm start
   ```

   O servidor estará disponível em `http://localhost:3000`.

### Uso

- **Endpoints Disponíveis:**

  - `/api/usuarios`
    - `GET`: Listar todos os usuários
    - `POST`: Criar um novo usuário
  - `/api/usuarios/:id`
    - `GET`: Obter detalhes de um usuário específico
    - `PUT`: Atualizar um usuário existente
    - `DELETE`: Excluir um usuário existente
  - `/api/arquivos`
    - `GET`: Listar todos os arquivos
    - `POST`: Criar um novo arquivo
  - `/api/arquivos/:id`
    - `GET`: Obter detalhes de um arquivo específico
    - `PUT`: Atualizar um arquivo existente
    - `DELETE`: Excluir um arquivo existente
  - `/api/pastas`
    - `GET`: Listar todas as pastas
    - `POST`: Criar uma nova pasta
  - `/api/pastas/:id`
    - `GET`: Obter detalhes de uma pasta específica
    - `PUT`: Atualizar uma pasta existente
    - `DELETE`: Excluir uma pasta existente
