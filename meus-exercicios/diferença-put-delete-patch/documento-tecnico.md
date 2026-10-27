# Documento tecnico: fundamento tecnico de API's e testes de integraçao


## 1. Métodos de Modificação e Remoção (PUT, PATCH e DELETE)

*   **PUT (Substituição Total):** Usado para substituir completamente um recurso existente. Se você enviar um objeto apenas com o nome e esquecer o e-mail, o servidor pode sobrescrever o e-mail com nulo ou apagar o dado anterior.
*   **PATCH (Atualização Parcial):** Usado para fazer modificações específicas. Trafega menos dados na rede, pois você envia apenas os campos que realmente sofreram alteração.
*   **DELETE (Remoção):** Exclusivo para apagar um recurso do servidor. Uma boa prática de consumo do método DELETE é validar o status `204 No Content`, garantindo que o dado foi removido sem esperar um corpo JSON de resposta.

---

## 2. Principais Status Codes (Padrão HTTP)
Os códigos de estado são a forma padronizada de o servidor comunicar o resultado numérico de uma requisição:

**Sucesso (2xx):**
*   **200 OK:** A requisição foi bem-sucedida (Padrão para GET e PUT).
*   **201 Created:** A requisição teve sucesso e um novo recurso foi criado (Padrão para POST).
*   **204 No Content:** A requisição teve sucesso, mas não há dados no corpo da resposta para retornar (Padrão para DELETE).

**Erros do Cliente (4xx):**
*   **400 Bad Request:** O cliente enviou dados em formato incorreto ou faltando informações obrigatórias.
*   **404 Not Found:** O recurso ou a rota (endpoint) solicitada não existe no servidor.

**Erros do Servidor (5xx):**
*   **500 Internal Server Error:** Ocorreu uma falha inesperada no código do backend (O servidor quebrou).

---

## 3. Exemplo de Payload JSON Bem Estruturado
Um payload JSON de qualidade deve ter chaves sempre em aspas duplas, e usar os tipos de dados apropriados (texto, número, booleanos, listas e objetos aninhados).

```json
{
  "usuarioId": 1045,
  "nomeCompleto": "Wkelison Guilherme",
  "email": "wkelison@email.com",
  "ativo": true,
  "permissoes": ["admin", "tester"],
  "endereco": {
    "cidade": "Recife",
    "estado": "PE",
    "cep": "50000-000"
  }
}