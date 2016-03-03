
var enemyPosY = [60, 143, 226];
var enemySpeed = [100, 130, 160, 200, 250, 300, 400];


var LEN_X = 101; 
var LEN_Y = 83;

var PLAYER_START_X_POS = 2 * LEN_X;
var PLAYER_START_Y_POS = 5 * LEN_Y;
var PLAYER_MIN_X_POS = 0;
var PLAYER_MIN_Y_POS = -40;
var PLAYER_MAX_X_POS = 4 * LEN_X; //404;
var PLAYER_MAX_Y_POS = 5 * LEN_Y; //415;
var playerPrevXPos;
var playerPrevYPos;

var ENEMY_MAX_X_POS = 5 * LEN_X; //505;

var playerImages = 'images/char-boy.png';


// Enemies our player must avoid

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    //setting enemy initial location
    this.y = enemyPosY[Math.floor(Math.random() * 3)];
    //setting enemy speed
    this.speed = enemySpeed[Math.floor(Math.random() * 7)];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > ENEMY_MAX_X_POS) {
        this.x = -(Math.floor((Math.random() * 5) + 1) * LEN_X);
        this.y = Math.floor((Math.random() * 3) + 1) * LEN_Y;
    } else {
        this.x = this.x + (this.speed * dt);
    }

    if (this.y == player.y && (this.x > player.x - 20 && this.x < player.x + 20)) {
        player.reset();
    gameLife.decrease();
}

  /*  if (this.x > -50 && this.x < 50) {
    this.Xpos = 0;
  } else if (this.x > 50 && this.x < 150) {
    this.Xpos = 101;
  } else if (this.x > 150 && this.x < 250) {
    this.Xpos = 202;
  } else if (this.x > 250 && this.x < 350) {
    this.Xpos = 303;
  } else if (this.x > 350 && this.x < 450) {
    this.Xpos = 404;
  } else if (this.x > 450 && this.x < 550) {
    this.Xpos = 505;
  } else if (this.x > 550 && this.x < 650) {
    this.Xpos = 606;
  } else if (this.x > 650 && this.x < 750) {
    this.Xpos = 707;
  } else if (this.x > 750 && this.x < 850) {
    this.Xpos = 808;
  } else if (this.x > 850) {
    this.Xpos = 1;
  }

  if (player.x === this.Xpos && player.y === this.y) {
    player.reset();
    gameLife.decrease();
  } 
*/
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    this.playerImg = playerImages;
    this.x = PLAYER_START_X_POS;
    this.y = PLAYER_START_Y_POS;
    this.scores = 0;
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.playerImg), this.x, this.y);
};

Player.prototype.update = function() {
    if (this.y <= 0) {
        this.scores += 20;
        console.log(this.scores);
        this.reset(this.scores);
        
    }
};


Player.prototype.handleInput = function(key) {
    switch(key) {
        case 'left': // x cannot be smaller than 0
            var leftPos = this.x - LEN_X;
            if (leftPos >= PLAYER_MIN_X_POS) {
                this.x = leftPos;
            };
            break;
        case 'up': // y cannot be smaller than -40
            var upPos = this.y - LEN_Y;
            if (upPos >= PLAYER_MIN_Y_POS) {
                this.y = upPos;
            };
            break;
        case 'right': // x cannot be bigger than 404
            var rightPos = this.x + LEN_X;
            if (rightPos <= PLAYER_MAX_X_POS) {
                this.x = rightPos;
            };
            break;
        case 'down': // y cannot be bigger than 415
            var downPos = this.y + LEN_Y;
            if (downPos <= PLAYER_MAX_Y_POS) {
                this.y = downPos;
            };
            break;
        default:
            console.log("wrong key for moving player");
    }
};

Player.prototype.reset = function(scores){
    this.x = PLAYER_START_X_POS;
    this.y = PLAYER_START_Y_POS;
    //this.scores = scores;
    var scoreEl = document.getElementById('scores');
    //scoreEl.innerHTML = this.scores;
};

/**
 * Life of the player.
 */
var Life = function() {
  this.lifeImg = 'images/Heart_s.png';
  this.life = 2;
  this.sprite = 'images/gameover.png';
  //this.gameover = 'images/gameover.png';
  console.log("life = "+this.life);
}
/**
 * Renders the life on the screen.
 */
Life.prototype.render = function() {

   console.log("render");
   if(this.life == 0){
    console.log("Game over");
    ctx.drawImage(Resources.get(this.sprite), 0, 0);
    }
};
/**
 * Decrease number of lives.
 */
Life.prototype.decrease = function() {
  if (this.life > 0) {
    this.life = this.life - 1;
    console.log(this.life);
  }
  if(this.life == 0){
    console.log("Game over-decrease");
    gameLife.render();
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemyA = new Enemy();
var enemyB = new Enemy();
var enemyC = new Enemy();
var enemyD = new Enemy();
var enemyE = new Enemy();
var allEnemies = [enemyA, enemyB, enemyC, enemyD, enemyE];

var player = new Player();
var gameLife = new Life();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
