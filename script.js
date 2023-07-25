function change(clickedButton) {
    // Encontrar o elemento pai do botão clicado
    const elementoPai = clickedButton.parentNode;
  
    // Selecionar o primeiro elemento filho do elemento pai
    const primeiroElementoFilho = elementoPai.firstElementChild;
  

    const btn = event.target;
    const entrada = btn.previousElementSibling;
    const color = entrada.value;



    // Fazer algo com o primeiro elemento filho
    primeiroElementoFilho.style.backgroundColor = color;
    const spanTexto = primeiroElementoFilho.querySelector('span');
    spanTexto.textContent = color
  }
  