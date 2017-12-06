// Enemies our player must avoid
var success = 0 ;
var misses = 0 ; 
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  
    if (this.x < 606 ){
        this.x += 101*dt;

    }

    if (this.x >= 606) {
        this.x =-101*dt;
    }

    if( this.x < player.x + 40  && this.x + 40 > player.x &&  this.y < player.y + 30 && this.y + 30 > player.y) {
        misses += 1;
        document.getElementById('score-miss').innerHTML = misses;
        player.col = 2;
        player.row = 4;
        player.x = player.col * 101;
        player.y = player.row * 83;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
  this.sprite = 'images/char-boy.png';
  this.x = 202;
  this.y = 332;
};

// Update the player's position, required method for game
Player.prototype.update = function() {
  if(this.x > 400) {
    this.x = 400;
  }

  if(this.y > 450) {
    this.y = 450;
  }


  // Reset the player's position... has reached the water
  if(this.y < 10) {
        success += 1;
        document.getElementById('score-success').innerHTML = success;
        this.col = 2;
        this.row = 4;
        this.x = this.col * 101;
        this.y = this.row * 83;
  }

  
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle user input for controlling the player
Player.prototype.handleInput = function(keyPress) {
  switch(keyPress) {
    case 'left':
      this.x-=35;
      break;
    case 'right':
      this.x+=35;
      break;
    case 'up':
      this.y-=35;
      break;
    case 'down':
      this.y+=35;
      break;
  }
};


var Score = function() {
  this.success = 0;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var Enemy1 = new Enemy(-250,190);
var Enemy2 = new Enemy(-400,100);
var Enemy3 = new Enemy(-90,30);
var Enemy4 = new Enemy(-170,210);
var Enemy5 = new Enemy(-20,150);
var allEnemies = [Enemy1,Enemy2,Enemy3,Enemy4,Enemy5];
var player = new Player();
var score = new Score();

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

