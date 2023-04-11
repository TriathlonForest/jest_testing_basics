const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//check for truthy and falsy values
//toBeNull matches only null
//toBeUndefined matches only Undefined

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});