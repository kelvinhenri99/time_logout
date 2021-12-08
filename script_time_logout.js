function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {

    hours  = parseInt(timer / 60 / 60, 10);
    minutes = parseInt(timer / 60 % 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
        $.get('EXEMPLO', function(data) {
            var secondsDiff = parseInt(data);
            console.log(secondsDiff);

            if (secondsDiff <= 0 || isNaN(secondsDiff) === true) {
                window.location.href = 'logout';
            } else {
                clearInterval(interval);
                startTimer(secondsDiff, document.querySelector('#time'));
            }
        });
        }
    }, 1000);
}

window.onload = function () {
    var seconds = 7199;
    display = document.querySelector('#time');
    startTimer(seconds, display);
};