"use strict";

var Ship = function(length){
  this.compartments = [];

  for(var i = 0; i < length; i += 1){
    this.compartments[i] = new ShipCompartment;
  }
};

var shipPrototype = {
  status : function(){
    var hits = []
    
    var shipLength = this.length

    for(var i = 0; i < shipLength; i += 1){
      if(this.compartments[i].status == "hit"){
        hits.push(this.compartments[i]);
      }
    }

    if(hits.length === shipLength){
      return "sunk"
    } else if(hits.length !== 0){
      return "damaged"
    } else if(hits.length === 0) {
      return "ok"
    }
  },

  length : function(){
    return this.compartments.length
  },

  coordinates : function(){
    var coords = [];
    
    var shipLength = this.length();

    for(var i= 0; i < shipLength; i += 1){
      coords.push({
        x: this.compartments[i].coordX,
        y: this.compartments[i].coordY
      });
    }
    return coords;
  }

};

Ship.prototype = shipPrototype;

