document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      // Verifica se o email e a senha atendem aos requisitos
      if (email && senha.length >= 6) {
        // Redireciona para o Google
        window.location.href = "../sons-login/som.html";
      } else {
        alert("Preencha todos os campos corretamente.");
      }
    });

    const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {

  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {

    const resposta = await fetch('http://localhost:3000/users/login', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        senha
      })

    });

    const dados = await resposta.json();

    if (dados.user) {

      alert('Login realizado com sucesso!');

      // Salva usuário no navegador
      localStorage.setItem(
        'usuario',
        JSON.stringify(dados.user)
      );

      // Redireciona
      window.location.href = '../home/index.html';

    } else {

      alert('Email ou senha inválidos');

    }

  } catch (erro) {

    console.error(erro);

    alert('Erro ao conectar com servidor');

  }

});