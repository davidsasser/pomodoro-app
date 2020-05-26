export default function formatTimerHTML(timerInSeconds) {
    var seconds = timerInSeconds % 60;
    var min = Math.floor(timerInSeconds / 60);
    if (seconds < 10) {
        seconds = `0${seconds.toString()}`
    }
    if (min < 10) {
        min = `0${min.toString()}`
    }
    return `${min}:${seconds}`
}