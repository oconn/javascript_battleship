"use strict";

var Player = function(args){
  this.name = args.name
  this.board = new Board
  this.fleet = new Fleet
};

var playerPrototype = {
  placeShips : function(){
    
  }
};

Player.prototype = playerPrototype;

