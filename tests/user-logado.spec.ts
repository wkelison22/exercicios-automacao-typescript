import { test, expect } from '@playwright/test';

test('Faz o login e salva a sessão', async ({ page }) => {
  await page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html');
  
await page.locator('input[type="email"]').first().fill('admin@system.com');
  await page.getByPlaceholder('Mínimo de 8 caracteres').fill('AdminPassword123');
  await page.getByRole('button', { name: 'Entrar' }).click();

  // É obrigatório esperar o login concluir antes de salvar. 


await expect(page.getByText('Painel Administrativo')).toBeVisible();

  // Salva os cookies da sessão logada 
  await page.context().storageState({ path: 'estado-login.json' });
});
