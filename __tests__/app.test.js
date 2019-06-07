const request = require('supertest');

const NameHelper = require('../src/name-helper');
jest.mock('../src/name-helper');
let app = require('../src/app');

const originalNames = ['apple', 'banana', 'orange', 'pear'];

describe('app', () => {
  beforeEach(() => {
    NameHelper.names = Array.from(originalNames);
    NameHelper.getRandomName.mockReturnValue(Array.from(originalNames));
  });

  describe('/name', () => {
    it('GET should return the first randomisedName', async () => {
      const response = await request(app).get('/name');

      expect(response.statusCode).toEqual(200);
      expect(response.text).toEqual('1. apple');
    });

    it('GET should regenerate the list when exhausted', async () => {
      expect((await request(app).get('/name')).text).toEqual('2. banana');
      expect((await request(app).get('/name')).text).toEqual('3. orange');
      expect((await request(app).get('/name')).text).toEqual('4. pear');
      expect((await request(app).get('/name')).text).toEqual('1. apple');
    });
  });

  // enable the test
  xdescribe('/pairs', () => {
    it('GET should return a array of pairs', async () => {
      const response = await request(app).get('/pairs');

      const pairs = response.body;

      expect(response.statusCode).toEqual(200);
      expect(pairs).toHaveLength(2);
      expect(pairs).toEqual([
        { first: 'apple', second: 'banana' },
        { first: 'orange', second: 'pear' },
      ]);
    });
  });

  describe('/names', () => {
    it('GET should return the list of names ', async () => {
      // TODO: implement the test
    });

    describe('POST', () => {
      it('should return 422 if name already exist', async () => {
        const response = await request(app)
          .post('/names')
          .set('Content-Type', 'application/json')
          .send({ name: 'apple' });

        expect(response.statusCode).toEqual(422);
      });

      it('should return 400 if name is not passed in', async () => {
        const response = await request(app)
          .post('/names')
          .set('Content-Type', 'application/json')
          .send({});

        expect(response.statusCode).toEqual(400);
      });

      it('should return array with new name if valid name is pass', async () => {
        const response = await request(app)
          .post('/names')
          .set('Content-Type', 'application/json')
          .send({ name: 'Guava' });

        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual(
          Array.from(originalNames).concat('Guava')
        );
      });
    });

    describe('Delete', () => {
      // TODO: implment the test
    });

    describe('PUT', () => {
      // TODO: implement the test
    });
  });
});
