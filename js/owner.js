function Owner(name, bikes){
  // attributes go here...
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, type, color){
  var bike = new Bike(name, type, color);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bikename, miles){
  this.bikes.forEach(function(b) {
    if (bikename == b.name) {
      b.takeForARide(miles)
    };
  });
};
