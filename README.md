
# Blockchain API

Este projeto é uma API minimalista construída em TypeScript que simula um **blockchain** básico para aprendizado e demonstração. Ele implementa funcionalidades essenciais de um blockchain, como criação de blocos, registro de transações e mineração.

---

## **Características**

- Simulação de um blockchain básico com proof-of-work simplificado.
- Registro de transações entre remetentes e destinatários.
- Mineração de blocos para adicionar transações ao blockchain.
- Visualização completa do blockchain (cadeia de blocos).

---

## **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução.
- **Express.js**: Framework para criação da API.
- **TypeScript**: Tipagem estática e segurança de código.
- **Jest**: Testes unitários.
- **Insomnia**: Ferramenta para testar os endpoints.

---

## **Instalação**

### **Pré-requisitos**
- Node.js (v16 ou superior)
- npm (v7 ou superior)

### **Passos**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Gustavohenribra/blockchain-api.git
   cd blockchain-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione a porta e a chave que usara no header da requisição para a autenticação:
     ```
        PORT="3000"
        API_KEY="123"
     ```

4. Inicie o servidor:
   - Ambiente de desenvolvimento:
     ```bash
     npm run dev
     ```
   - Compilação e execução:
     ```bash
     npm run build
     npm start
     ```

---

## **Endpoints da API**

### **1. `GET /blockchain`**
- **Descrição**: Mensagem de boas-vindas.
- **Resposta**:
  ```json
  {
    "message": "API Blockchain Simplificada!"
  }
  ```

---

### **2. `POST /blockchain/transactions`**
- **Descrição**: Adiciona uma nova transação à lista de pendentes.
- **Corpo da Requisição**:
  ```json
  {
    "sender": "Alice",
    "receiver": "Bob",
    "amount": 100
  }
  ```
- **Resposta**:
  ```json
  {
    "sender": "Alice",
    "receiver": "Bob",
    "amount": 100
  }
  ```

---

### **3. `POST /blockchain/blocks`**
- **Descrição**: Cria um bloco com as transações pendentes.
- **Corpo da Requisição**:
  ```json
  {
    "transactions": [
      { "sender": "Alice", "receiver": "Bob", "amount": 50 }
    ]
  }
  ```
- **Resposta**:
  ```json
  {
    "hash": "abc123",
    "transactions": [
      { "sender": "Alice", "receiver": "Bob", "amount": 50 }
    ],
    "previousHash": "xyz789",
    "timestamp": 1673622920
  }
  ```

---

### **4. `GET /blockchain/blocks`**
- **Descrição**: Retorna toda a cadeia de blocos.
- **Resposta**:
  ```json
  [
    {
      "hash": "genesis-hash",
      "transactions": [],
      "previousHash": "0",
      "timestamp": 1673620000
    },
    {
      "hash": "abc123",
      "transactions": [
        { "sender": "Alice", "receiver": "Bob", "amount": 50 }
      ],
      "previousHash": "genesis-hash",
      "timestamp": 1673622920
    }
  ]
  ```

---

## **Testando a API**

### **1. Com Insomnia**

1. Instale o Insomnia: [Insomnia](https://insomnia.rest/)
2. Crie um novo Workspace e configure os endpoints acima.
3. Teste as rotas fornecendo os dados esperados.

---

## **Scripts Disponíveis**

- **`npm run dev`**: Inicia o servidor em ambiente de desenvolvimento.
- **`npm run build`**: Compila o projeto para JavaScript.
- **`npm start`**: Inicia o servidor em produção.
- **`npm test`**: Executa os testes com Jest.

---

## **Testes**

- O projeto utiliza **Jest** para realizar testes unitários.
- Para rodar os testes:
  ```bash
  npm test
  ```

---

## **Contribuições**

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para melhorias e correções.

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).

---
