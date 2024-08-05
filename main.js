function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/Sao_Paulo'
    };
    const datetime = now.toLocaleString('pt-BR', options);
    document.getElementById('datetime').textContent = datetime;
}

setInterval(updateDateTime, 1000);
updateDateTime();  // Atualiza a data e hora imediatamente ao carregar a página
