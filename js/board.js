"use strict";

var Board = function(height, width){
  this.height = height || 10;
  this.width  = width  || 10;

  this.grid = [];

  var x, y;
  for(y = 1; y <= this.height; y += 1){
    this.grid[y] = [];
    for(x = 1; x <= this.width; x+= 1){
      this.grid[y][x] = new BoardSpace()
    }
  }
};

var boardPrototype = {
  getSize : function(){
    console.log(this.height * this.width)
  }
};

Board.prototype = boardPrototype;



