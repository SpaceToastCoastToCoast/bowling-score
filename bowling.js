module.exports = function(frames) {
  var score = 0;
  var spareBonus = false;
  var strikeBonus = false;

  if(frames === undefined) {
    return score;
  }

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
    var nextFrame = parseInt(frame) + 1;
    if(frames[frame].length === 1 && frames[nextFrame] !== undefined) {
      if(frames[nextFrame].length === 1 && nextFrame % 2 !== 0) {
        frameTotal += 10;
      }
    }
    strikeBonus = false;
    if(frameTotal >= 10) {
      if(frames[frame].length === 1) {
        strikeBonus = true;
      } else {
        spareBonus = true;
      }
    }
    score += frameTotal;
  }
  if(frames[9].length === 3) {
    //if bonus balls were awarded
    if(frames[9][0] === 10) {
      score += frames[9][1];
      if(frames[9][1] === 10) {
        score += frames[9][2];
      }
      score += frames[9][2];
    } else {
      score += frames[9][2];
    }
  }

  return score;
};