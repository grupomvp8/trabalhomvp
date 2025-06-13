document.addEventListener("DOMContentLoaded", () => {
  const subscribeButton = document.querySelector(".subscribe-button");
  const subscriberButton = document.querySelector(".subscriber-button");
  const ctaButton = document.querySelector(".cta-button");

  if (subscribeButton) {
    subscribeButton.addEventListener("click", () => {
      window.location.href = "assine.html";
    });
  }

  if (subscriberButton) {
    subscribeButton.addEventListener("click", () => {
      window.location.href = "assine.html";
    });
  }

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      window.location.href = "./teste-gratuito/teste.html";
    });
  }
});


   
    // Criando o container do menu
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Botão do menu
    const button = document.createElement('button');
    button.classList.add('menu-button');
    button.innerText = '☰';

    // Container dos itens do menu
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    // Lista de links do menu
    const links = [
        { href: 'index.html', text: '🏠 Início' },
        { href: 'ajuda.html', text: '❓ Ajuda' },
        { href: 'historia.html', text: '📜 História' }
    ];

    links.forEach(linkData => {
        const link = document.createElement('a');
        link.href = linkData.href;
        link.innerText = linkData.text;
        menuItems.appendChild(link);
    });

    // Adicionando elementos ao container do menu
    menuContainer.appendChild(button);
    menuContainer.appendChild(menuItems);

    // Adicionando funcionalidade ao botão do menu
    button.addEventListener('click', () => {
        menuItems.style.display = menuItems.style.display === 'flex' ? 'none' : 'flex';
    });

    return menuContainer;
