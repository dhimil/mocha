//var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      var passed = [1,2,3].indexOf(5) == -1 && -1 == [1,2,3].indexOf(0);
      if ( !passed ) {
        throw new Error('Assertion failed');
      }
    });
    it('should return index when the value is present', function() {
      var passed = [1, 2].indexOf(2) == 1;
      if ( !passed ) {
        throw new Error('Assertion failed');
      }
    });
  })
})
