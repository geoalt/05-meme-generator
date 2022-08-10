/* Projeto iniciado */
// DOM
const paraInput = document.querySelector('#text-input');
const memeTextPreview = document.querySelector('#meme-text');
const imageInput = document.querySelector('#meme-insert');

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


// Eventos
paraInput.addEventListener('keyup', printText);