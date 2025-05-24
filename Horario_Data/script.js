function saudacaoPorHorario() {
    const agora = new Date();
    const hora = agora.getHours();
    let saudacao = "";

    if (hora >= 6 && hora < 12) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    return saudacao;
}

function exibirDataHora() {
    const agora = new Date();
    const dataHora = agora.toLocaleString('pt-BR');
    const saudacao = saudacaoPorHorario();
    document.getElementById('datetime').innerHTML = `${dataHora}<br>${saudacao}!`;
}

setInterval(exibirDataHora, 1000);
exibirDataHora();