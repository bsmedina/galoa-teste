const btnEnviarTopico = document.querySelector('btn-txtarea');
const abrirNovoTopico = document.querySelector('.btn-novoTopico');

const sendTopic = () => {
    const btnEnviarTopico = document.querySelector('.topico-enviado');
    const mudarMarginTopico = document.querySelector('.topicos');

    btnEnviarTopico.classList.toggle('topico-enviado--active');
    mudarMarginTopico.classList.toggle('topicos--active');
};

const newTopic = () => {
    const btnEnviarTopico = document.querySelector('.topico-enviado');
    const mudarMarginTopico = document.querySelector('.topicos');

    btnEnviarTopico.classList.toggle('topico-enviado--active');
    mudarMarginTopico.classList.toggle('topicos--active');
}
