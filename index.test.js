const { capitalize, allCaps, capitalizeWords, removeExtraSpaces, kebob, snake, camelCase } = require('./index');

test('capitalize function', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('allCaps function', () => {
    expect(allCaps('hello')).toBe('HELLO');
});

test('capitalizeWords function', () => {
    expect(capitalizeWords('hello world')).toBe('Hello World');
});

test('removeExtraSpaces function', () => {
    expect(removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!');
});

test('kebob function', () => {
    expect(kebob('Hello world')).toBe('hello-world');
});

test('snake function', () => {
    expect(snake('Hello world')).toBe('hello_world');
});

test('camelCase function', () => {
    expect(camelCase('Hello world')).toBe('helloWorld');
});
