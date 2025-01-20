function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });
    document.getElementById('datetime').textContent = dateTimeString;
}

setInterval(updateDateTime, 1000);
updateDateTime();