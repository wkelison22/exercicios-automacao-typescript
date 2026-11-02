export {};

console.log("--- exercicio para logica em qa---\n");

// 1. Variáveis
const nomeDoTeste = "Login de Usuário";
let tentativas = 3;
const testePassou = true;
// Saída esperada: O teste "Login de Usuário" com 3 tentativas passou? entao verdadeiro
console.log(`1. Variáveis: O teste "${nomeDoTeste}" com ${tentativas} tentativas passou? ${testePassou}`);

// 2. Operadores: vou colocar um exemplo de calculo da taxa de sucesso de testes
const totalTestes = 50;
const testesFalhados = 5;
const taxaDeSucesso = ((totalTestes - testesFalhados) / totalTestes) * 100;
// Saída esperada: Taxa de sucesso é 90%
console.log(`2. Operadores: Taxa de sucesso é ${taxaDeSucesso}%`);

// 3. Condicionais
const statusDoServidor = 200; // 200 significa "OK" na web
// Saída esperada: Servidor Online! Testes podem iniciar.
if (statusDoServidor === 200) {
    console.log("3. Condicionais: Servidor Online! Testes podem iniciar.");
} else {
    console.log("3. Condicionais: Servidor Offline! Abortar testes.");
}

// 4. Loops
console.log("4. Loops:");
// Saída esperada: 
// Validando item 1 do carrinho...
// Validando item 2 do carrinho...
// Validando item 3 do carrinho...

// aqui ele vai navegar entre os intens do carrinho e validar cada um deles, simulando um teste de qa.
for (let i = 1; i <= 3; i++) {
    console.log(`Validando item ${i} do carrinho...`);
}

// 5. aqui e um desafio, vamos avaliar o tempo de resposta de uma aplicacao 
console.log("\n5. Desafio de QA:");
const tempoDeResposta = 1500; // tempo em milissegundos
const tempoMaximoPermitido = 2000;
const resultadoQA = tempoDeResposta <= tempoMaximoPermitido ? "Aprovado (Rápido)" : "Reprovado (Lento)";
// Saída esperada: O tempo de 1500ms foi: Aprovado (Rápido)
console.log(`O tempo de ${tempoDeResposta}ms foi: ${resultadoQA}`);