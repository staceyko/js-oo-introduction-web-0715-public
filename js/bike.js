
function Bike(name, type, color, condition){
  this.name = name;
  this.bikeType = type;
  this.frameColor = color;
  this.condition = 'ready to go!'
  this.WHEELS = 2
};

Bike.prototype.takeForARide = function(miles){
  if (miles > 50) {
    this.condition = 'needs a tune up';
  };
};

Bike.prototype.tuneUp = function(miles){
  this.condition = 'ready to go!';

};
