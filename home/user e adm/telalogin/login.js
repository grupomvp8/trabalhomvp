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