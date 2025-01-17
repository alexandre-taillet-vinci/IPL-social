const { passwordChecker, moreThan8Characters, hasSpecialCharacters, hasNumber, containsNoIPL } = require('../passwordChecker.js');

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

// Test if the password has Number
describe('Number', () => {
    it('should return false', () => {
        expect(hasNumber('abcde')).toBe(false);
        expect(passwordChecker('abcdefg!')).toBe(false);
    });

    it('should return true', () => {
        expect(hasNumber('abc1')).toBe(true);
        expect(passwordChecker('abcdef1!')).toBe(true);
    });
});

// Test if the password has no IPL in no case sensitive
describe('IPL in no case sensitive', () => {
    it('should return false', () => {
        expect(containsNoIPL('TestIpL')).toBe(false);
        expect(passwordChecker('abcdef1!iPL')).toBe(false);
    });

    it('should return true', () => {
        expect(containsNoIPL('Test')).toBe(true);
        expect(passwordChecker('abcdef1!')).toBe(true);
    });
});