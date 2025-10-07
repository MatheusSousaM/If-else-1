// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', function() {

    // 1. Solicita os dados ao usuário
    const idadeInput = prompt("Por favor, digite sua idade:");
    const contribuicaoInput = prompt("Agora, digite seu tempo de contribuição (em anos):");

    // 2. Converte os dados para números inteiros
    const idade = parseInt(idadeInput);
    const contribuicao = parseInt(contribuicaoInput);
    
    let mensagem;

    // 3. Verifica se as entradas são números válidos
    if (isNaN(idade) || isNaN(contribuicao)) {
        mensagem = "<p class='reprovado'>Erro: Por favor, insira valores numéricos válidos para idade e tempo de contribuição.</p>";
    } else {
        // 4. Aplica a regra de elegibilidade
        if (idade >= 65 || contribuicao >= 30) {
            mensagem = `<p class='aprovado'>Você pode se aposentar.</p> <p><small>Idade informada: ${idade} anos | Contribuição: ${contribuicao} anos.</small></p>`;
        } else {
            mensagem = `<p class='reprovado'>Você ainda não pode se aposentar.</p> <p><small>Idade informada: ${idade} anos | Contribuição: ${contribuicao} anos.</small></p>`;
        }
    }

    // 5. Exibe o resultado na página
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = mensagem;

});