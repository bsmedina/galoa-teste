const btnCriarTopico = document.querySelector(".toggleNewTopic");

const toggleNewTopic = () => {
    const novoTopico = document.querySelector('.new-topic');

    novoTopico.classList.toggle('new-topic--active');
};
