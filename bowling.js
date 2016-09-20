module.exports = function(frames) {
  var score = 0;
  var spareBonus = false;
  var strikeBonus = false;

  for(var frame in frames) {
    var frameTotal = 0;
    for(var f in frames[frame]) {
      if(spareBonus) {
        frameTotal += frames[frame][f];
        spareBonus = false;
      } else if (strikeBonus) {
        frameTotal += frames[frame][f];
      }
       frameTotal += frames[frame][f];
    }
    strikeBonus = false;
    if(frameTotal >= 10) {
      if(frames[frame].length === 1) {
        strikeBonus = true;
      } else {
        spareBonus = true;
      }
    }
    console.log('frame total,', frameTotal);
    score += frameTotal;
  }

  return score;
};