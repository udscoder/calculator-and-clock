const display = document.querySelector('.output'),
    buttons = document.querySelectorAll('.key');


buttons.forEach(item => {
    item.addEventListener('click',  () => {
        if (item.value === 'C') {
            display.value = ''
        }
        else if (display.value !== '' && item.value === '=') {
            display.value = eval(display.value)
        }
        display.value += item.id;
    })
})



setInterval(setClock, 1000);

const h = document.querySelector('.hour'),
    m = document.querySelector('.minute'),
    s = document.querySelector('.second');
function setClock () {
    let currentTime = new Date(),
        sRotation = currentTime.getSeconds() / 60,
        mRotation = (sRotation + currentTime.getMinutes()) / 60,
        hRotation = (mRotation + currentTime.getHours()) / 12;
    runClock(s, sRotation);
    runClock(m, mRotation);
    runClock(h, hRotation);

}

function runClock(elem, hand) {
    elem.style.setProperty('--rotation', hand * 360)
}
setClock();

