const display1El = document.querySelector(".display-1"),
    display2El = document.querySelector(".display-2"),
    tempResultEl = document.querySelector(".temp-result"),
    numbersEl = document.querySelectorAll(".number"),
    operationEl = document.querySelectorAll(".operation"),
    equalEl = document.querySelector(".equal"),
    clearAllEl = document.querySelector(".all-clear");


let dis1Num = '',
    dis2Num = '',
    haveDot = false,
    result = null,
    lastOperation = '';

const calculator = () => {
    numbersEl.forEach(number => {
        number.addEventListener('click', (e) => {
            if (e.target.innerText === '.' && !haveDot) {
                haveDot = true
            }
            else if (e.target.innerText === '.' && haveDot) {
                return;
            }
            dis2Num += e.target.innerText
            display2El.innerText = dis2Num
        })
    })

    operationEl.forEach(operation => {
        operation.addEventListener('click', (e) => {
            if(!dis2Num) return
            haveDot = false
            const operation = e.target.innerText

            if (dis1Num && dis2Num && lastOperation) {
                mathOperation()
            }
            else {
                result = parseFloat(dis2Num)
            }
            clearDisplay2(operation);
            lastOperation = operation;
        })
    })

    const clearDisplay2 = (operation = '') => {
        dis1Num += dis2Num + ' ' + operation + ' ';
        display1El.innerHTML = dis1Num;
        display2El.innerHTML = '';
        dis2Num = '';
        tempResultEl.innerHTML = result;
    }

    const mathOperation = () => {
        if (lastOperation === 'x') {
            result = parseFloat(result) * parseFloat(dis2Num)
        }
        else if (lastOperation === '+') {
            result = parseFloat(result) + parseFloat(dis2Num)
        }
        else if (lastOperation === '-') {
            result = parseFloat(result) - parseFloat(dis2Num)
        }
        else if (lastOperation === '/') {
            result = parseFloat(result) / parseFloat(dis2Num)
        }
    }

    equalEl.addEventListener('click', () => {
        if(!dis2Num || !dis1Num) return;
        haveDot = false;
        mathOperation();
        clearDisplay2();
        display2El.innerHTML = result;
        tempResultEl.innerHTML = '';
        dis2Num = result;
        dis1Num = ''
    })

    clearAllEl.addEventListener('click',  () => {
        dis1Num = '';
        display1El.innerHTML = '';
        dis2Num = '';
        display2El.innerHTML = '';
        tempResultEl.innerHTML = '';
    })

}

calculator()




const keyboard = () => {
    window.addEventListener("keydown", (e) => {
        if (
            e.key === "0" ||
            e.key === "1" ||
            e.key === "2" ||
            e.key === "3" ||
            e.key === "4" ||
            e.key === "5" ||
            e.key === "6" ||
            e.key === "7" ||
            e.key === "8" ||
            e.key === "9" ||
            e.key === "."
        ) {
            clickNumber(e.key);
        }
        else if (
            e.key === '+' ||
            e.key === '-' ||
            e.key === '*' ||
            e.key === '/'
        ) {
            clickOperations(e.key)
        }
        else if (e.key === 'Enter') {
            clickEqual()
        }

    });

    function clickNumber(key) {
        numbersEl.forEach((button) => {
            if (button.innerText === key) {
                button.click();
            }
        });
    }

    const clickOperations = (key) => {
        operationEl.forEach(operations => {
            if (operations.innerHTML === key) {
                operations.click()
            }
        })
    }

    const clickEqual = () => {
        equalEl.click()
    }
}

keyboard()
























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

