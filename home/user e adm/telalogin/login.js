document.addEventListener("DOMContentLoaded", () => {
  // Toggle do menu
  const menuButton = document.querySelector(".menu-button");
  const menuItems = document.querySelector(".menu-items");

  if (menuButton && menuItems) {
    menuButton.addEventListener("click", () => {
      menuItems.style.display = menuItems.style.display === "flex" ? "none" : "flex";
    });
  }

  // Validação do login (exemplo simples)
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email === "" || senha.length < 6) {
      alert("Preencha todos os campos corretamente.");
      e.preventDefault();
    } else {
      alert("Login realizado com sucesso!"); // Substituir futuramente por redirecionamento
    }
  });
});
