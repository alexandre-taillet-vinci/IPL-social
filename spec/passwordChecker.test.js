import passwordChecker from '../passwordChecker.js';
describe('Less than 8 characters', () => {
    it('should return false', () => {
        expect(passwordChecker('1234567')).toBe(false);
    });

    it('should return true', () => {
        expect(passwordChecker('12345678')).toBe(true);
    });
});