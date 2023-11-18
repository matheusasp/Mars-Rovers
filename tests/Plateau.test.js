import Plateau from '../src/classes/Plateau.js';

describe('Plateau', () => {
    test('should create plateau with specified width and height', () => {
        const width = 5;
        const height = 5;
        const plateau = new Plateau(width, height);
        expect(plateau.width).toBe(width);
        expect(plateau.height).toBe(height);
    });
});