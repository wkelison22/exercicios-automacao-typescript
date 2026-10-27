## 2. POST - Criar Novo Usuário

### 1. Identificação e Finalidade
- **Endpoint/Rota:** `/api/users`
- **Objetivo de Negócio:** Cadastrar um novo usuário no banco de dados do sistema, informando seu nome e cargo.

### 2. Estrutura do Request (O que o cliente envia)
- **Método HTTP:** POST
- **URL Completa:** `https://reqres.in/api/users`
- **Headers (Cabeçalhos):** `Content-Type: application/json` (Isto é obrigatório no POST para avisar ao servidor que estamos enviando os dados no formato JSON).
- **Body (Corpo):** Aqui nós enviamos os dados que queremos cadastrar. Segundo a documentação do Reqres, o formato é este:
{
    "name": "morpheus",
    "job": "leader"
}

### 3. Estrutura do Response (O que o servidor devolve)
- **Status Code Esperado:** 201 Created (O código 201 significa que alguma coisa foi criado com sucesso).
- **Payload de Retorno:** Quando enviamos o Body acima, o servidor do Reqres processa e devolve isso (ele gera um ID automático e a data de criação):
{
    "name": "morpheus",
  "job": "leader",
  "id": "660",
  "createdAt": "2026-10-27T02:52:10.063Z",
}