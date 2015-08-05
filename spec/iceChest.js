var IceChest = require('./src/iceChest.js');
var iceChest;

describe("IceChest", function () {
  beforeEach(function () {
    iceChest = new IceChest('red', 30);
  })

  it("iceChest color", function () {
    expect(iceChest.color).toEqual('red');
  })
  it("iceChest size", function () {
    expect(iceChest.sizeInGallons).toEqual(30);
  })
  it("iceChest add stuff", function () {
    iceChest.add('soda');
    expect(iceChest.contents).toEqual(['soda']);
    iceChest.add('beer');
    expect(iceChest.contents).toEqual(['soda', 'beer'])
  })
  it("iceChest add ice to make cold", function (lbs) {
    iceChest.addIce(2);
    expect(iceChest.temp).toEqual(50);
  })
})
