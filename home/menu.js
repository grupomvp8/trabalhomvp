export function menu() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const button = document.createElement('button');
    button.classList.add('menu-button');
    button.innerText = '☰';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

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

    menuContainer.appendChild(button);
    menuContainer.appendChild(menuItems);

    return menuContainer;
}