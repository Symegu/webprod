export default function timer(timerMinute) {
    setInterval(function () {
    let seconds = timerMinute%60
    let minutes = timerMinute/60%60
    let hour = timerMinute/60/60%60
    if (timerMinute <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
        let sound = new Howl({
            src: ['sound.mp3']
          });
        sound.play();
        return timerMinute = undefined;
    } else {
        const timerShow = document.getElementById("timer");

        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timerMinute;
    }, 1000)
}
    