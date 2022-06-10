export default function timer(timerMinute) {
    setInterval(function () {
    let seconds = timerMinute%60
    let minutes = timerMinute/60%60
    let hour = timerMinute/60/60%60
    if (timerMinute <= 0) {
        clearInterval(timer);
        
        let sound = new Howl({
            src: ['sound.mp3']
          });
        sound.play();
        alert("Время закончилось");
        return timerMinute = undefined;
    } else {
        const timerShow = document.getElementById("timer");

        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timerMinute;
    }, 1000)
}
    