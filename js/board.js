"use strict";

var Board = function(height, width){
  this.height = height || 10;
  this.width  = width  || 10;

  this.grid = [];
  
  var toLetter = function(num){
    return String.fromCharCode(num + 64)
  }

  var x, y;
  for(y = 0; y < this.height; y += 1){
    this.grid[y] = [];
    for(x = 0; x < this.width; x+= 1){
      this.grid[y][x] = new BoardSpace(x, y)
    }
  }
};

var boardPrototype = {
  
};

Board.prototype = boardPrototype;



