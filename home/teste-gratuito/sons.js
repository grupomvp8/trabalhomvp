const sonsAtivos = {};
const icones = document.querySelectorAll('.sound-icon');

icones.forEach(icone => {
    const caminhoSom = icone.getAttribute('data-som');
    const audio = new Audio(caminhoSom);
    audio.loop = true;
    sonsAtivos[caminhoSom] = {
        audio: audio,
        tocando: false
    };
    icone.addEventListener('click', () => {
        const som = sonsAtivos[caminhoSom];
        if (!som.tocando) {
            som.audio.play();
            som.tocando = true;
            icone.style.opacity = '1';
        } else {
            som.audio.pause();
            som.tocando = false;
            icone.style.opacity = '0.5';
        }
    });
});