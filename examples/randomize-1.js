// bounds
var topLeft = new Victor(50, 50);
var bottomRight = new Victor(200, 200);

Victor(10, 20)
  .randomize(topLeft, bottomRight)
  .toString();
// => x: 137, y: 160 (both cmponents randomized)