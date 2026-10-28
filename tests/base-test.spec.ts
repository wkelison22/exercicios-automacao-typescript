import { test, expect } from '@playwright/test';

// 1. Avisa para usar o "passe de acesso" que o outro teste gerou
test.use({ storageState: 'estado-login.json' });

test('Deve validar elemento na tela logada', async ({ page }) => {
  
  // 2. Você já cai direto na página logada! Não vai aparecer tela de login.
  await page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/painel.html');

  // 3. Faz a validação que o seu professor pediu
  const elementoLogado = page.getByText('ADMIN');
  await expect(elementoLogado).toBeVisible();
});