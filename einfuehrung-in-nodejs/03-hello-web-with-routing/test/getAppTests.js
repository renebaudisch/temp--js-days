'use strict';

const assert = require('assertthat').default,
      supertest = require('supertest');

const getApp = require('../lib/getApp');

suite('getApp', () => {
  test('getApp is a function.', async () => {
    assert.that(getApp).is.ofType('function');
  });

  suite('app', () => {
    suite('GET /', () => {
      test('returns a 200.', async () => {
        const app = getApp();

        const result = await supertest(app).get('/');

        assert.that(result.statusCode).is.equalTo(200);
      });

      test('returns a reasonable HTML string.', async () => {
        const app = getApp();

        const result = await supertest(app).get('/');

        assert.that(result.text).is.equalTo('Hallo Welt!<br />GET /');
      });
    });
  });
});
