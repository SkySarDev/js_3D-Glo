const validations = () => {
    const regexp = new Map([
        ['user_name', /[^ а-яё]/i],
        ['user_email', /[^(a-z0-9)(.@_!-)]/i],
        ['user_phone', /[^+0-9]/],
        ['user_message', /[^ а-яё0-9.,!?]/],
        ['calc', /\D/],
    ]);

    document.addEventListener('focusout', e => {
        const target = e.target;
        if (target.name === 'user_name')
            target.value = target.value
                .replace(/ +/g, ' ')
                .split(' ')
                .reduce(
                    (accum, item) => accum + ' ' + item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase(),
                    ''
                )
                .trim();
    });

    document.addEventListener('input', e => {
        const target = e.target,
            name = target.name;

        if (name && regexp.has(name)) {
            target.value = target.value.replace(regexp.get(name), '');

            if (name === 'user_phone') {
                const minLength = target.value[0] === '+' ? 12 : 11;

                if (target.value.length < minLength)
                    target.setCustomValidity(`Поле должно содержать минимум ${minLength} символов!`);
                else target.setCustomValidity('');
            }
        }

        if (target.tagName === 'INPUT' && target.classList.contains('calc-item'))
            target.value = target.value.replace(regexp.get('calc'), '');
    });
};

export default validations;
