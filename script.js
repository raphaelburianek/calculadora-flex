document.getElementById('calc-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const precoGasolina = parseFloat(document.getElementById('gasolina').value);
  const precoEtanol = parseFloat(document.getElementById('etanol').value);

  const razao = precoEtanol / precoGasolina;
  const porcentagem = (razao * 100).toFixed(1);

  const resultCard = document.getElementById('result');
  const resultTitle = document.getElementById('result-title');
  const resultText = document.getElementById('result-text');

  // Mostra o card removendo a classe 'hidden'
  resultCard.classList.remove('hidden');

  //  decide qual texto mostra com base no resultado.:
  if (razao <= 0.7) {
    resultTitle.textContent = "⛽ Abasteça com ETANOL";
    resultText.textContent = `O etanol está custando ${porcentagem}% da gasolina, sendo a opção mais vantajosa para o seu bolso.`;
    resultCard.style.backgroundColor = "#f0fdf4"; // Fundo verde
  } else {
    resultTitle.textContent = "⛽ Abasteça com GASOLINA";
    resultText.textContent = `O etanol está custando ${porcentagem}% da gasolina (acima de 70%). A gasolina rende mais e compensa mais.`;
    resultCard.style.backgroundColor = "#eff6ff"; // Fundo azul
  }
});