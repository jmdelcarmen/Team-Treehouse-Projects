(function () {
var start = document.getElementById('start');
var board = document.getElementById('board');
var finish = document.getElementById('finish');
var startButton = document.getElementsByClassName('button')[0];
var newGameButton = document.getElementsByClassName('button')[1];

//Shows start page on page load
board.style.display = 'none';
finish.style.display = 'none';

//Alternates the moves
  //Sets random starting piece
var alternateCounter = 0;

//Shows board when startButton is clicked
  //Hides start page
startButton.onclick = function () {
  start.style.display = 'none';
  board.style.display = 'block';
//Sets active class to randomly selected starting piece
  if (alternateCounter % 2 === 0 || alternateCounter === 0) {
      player1.classList.add('active');
      player2.classList.remove('active');
  } else {
      player2.classList.add('active');
      player1.classList.remove('active');
  }
};

//Show start when newGameButton is clicked
  //Hides board and finish page
newGameButton.onclick = function () {
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].classList.contains('box-filled-1')) {
      boxes[i].classList.remove('box-filled-1');
      boxes[i].style.backgroundImage = 'none';

    } else if (boxes[i].classList.contains('box-filled-2')) {
      boxes[i].classList.remove('box-filled-2');
      boxes[i].style.backgroundImage = 'none';
    }
  };
  alternateCounter = 0;
  start.style.display = 'none';
  board.style.display = 'block';
  finish.style.display = 'none';
  }

//Cache players
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
//Cache boxes
var boxes = document.getElementsByClassName('boxes')[0].children;

//Binds hover and click handlers to each box
for (var i = 0; i < boxes.length; i++) {
  boxes[i].onmouseover = function () {
    if (alternateCounter % 2 === 0 && !(this.classList.contains('box-filled-1')) && !(this.classList.contains('box-filled-2'))) {
    this.style.backgroundImage = 'url(../TicTacToe-Game/img/o.svg)';
      }
    else if (alternateCounter !== 0 && !(this.classList.contains('box-filled-2')) && !(this.classList.contains('box-filled-1')) ) {
      this.style.backgroundImage = 'url(../TicTacToe-Game/img/x.svg)';
    }
  };
  boxes[i].onmouseout = function () {
    if (!(this.classList.contains('box-filled-1')) && !(this.classList.contains('box-filled-2')) ) {
      this.style.backgroundImage = 'none';
    }
  };
  boxes[i].onclick = function () {
    if (this.classList.contains('box-filled-1') || this.classList.contains('box-filled-2')) {
        alternateCounter += 0;
    } else if (alternateCounter % 2 === 0 || alternateCounter === 0) {
        this.classList.add('box-filled-1');
        player2.classList.add('active');
        player1.classList.remove('active');
        alternateCounter++;
    } else {
        this.classList.add('box-filled-2');
        player1.classList.add('active');
        player2.classList.remove('active');
        alternateCounter++;
    }

    winnerCheck();
  };
};

function winnerCheck() {
  var box1 = document.getElementsByClassName('box')[0];
  var box2 = document.getElementsByClassName('box')[1];
  var box3 = document.getElementsByClassName('box')[2];
  var box4 = document.getElementsByClassName('box')[3];
  var box5 = document.getElementsByClassName('box')[4];
  var box6 = document.getElementsByClassName('box')[5];
  var box7 = document.getElementsByClassName('box')[6];
  var box8 = document.getElementsByClassName('box')[7];
  var box9 = document.getElementsByClassName('box')[8];
  var message = document.getElementsByClassName('message')[0];
  message.innerHTML = 'Winner';

  if (box1.classList.contains('box-filled-1') && box4.classList.contains('box-filled-1') && box7.classList.contains('box-filled-1') || box2.classList.contains('box-filled-1') && box5.classList.contains('box-filled-1') && box8.classList.contains('box-filled-1') || box3.classList.contains('box-filled-1') && box6.classList.contains('box-filled-1') && box9.classList.contains('box-filled-1') || box1.classList.contains('box-filled-1') && box2.classList.contains('box-filled-1') && box3.classList.contains('box-filled-1') || box4.classList.contains('box-filled-1') && box5.classList.contains('box-filled-1') && box6.classList.contains('box-filled-1') || box7.classList.contains('box-filled-1') && box8.classList.contains('box-filled-1') && box9.classList.contains('box-filled-1') || box1.classList.contains('box-filled-1') && box5.classList.contains('box-filled-1') && box9.classList.contains('box-filled-1') || box3.classList.contains('box-filled-1') && box5.classList.contains('box-filled-1') && box7.classList.contains('box-filled-1')) {
    message.innerHTML = 'Winner';
    board.style.display = 'none';
    finish.style.display = 'block';
    finish.classList.remove('screen-win-two');
    finish.classList.add('screen-win-one');
  }
  else if (box1.classList.contains('box-filled-1') && box4.classList.contains('box-filled-2') && box7.classList.contains('box-filled-2') || box2.classList.contains('box-filled-2') && box5.classList.contains('box-filled-2') && box8.classList.contains('box-filled-2') || box3.classList.contains('box-filled-2') && box6.classList.contains('box-filled-2') && box9.classList.contains('box-filled-2') || box1.classList.contains('box-filled-2') && box2.classList.contains('box-filled-2') && box3.classList.contains('box-filled-2') || box4.classList.contains('box-filled-2') && box5.classList.contains('box-filled-2') && box6.classList.contains('box-filled-2') || box7.classList.contains('box-filled-2') && box8.classList.contains('box-filled-2') && box9.classList.contains('box-filled-2') || box1.classList.contains('box-filled-2') && box5.classList.contains('box-filled-2') && box9.classList.contains('box-filled-2') || box3.classList.contains('box-filled-2') && box5.classList.contains('box-filled-2') && box7.classList.contains('box-filled-2')) {
    message.innerHTML = 'Winner';
    board.style.display = 'none';
    finish.style.display = 'block';
    finish.classList.remove('screen-win-one');
    finish.classList.add('screen-win-two');
  }
  else if (alternateCounter === 9) {
    message.innerHTML = 'Draw';
    board.style.display = 'none';
    finish.style.display = 'block';
    finish.classList.remove('screen-win-one');
    finish.classList.remove('screen-win-two');
    finish.classList.add('screen-win-tie');
  }
};
}());
