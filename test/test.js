
describe('dos-time()', function(){

  var assert = require('assert')
    , dos = require('dos-time');

  describe('with no arguments', function(){
    it('should return a timestamp of now', function(){
      assert(dos());
    })
  })

  describe('with date', function(){
    it('should convert it to dos timestamp', function(){
      assert(4096 == dos(new Date(1)))
    })
  })

})