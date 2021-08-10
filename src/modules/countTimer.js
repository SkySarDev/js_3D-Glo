const countTimer = () => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    const addZero = num => (num < 10 ? '0' + Math.floor(num) : Math.floor(num));

    const getTimeRemaining = () => {
        const deadline = Date.now() + 2 * 24 * 60 * 60 * 1000, // Current time + 2 days
            dateStop = new Date(deadline).setHours(0, 0, 0),
            dateNow = Date.now(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = addZero(timeRemaining % 60),
            minutes = addZero((timeRemaining / 60) % 60),
            hours = addZero(timeRemaining / 60 / 60);

        return { timeRemaining, hours, minutes, seconds };
    };

    const interval = setInterval(updateClock, 1000);

    function updateClock() {
        const timer = getTimeRemaining();

        if (timer.timeRemaining <= 0) {
            clearInterval(interval);

            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        } else {
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
        }
    }

    updateClock();
};

export default countTimer;
