/* Projeto iniciado */
// DOM
const showMeme = document.querySelector('#meme-image-container');
const paraInput = document.querySelector('#text-input');
const memeTextPreview = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const memePreset = document.querySelectorAll('.meme');

// Funcao que faz o preview do texto inserido no input de tipo texto
const printText = () => {
  memeTextPreview.innerText = paraInput.value;
};


// Funcao que faz o preview da imagem a ser usada na criacao do meme


imageInput.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#meme-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

// Muda borda para 1 (fire)
const setFire = () => {
  const fireBorder = getComputedStyle(fireButton).border;
  showMeme.style.border = fireBorder;
};

// Muda borda para 2 (water)
const setWater = () => {
  const waterBorder = getComputedStyle(waterButton).border;
  showMeme.style.border = waterBorder;
};

// Muda borda para 3 (earth)
const setEarth = () => {
  const earthBorder = getComputedStyle(earthButton).border;
  showMeme.style.border = earthBorder;
};

// Muda imagem do meme 'pre-pronto'
const changePic = (e) => {
  const memeImagePreview = document.querySelector('#meme-image');
  const getSource = e.target.src
  memeImagePreview.style.backgroundImage = `url(${getSource}`;
};

// Eventos
paraInput.addEventListener('keyup', printText);
fireButton.addEventListener('click', setFire);
waterButton.addEventListener('click', setWater);
earthButton.addEventListener('click', setEarth);

for (let item of memePreset) {
  item.addEventListener('click', changePic);
}