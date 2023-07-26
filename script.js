function change(clickedButton) {
  const elementoPai = clickedButton.parentNode;
  const primeiroElementoFilho = elementoPai.firstElementChild;
  const segundoElementoFilho = elementoPai.children[1];
  const inputColor = elementoPai.querySelector(".input-color");
  const btn = event.target;
  const entrada = btn.previousElementSibling;
  const color = entrada.value;
  if (entrada.value !== "") {
    const rgbaColor = hexToRGBA(color);
    primeiroElementoFilho.style.backgroundColor = rgbaColor;
    const spanTexto = primeiroElementoFilho.querySelector("span");
    spanTexto.textContent = color;
    segundoElementoFilho.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, ${rgbaColor} 100%)`;
    inputColor.value = color;
  }
}

function atualizarValorTexto(elementoInputColor) {
  const corSelecionada = elementoInputColor.value;
  const elementoPai = elementoInputColor.parentNode;
  const inputText = elementoPai.querySelector(".input");
  inputText.value = corSelecionada;
}

function hexToRGBA(hex) {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);
  return "rgba(" + r + ", " + g + ", " + b + ", 1)";
}
