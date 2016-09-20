const chai = require('chai');
const bowling = require('../bowling.js');
const expect = chai.expect;

describe('bowling score calculator', function() {
  it('should be a function that returns a number representing the total score', function() {
    expect(bowling).to.exist;
    expect(bowling).to.be.a('function');
    expect(bowling()).to.be.a('number');
  });

  it('should calculate the score over 10 frames of play', function() {
    var args = [[1,2], [1,2], [1,2], [1,2], [1,2],
      [1,2], [1,2], [1,2], [1,2], [1,2]];
    expect(bowling(args)).to.equal(30);
  });

  it('should award bonus points for a spare equal to the first ball of the next frame', function() {
    var args = [[3,7], [3,2], [0,0], [0,0], [0,0],
     [0,0], [0,0], [0,0], [0,0], [0,0]];
    expect(bowling(args)).to.equal(18);
  });

  it('should award bonus points for a strike equal to both balls of the next frame', function() {
    var args = [[10], [2,3], [0,0], [0,0], [0,0],
      [0,0], [0,0], [0,0], [0,0], [0,0]];
    expect(bowling(args)).to.equal(20);
  });

  it('should properly award points for a combination of spares and strikes', function() {
    var args = [[10], [3,7], [2,1], [0,0], [0,0],
      [0,0], [0,0], [0,0], [0,0], [0,0]];
    expect(bowling(args)).to.equal(35);
    args = [[10], [3,7], [10], [0,0], [0,0],
      [0,0], [0,0], [0,0], [0,0], [0,0]];
    expect(bowling(args)).to.equal(50);
  });

  it('should award bonus balls if the last frame is a spare or strike', function() {
    var args = [[10], [3,7], [10], [0,0], [0,0],
      [0,0], [0,0], [0,0], [0,0], [3, 7, 2]];
    expect(bowling(args)).to.equal(64);
    args = [[10], [3,7], [10], [0,0], [0,0],
      [0,0], [0,0], [0,0], [0,0], [10, 5, 2]];
    expect(bowling(args)).to.equal(74);
  });

  it('should score a perfect game (12 strikes) as 300', function() {
    var args = [[10], [10], [10], [10], [10],
      [10], [10], [10], [10], [10, 10, 10]];
      expect(bowling(args)).to.equal(300);
  });
});