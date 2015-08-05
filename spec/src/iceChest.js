function IceChest(color, sizeInGallons) {
  this.color = color;
  this.sizeInGallons = sizeInGallons;
  this.contents = [];
  this.temp = 60;
  this.alpha = [];
}

IceChest.prototype.add = function(string) {
  this.contents.push(string);
}

IceChest.prototype.addIce = function(lbs) {
  this.temp -= (lbs*5);
}

module.exports = IceChest;
