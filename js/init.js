document.addEventListener('keydown', function (e) {
  // 화면에서 키 누르면 발생할 동작
  //console.log(e);
  const heroLeft = getComputedStyle(heroElement).left;
  console.log('용사의 왼쪽 값', getComputedStyle(heroElement).left);
  const heroLeftWithoutPx = Number(heroLeft.split('px')[0]);

  //왼쪽 37, 오른쪽 39
  //heroElement.style.left = "30px";
  if (
    (e.keyCode === 37 && heroLeftWithoutPx <= 3) ||
    (e.keyCode === 39 && heroLeftWithoutPx >= 762)
  ) {
    heroElement.className = 'stop';
    return;
  } else if (e.keyCode === 37 && heroLeftWithoutPx > 0) {
    heroElement.style.left = heroLeftWithoutPx - 5 + 'px';
    heroElement.className = 'left';
  } else if (e.keyCode === 39 && heroLeftWithoutPx < 765) {
    //765px이 최대
    heroElement.style.left = heroLeftWithoutPx + 5 + 'px';
    heroElement.className = 'right';
  }
});

const timeCount = document.getElementById('timerNum');

function youWin() {
  bg.style.backgroundImage = 'url(null)';
  bg.style.backgroundColor = 'blue';
  bg.innerHTML = 'You Win';
  bg.style.color = 'white';
  bg.style.textAlign = 'center';
  bg.style.fontSize = '100px';
  bg.style.lineHeight = '300px';
}

function gameOver() {
  bg.style.backgroundImage = 'url(null)';
  bg.style.backgroundColor = 'black';
  bg.innerHTML = 'Game Over';
  bg.style.color = 'white';
  bg.style.textAlign = 'center';
  bg.style.fontSize = '100px';
  bg.style.lineHeight = '300px';
}

/*
function originalBg() {
  bg.style.backgroundImage = 'url(./images/bg.png)';
  bg.style.backgroundColor = '';
  bg.innerHTML = '';
}*/

function timeStart() {
  let time = 60;
  //originalBg();
  setInterval(() => {
    if (time >= 0 && score < 10 && hearts[0] !== undefined) {
      timeCount.innerHTML = `${time}sec`;
      time = time - 1;
    } else if (score >= 10) {
      youWin();
    } else if (hearts[0] === undefined) {
      gameOver();
    } else if (score < 10) {
      gameOver();
    }
    return;
  }, 1000);
}

const startBtn = document.getElementsByTagName('button')[0];

startBtn.addEventListener('click', timeStart);
//얘가 문제
startBtn.addEventListener('click', ghostCreation);
//startBtn.addEventListener('click', setInterval(heartBreak, 10));
//startBtn.addEventListener('click', setInterval(scoreUp, 3000));
