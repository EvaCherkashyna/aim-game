const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')


const colors = ['#79f58e', '#db9090', '#2bffc4', 'lightcoral', '#ffba80','#b7b2ff'];
let score = 0;
let time = 0;
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up')
})
board.addEventListener('click', function (event) {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle()

    }

})
timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
    }
})

function startGame() {
    screens[1].classList.add('up')
    timeEl.innerHTML = `00:${time}`
    setInterval(decreaseTime, 1000)
    setTime(time);
    createRandomCircle();
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
    }
    else {
        let current = --time;

        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }


}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`
    
}

function createRandomCircle() {

    const circle = document.createElement('div');
    const { width, height } = board.getBoundingClientRect();
    const size = getRandomSize(20, 60)
    const x = getRandomSize(0, width - size)
    const y = getRandomSize(0, height - size) 
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    const color=getColor();
    circle.style.backgroundColor = color;
    console.log(circle.style.backgroundColor);
    circle.style.boxShadow=`0 0 10px   ${color}`
    board.append(circle);
}
function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function getColor() {
    const index = Math.floor(Math.random() * (colors.length));
    return colors[index];
   
}