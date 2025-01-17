const { passwordChecker, moreThan8Characters } = require('../passwordChecker.js');

// Test if the password is valid

// Test if the password is less than 8 characters
describe('Less than 8 characters', () => {
    it('should return false', () => {
        expect(moreThan8Characters('1234567')).toBe(false);
        expect(passwordChecker('123456!')).toBe(false);
    });

    it('should return true', () => {
        expect(moreThan8Characters('12345678')).toBe(true);
        expect(passwordChecker('1234567!')).toBe(true);
    });
});

// Test if the password has special characters
describe('Special characters', () => {
    it('should return false', () => {
        expect(hasSpecialCharacters('abcde')).toBe(false);
        expect(passwordChecker('12345678')).toBe(false);
    });

    it('should return true', () => {
        expect(hasSpecialCharacters('abc!')).toBe(true);
        expect(passwordChecker('1234567!')).toBe(true);
    });
});


