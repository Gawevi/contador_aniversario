document.addEventListener('DOMContentLoaded', function() {
    const dataDoEvento = new Date("Sep 24, 2024 01:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function() {
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horasEmMs = 1000 * 60 * 60;
        const minEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = `Evento Expirado`
        }
    }, 1000);
});