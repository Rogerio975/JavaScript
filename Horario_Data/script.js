function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'medium',
        timeZone: 'America/Sao_Paulo' // Fuso horário de Brasília
    });
    document.getElementById('datetime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();