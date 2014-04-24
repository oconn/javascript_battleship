"use strict";

var Fleet = function(){
  this.aircraftCarrier = new Ship(5);
  this.battleShip      = new Ship(4);
  this.submarine       = new Ship(3);
  this.crusier         = new Ship(3);
  this.destroyer       = new Ship(2);
};

var fleetPrototype = {

};

Fleet.prototype = fleetPrototype;

