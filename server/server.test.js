const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });
    });
    describe('GET /users', () => {
        // status code is 200, inside array your user object exists
        it('should return user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Timothy',
                        age: 27
                    });
                })
                .end(done);
        });
    });
});


