# Documentação de Integração - API Reqres

## 1. GET - Buscar Usuário Específico

### 1. Identificação e Finalidade
- **Endpoint/Rota:** `/api/users/2`
- **Objetivo de Negócio:** Consultar e recuperar os dados de perfil de um usuário cadastrado no sistema através do seu ID.

### 2. Estrutura do Request (O que o cliente envia)
- **Método HTTP:** GET
- **URL Completa:** `https://reqres.in/api/users/2`
- **Headers (Cabeçalhos):** `Accept: application/json` (Boa prática para garantir que o servidor responda em JSON)
- **Body (Corpo):** N/A (Não se envia payload em requisições GET padrão).

### 3. Estrutura do Response (O que o servidor devolve)
- **Status Code Esperado:** 200 OK
- **Payload de Retorno:**
{
   "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
    "url": "https://reqres.in/go/posthog",
    "text": "PostHog ingests and stores your analytics, errors, replays, and business data so you and your agents can query and act on it. Get started.",
    "sponsored_by": "PostHog"
}