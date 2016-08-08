'use strict';

var chai = require('chai');
var expect = chai.expect;
var superagent = require('superagent');
var server = require('../server');

describe('app', () => {

  before(() => {
    server.listen(8000);
  });

  after(() => {
    server.close();
  });

  describe('localhost:8000', () => {
    it('should make a successful GET request', (done) => {
      superagent
        .get('http://localhost:8000')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.equal('We are live, Dammy!');
          done();
      });
    });
  });

});
