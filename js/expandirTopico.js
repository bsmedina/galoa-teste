const dotsRespostas = document.querySelector(".footer-icons");

const collapseTopics = () => {
    const dotsRespostas = document.querySelector('.card-topico-expandido');
    const reescreverClassLike = document.querySelector('.like');
    const reescreverClassRes = document.querySelector('.res');

    dotsRespostas.classList.toggle('card-topico-expandido--active');
    reescreverClassLike.textContent = "4 likes";
    reescreverClassRes.textContent = "4 respostas";
};