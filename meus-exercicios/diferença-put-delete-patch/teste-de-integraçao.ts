import { test, expect } from '@playwright/test';

test('Deve atualizar apenas o cargo do usuário usando PATCH', async ({ request }) => {
  // 1. Preparação (Setup) e Ação
  const resposta = await request.patch('/api/users/2', {
    data: {
      cargo: "QA Engineer"
    }
  });

  // 2. Validação do Contrato (Asserção do Status Code)
  expect(resposta.status()).toBe(200);

  // 3. Validação do Payload
  const corpo = await resposta.json();
  expect(corpo.cargo).toBe("QA Engineer");
});