// Aguarda todo o conteúdo da página ser carregado antes de executar o código
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o botão fixo "ASSINANTES"
    const subscribeButton = document.querySelector(".subscribe-button");

    // Seleciona o botão com a classe .cta-button
    const ctaButton = document.querySelector(".cta-button");

    // Clicando no botão "ASSINANTES", adiciona um evento de clique que redireciona para outra página
    if (subscribeButton) {
        subscribeButton.addEventListener("click", () => {
            window.location.href = "../teste-gratuito/teste.html";
        });
    }

    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            window.location.href = "../teste-gratuito/teste.html";
        });
    }

    // Seleciona o botão de menu (ícone ☰)
    const menuButton = document.querySelector(".menu-button");

    // Seleciona os itens do menu suspenso
    const menuItems = document.querySelector(".menu-items");

    // Aadiciona um evento de clique para mostrar/ocultar o menu
    if (menuButton && menuItems) {
        menuButton.addEventListener('click', () => {
            // Alterna a visibilidade do menu entre 'flex' e 'none'
            menuItems.style.display = menuItems.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});


// Comentário explicativo:
// A lógica do carrossel (responsável por fazer as imagens se moverem ou trocarem dinamicamente)
// deve estar em um arquivo separado (carrimg/js.js) para manter o código organizado.
// Também é importante garantir que esse script do carrossel seja carregado após o HTML,
// ou seja executado somente depois que os elementos necessários estiverem prontos.
