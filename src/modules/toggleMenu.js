const toggleMenu = () => {
    const menuBtn = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => menu.classList.toggle('active-menu');

    menu.addEventListener('click', event => {
        const target = event.target;

        if (target.tagName !== 'MENU' && target.tagName !== 'LI') handlerMenu();
    });

    menuBtn.addEventListener('click', handlerMenu);
};

export default toggleMenu;
