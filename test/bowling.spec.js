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
});