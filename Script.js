let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  if (tamanhoFonte > 10) {
    tamanhoFonte -= 2;
    document.body.style.fontSize = tamanhoFonte + "px";
  }
}

function alternarContraste() {
  document.body.classList.toggle("alto-contraste");
}
