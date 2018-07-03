const expect = require('expect');

const utils = require('./utils');

// Check for adding numbers
it('should add two numbers', () => {
    let res = utils.add(13, 31);
    expect(res).toBe(44).toBeA('number');
});

// Check for square numbers
it('should square a number', () => {
    let res = utils.square(10);
    expect(res).toBe(100).toBeA('number');
});

// Check for square numbers
it('should async square a number', (done) => {
    utils.asyncSquare(10, (square) => {
        expect(square).toBe(100).toBeA('number');
        done();
    });
});

// Should verify first and last names are set
// Assert that it includes firstName & lastName with proper values
it('should set firstName and lastName', () => {
    let user = {location: 'Boston', age: 27};
    var res = utils.setName(user, 'Timothy Wheeler');

   expect(res).toInclude({
        firstName: 'Timothy',
        lastName: 'Wheeler'

   })

    expect(user).toEqual(res);

});

// Async add numbers
it('should async add two numbers', (done) => {
   utils.asyncAdd(90, 1, (sum) => {
       expect(sum).toBe(91).toBeA('number');
       done();
   })
});




// it('should expect some values', () => {
//     // expect(12).toNotBe(12);
//     // expect({name: 'Timothy'}).toBe({name: 'Timothy'}); // toBe won't work when comparing objects
//     // expect({name: 'Timothy'}).toEqual({name: 'Timothy'}); // Works for objects
//     // expect([2, 3, 4]).toExclude(5); // Can also use toInclude
//     expect({
//         name: 'Timothy',
//         age: 27,
//         location: 'Boston'
//     }).toInclude({
//         age: 27
//     }).toExclude({
//         location: 'Philadelphia'
//     })
// });


