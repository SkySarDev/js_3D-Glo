const ourTeam = () => {
    const command = document.querySelector('.command .row');

    const heandlers = (elem, event) =>
        elem.addEventListener(event, e => {
            const target = e.target;

            if (target.classList.contains('command__photo'))
                [target.src, target.dataset.img] = [target.dataset.img, target.src];
        });

    heandlers(command, 'mouseover');
    heandlers(command, 'mouseout');
};

export default ourTeam;
