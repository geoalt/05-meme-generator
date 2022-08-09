/* Projeto iniciado */
// DOM
const paraInput = document.querySelector('#text-input');
const memeTextPreview = document.querySelector('#meme-text');

const printText = () => {
  memeTextPreview.innerText = paraInput.value;
};


// Eventos
paraInput.addEventListener('keyup', printText);