//실험
let score = 0;
const scoreDOM = document.getElementById('scoreNum');
let hearts = document.getElementsByClassName('Heart');
//

function createGhost() {
  const ghostElement = document.createElement('div');
  ghostElement.style.position = 'absolute';
  ghostElement.style.top = '0px';
  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH);
  ghostElement.style.left = `${randomLeft}px`;
  ghostElement.style.width = GHOST_WIDTH + 'px';
  ghostElement.style.height = GHOST_HEIGHT + 'px';
  ghostElement.style.background = 'url("./images/ghost.png") no-repeat';
  ghostElement.className = 'ghost';

  bg.appendChild(ghostElement);

  //const ghostTop = numMaker(ghostElement.style.top);
  //const ghostLeft = numMaker(ghostElement.style.left);
  setInterval(function () {
    if (numMaker(ghostElement.style.top) > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    } else if (
      numMaker(ghostElement.style.top) >=
        BG_HEIGHT - GHOST_HEIGHT - HERO_HEIGHT &&
      Math.abs(
        numMaker(ghostElement.style.left) - numMaker(heroElement.style.left)
      ) < HERO_WIDTH
    ) {
      //console.log(numMaker(heroElement.style.top));
      //console.log(ghostTop);
      ghostElement.style.backgroundPosition = '-45px 0px';
      setTimeout(function () {
        ghostElement.remove();
      }, 3000);
      return;
    } else if (
      ghostElement.style.backgroundPosition !== '-45px 0px' &&
      numMaker(ghostElement.style.top) <= BG_HEIGHT - GHOST_HEIGHT
    ) {
      ghostElement.style.top = numMaker(ghostElement.style.top) + 1 + 'px';
    }
  }, 10);
  // 실험
  /*if (ghostElement.style.backgroundPosition === '-45px 0px') {
    score += 1;
    scoreDOM.innerHTML = `${score}/10`;
  }*/

  /*if (
    numMaker(ghostElement.style.top) === BG_HEIGHT - GHOST_HEIGHT &&
    hearts !== undefined
  ) {
    hearts.remove();
  }*/
}

function heartBreak() {
  let ghostElement = document.getElementsByClassName('ghost')[0];
  if (
    ghostElement &&
    numMaker(ghostElement.style.top) === BG_HEIGHT - GHOST_HEIGHT &&
    hearts[0] !== undefined
  ) {
    hearts[0].remove();
  }
  return;
}

function scoreUp() {
  let ghostElement = document.getElementsByClassName('ghost')[0];
  const scoreDOM = document.getElementById('scoreNum');
  if (ghostElement && ghostElement.style.backgroundPosition === '-45px 0px') {
    score += 1;
    scoreDOM.innerHTML = `${score}/10`;
  }
}

//createGhost();
function ghostCreation() {
  setInterval(createGhost, 3000);
}

setInterval(heartBreak, 10);
setInterval(scoreUp, 3000);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
