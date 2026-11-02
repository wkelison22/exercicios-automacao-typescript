export {};

async function executarTesteBrasilAPI() {
    console.log("------ Teste da BrasilAPI -------");
    
    try {
        const cepTestar = "01001000";
        // Manda o cep para o endpoint da BrasilAPI
        const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cepTestar}`);
        
        // Lê a resposta da request
        const data = await response.json();

        // Fazer as validações de status
        if (response.status === 200) {
            console.log(`Status code: ${response.status} - Sucesso na request`);
        } else {
            console.log(`Status code: ${response.status} - Falha na request`);
        }

        // Validar se o estado e a cidade retornados estão corretos
        if (data.state === "SP" && data.city === "São Paulo") {
            console.log(`CEP retornado: ${data.cep} | Estado: ${data.state} | Cidade: ${data.city}`);
            console.log("Validação de dados: SUCESSO ");
        } else {
            console.log(`CEP retornado: ${data.cep} | Estado: ${data.state} | Cidade: ${data.city}`);
            console.log("Validação de dados: FALHOU ");
        }
        
    } catch (error) {
        // Se a internet cair ou a API estiver fora do ar, cai aqui
        console.log(`Erro na request: ${error}`);
    }
}

executarTesteBrasilAPI();