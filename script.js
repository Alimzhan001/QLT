let date = new Date('Jan 1 2022 00:00:00');

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.getElementById('d').innerHTML = days;
    document.getElementById('h').innerHTML = hours;
    document.getElementById('m').innerHTML = minutes;
    document.getElementById('s').innerHTML = seconds;

}
setInterval(counts, 1000);