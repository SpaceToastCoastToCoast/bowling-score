module.exports = function(frames) {
  var score = 0;

  for(var frame in frames) {
    var frameTotal = 0;
    for(var f in frames[frame]) {
      frameTotal += frames[frame][f];
    }
    score += frameTotal;
  }

  return score;
};