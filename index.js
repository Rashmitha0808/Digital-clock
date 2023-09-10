const clock = document.getElementById('clock');
let is24hour = true;

function updateClock() {
    const now = new Date();
    // console.log(now); Sun Sep 10 2023 10:03:34 GMT+0530 (India Standard Time)
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, 0);
    //Here 2 the digit it takes and the 0 is padding; if you use 3 and 0 it will give 005;

    clock.textContent = now;
    clock.textContent = hours;
    clock.textContent = minutes;
    clock.textContent = seconds;

    let timeString = '';

    if (is24hour) {
        hours = hours.toString().padStart(2, 0);
        timeString = `${hours}:${minutes}:${seconds}`
    } else {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        hours = hours.toString().padStart(2, '0');
        timeString = `${hours}:${minutes}:${seconds}:${period}`;
    }
    clock.textContent = timeString;
}
//Toggle 12 to 24
document.getElementById('formatHours').addEventListener('click', function () {
    is24hour = !is24hour;

    this.textContent = is24hour ? '12 Hours' : '24 Hours'

    updateClock();
})

setInterval(updateClock, 1000);

updateClock();
