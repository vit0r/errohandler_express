var assert = require('assert');
var request = require('supertest-as-promised')('localhost:3000')
describe('app is started?', function() {
  describe('get /', function() {
    it('should success', function() {
        return request.get('/').expect(200);
    });
  });
});