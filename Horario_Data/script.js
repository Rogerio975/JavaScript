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

function diaDaSemanaTexto(dia) {
    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];
    return dias[dia];
}

function exibirDataHora() {
    const agora = new Date();
    const diaSemana = diaDaSemanaTexto(agora.getDay());
    const dataHora = agora.toLocaleString('pt-BR');
    const saudacao = saudacaoPorHorario();
    document.getElementById('datetime').innerHTML = `${diaSemana}<br>${dataHora}<br>${saudacao}!`;
}

setInterval(exibirDataHora, 1000);
exibirDataHora();