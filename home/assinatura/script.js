// Menu toggle (caso deseje aprimorar interatividade futuramente)
document.querySelector('.menu-button').addEventListener('click', () => {
  document.querySelector('.menu-items').classList.toggle('show');
});

// Validação adicional (reforço do pattern já no HTML)
document.getElementById('form-assinatura').addEventListener('submit', function (e) {
  const nome = document.getElementById('nome').value.trim();
  if (nome.split(' ').length < 2) {
    alert('Por favor, insira seu nome completo (nome e sobrenome).');
    e.preventDefault();
  }
});

document.getElementById('form-assinatura').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede envio automático

  const nome = document.getElementById('nome').value.trim();

  if (nome.split(' ').length < 2) {
    alert('Por favor, insira seu nome completo (nome e sobrenome).');
    return;
  }

  // Simula envio do formulário, salvar dados, etc.

});

