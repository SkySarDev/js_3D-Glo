const smoothScrolling = () => {
    const links = document.querySelectorAll('a');

    const scrollTo = (point, behavior = 'smooth', block = 'start') => {
        document.querySelector(point).scrollIntoView({ behavior, block });
    };

    links.forEach(link => {
        const href = link.getAttribute('href');

        if (href && href !== '#' && href !== '#close') {
            link.addEventListener('click', e => {
                e.preventDefault();
                scrollTo(href);
            });
        }
    });
};

export default smoothScrolling;
