import postData from './postData';

const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        statusMessage = document.createElement('div'),
        spinner = document.createElement('img');

    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';
    spinner.src = 'images/spinner.gif';
    spinner.style.cssText = 'width: 30px; height: 30px;';

    document.addEventListener('submit', e => {
        const target = e.target;
        e.preventDefault();

        target.appendChild(statusMessage);
        statusMessage.append(spinner);

        const formData = new FormData(target);
        const body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        target.reset();

        const deleteStatusMessage = () => {
            setTimeout(() => {
                statusMessage.textContent = '';
            }, 5000);
        };

        postData(body)
            .then(response => {
                if (response.status === 200) {
                    statusMessage.textContent = successMessage;
                    deleteStatusMessage();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                deleteStatusMessage();
                console.error(error);
            });
    });
};

export default sendForm;
