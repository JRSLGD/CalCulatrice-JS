//DOM

const allbtns = [...document.querySelectorAll('.boutton')];
const listeKeycode = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', (e) => {
    const valeur = e.key.toString();

})

document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
})