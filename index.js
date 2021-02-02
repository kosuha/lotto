const result = document.querySelector('#result');
const bonus = document.querySelector('#bonus');

const candidate = Array(45).fill().map((x, i) => i + 1);
const shuffle = [];

while (candidate.length > 0) {
    const randomBall = Math.floor(Math.random() * candidate.length);
    shuffle.push(candidate.splice(randomBall, 1)[0]);
}

let winBalls = shuffle.slice(0, 6).sort((a, b) => a - b); // 함수의 리턴값이 0보다 크면 자리를 바꿈
let bonusBall = shuffle[6];

winBalls.forEach((ball, index) => {
    setTimeout(() => {
        const resultChild = document.createElement('div');
        resultChild.className = 'ball';
        resultChild.style.backgroundColor = setColor(ball);
        resultChild.textContent = ball;
        result.appendChild(resultChild);
    }, 1000 * (index + 1));
});

setTimeout(() => {
    const bonusChild = document.createElement('div');
    bonusChild.className = 'ball';
    bonusChild.style.backgroundColor = setColor(bonusBall);
    bonusChild.textContent = bonusBall;
    bonus.appendChild(bonusChild);
}, 1000 * (winBalls.length + 1));

function setColor(ball) {
    let ballColor = '';

    if (ball <= 10) {
        ballColor = 'red';
    } else if (ball <= 20) {
        ballColor = 'orange';
    } else if (ball <= 30) {
        ballColor = 'yellow';
    } else if (ball <= 40) {
        ballColor = 'green';
    } else {
        ballColor = 'skyblue';
    }

    return ballColor;
}