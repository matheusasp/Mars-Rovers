import Rover from '../src/classes/Rover.js';

describe('Rover Class', () => {
    const plateau = { width: 5, height: 5 };

    test('Rover turns left correctly', () => {
        const rover = new Rover(1, 1, 'N', plateau);
        rover.turnLeft();
        expect(rover.heading).toBe('W');
    });

    test('Rover turns right correctly', () => {
        const rover = new Rover(1, 1, 'N', plateau);
        rover.turnRight();
        expect(rover.heading).toBe('E');
    });

    test('Rover moves north correctly', () => {
        const rover = new Rover(1, 1, 'N', plateau);
        rover.move();
        expect(rover.y).toBe(2);
        expect(rover.x).toBe(1);
    });

    test('Rover moves east correctly', () => {
        const rover = new Rover(1, 1, 'E', plateau);
        rover.move();
        expect(rover.x).toBe(2);
        expect(rover.y).toBe(1);
    });

    test('Rover moves south correctly', () => {
        const rover = new Rover(1, 1, 'S', plateau);
        rover.move();
        expect(rover.y).toBe(0);
        expect(rover.x).toBe(1);
    });

    test('Rover moves west correctly', () => {
        const rover = new Rover(1, 1, 'W', plateau);
        rover.move();
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(1);
    });

    test('Rover executes a sequence of instructions correctly', () => {
        const rover = new Rover(1, 2, 'N', plateau);
        const instructions = 'LMLMLMLMM';
        rover.executeInstructions(instructions);
        expect(rover.getPosition()).toBe('1 3 N');
    });

    test('Rover does not move outside the plateau boundaries', () => {
        const rover = new Rover(0, 0, 'S', plateau);
        rover.move();
        expect(rover.y).not.toBeLessThan(0);
        expect(rover.x).not.toBeLessThan(0);
        expect(rover.y).not.toBeGreaterThan(plateau.height - 1);
        expect(rover.x).not.toBeGreaterThan(plateau.width - 1);
    });


});