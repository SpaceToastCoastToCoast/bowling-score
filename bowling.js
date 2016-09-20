module.exports = function(frames) {
  var score = 0;
  var spareBonus = false;

  for(var frame in frames) {
    var frameTotal = 0;
    for(var f in frames[frame]) {
      if(spareBonus) {
        frameTotal += frames[frame][0];
        spareBonus = false;
      }
      frameTotal += frames[frame][f];
    }
    if(frameTotal == 10) {
      spareBonus = true;
    }
    score += frameTotal;
  }

  return score;
};