import assert from 'assertthat';
import getApp from '../src/getApp';
import supertest from 'supertest';

suite('getApp', (): void => {
  test('is a function.', async (): Promise<void> => {
    assert.that(getApp).is.ofType('function');
  });

  suite('app', (): void => {
    suite('GET /', (): void => {
      test('returns a status code 200.', async (): Promise<void> => {
        const app = getApp();

        const response = await supertest(app).get('/');

        assert.that(response.status).is.equalTo(200);
      });

      test('returns some reasonable content.', async (): Promise<void> => {
        const app = getApp();

        const response = await supertest(app).get('/');

        assert.that(response.text).is.equalTo('Hallo TypeScript!');
      });
    });
  });
});
