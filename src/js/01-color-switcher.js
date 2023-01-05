const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', () => {
    changeColor();
    intervalId = setInterval(changeColor, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);

    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function changeColor() {
    const bgColor = getRandomHexColor();

    // ---------------------- need this condition because getRandomHexColor sometimes returns wrong value
    document.body.style.backgroundColor = bgColor.length < 7 ? '#fd5bcc' : bgColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
