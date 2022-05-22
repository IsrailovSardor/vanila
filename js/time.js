const data = async () => {
    const getRequest = await fetch("../config.json");
    const config = await getRequest.json();

    const parseDateWithDefaultFormat = (dateTimeStr) => {
        const regexFormat = /(\d{2})\.(\d{2})\.(\d{4}) +(\d{2}):(\d{2})/;
        const [day, month, year, hour, minutse] = regexFormat.exec(dateTimeStr)
            .splice(1)
            .map(x => Number(x));

        return new Date(year, month - 1, day, hour, minutse);
    };
    let date = parseDateWithDefaultFormat(config.timerEndDate)

    function renderDate() {
        let newDate = new Date();
        totalDate = date - newDate;

        let days = Math.floor(totalDate / 1000 / 60 / 60 / 24);
        let hours = Math.floor(totalDate / 1000 / 60 / 60) % 24;
        let minuts = Math.floor(totalDate / 1000 / 60) % 60;
        let seconds = Math.floor(totalDate / 1000) % 60;

        document.getElementById('time-count__day').textContent = days;
        document.getElementById('time-count__hours').textContent = hours;
        document.getElementById('time-count__minutes').textContent = minuts;
        document.getElementById('time-count__seconds').textContent = seconds;

        if (days < 0) {
            document.getElementById("timet-data").style.display = "none"
            clearInterval(interval)
            return
        } else {
            document.getElementById("timet-data").style.display = "block"
        };
        if (days < 10) {
            document.getElementById('span__day').textContent = 0
        } else {
            document.getElementById('span__day').textContent = ''
        }
        if (hours < 10) {
            document.getElementById('span__hours').textContent = 0
        } else {
            document.getElementById('span__hours').textContent = ''
        }
        if (minuts < 10) {
            document.getElementById('span__minutes').textContent = 0
        } else {
            document.getElementById('span__minutes').textContent = ''
        }
        if (seconds < 10) {
            document.getElementById('span__seconds').textContent = 0
        } else {
            document.getElementById('span__seconds').textContent = ''
        }
        const interval = setInterval(renderDate, 1000)
    }
    renderDate();
};
data();