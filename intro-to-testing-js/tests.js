// Unit tests for the helloWorld function

describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("World")).toBe("Hello, World!");
    });

    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
describe('sayHello', function() {
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
describe('sayHello', function() {
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })});
describe('sayHello', function() {
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    })});
describe('sayHello', function() {
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })});


describe('isFive', function() {
    it('should be a defined function', function () {
        expect(isFive("5")).toBe(true);
    })});


describe('isEven', function() {
    it('should be a defined function', function () {
        expect(isEven(2)).toBe(true);
        expect(isEven(-4)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven("banana")).toBe(false);
        expect(isEven("8")).toBe(true);
        expect(isEven(Infinity)).toBe(false);
        expect(isEven(true)).toBe(false);
        expect(isEven()).toBe(false);
    })});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(isVowel("a")).toBe(true);
        expect(isVowel("A")).toBe(true);
        expect(isVowel("y")).toBe(false);
        expect(isVowel(4)).toBe(false);
        expect(isVowel(true)).toBe(false);
        expect(isVowel("banana")).toBe(false);
        expect(isVowel()).toBe(false);
    })});

describe('add', function() {
    it('should be a defined function', function () {
        expect(add(2,3)).toBe(5);






    })});









})});






