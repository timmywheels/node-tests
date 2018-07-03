const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

   it('should call the spy correctly', () => {
     var spy = expect.createSpy();
     spy('Timothy', 27);
     expect(spy).toHaveBeenCalledWith('Timothy', 27);
   });

   it('should call savedUser with user object', () => {
      var email = 'tim@timwheeler.com'
      var password = '123abc';

      app.handleSignup(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({email, password})
   });

});