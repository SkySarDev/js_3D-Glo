const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

    const popupAnimation = () => {
        const popupContent = document.querySelector('.popup-content'),
            popupCoords = popupContent.getBoundingClientRect();

        popupContent.style.top = `-${popupCoords.height}px`;
        let popupTop = parseInt(popupContent.style.top);

        const animationInterval = setInterval(() => {
            popupTop += 5;

            if (popupTop >= popupCoords.top) clearInterval(animationInterval);

            popupContent.style.top = `${popupTop}px`;
        }, 0);
    };

    popupBtn.forEach(item => {
        item.addEventListener('click', () => {
            popup.style.display = 'block';

            if (document.documentElement.clientWidth >= 768) popupAnimation();
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;

        if (target.classList.contains('popup-close')) popup.style.display = 'none';
        else {
            target = target.closest('.popup-content');

            if (!target) popup.style.display = 'none';
        }
    });
};

export default togglePopup;
