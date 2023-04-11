const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// check for truthy and falsy values
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches truthy expressions
// toBeFalsy matches falsy expressions

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ 
        firstName: 'Brad', 
        lastName: 'Traversy' 
    });
});