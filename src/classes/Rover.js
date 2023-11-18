export default class Rover {
    constructor(x, y, heading, plateau) {
        this.x = x;
        this.y = y;
        this.heading = heading;
        this.plateau = plateau;
    }

    processInstruction(instruction) {
        switch (instruction) {
            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'M':
                this.move();
                break;
            default:
                throw new Error(`Invalid instruction: ${instruction}`);
        }
    }

    turnLeft() {
        const headings = ['N', 'W', 'S', 'E'];
        const index = headings.indexOf(this.heading);
        this.heading = headings[(index + 1) % 4];
    }

    turnRight() {
        const headings = ['N', 'E', 'S', 'W'];
        const index = headings.indexOf(this.heading);
        this.heading = headings[(index + 1) % 4];
    }

    move() {

        switch (this.heading) {
            case 'N':
                this.y = (this.y + 1) % this.plateau.height;
                break;
            case 'E':
                this.x = (this.x + 1) % this.plateau.width;
                break;
            case 'S':
                this.y = (this.y > 0) ? this.y - 1 : this.plateau.height - 1;
                break;
            case 'W':
                this.x = (this.x > 0) ? this.x - 1 : this.plateau.width - 1;
                break;
        }
    }

    executeInstructions(instructions) {
        instructions.split('').forEach(instruction => {
            this.processInstruction(instruction);
        });
        return this.getPosition();
    }

    getPosition() {
        return `${this.x} ${this.y} ${this.heading}`;
    }
}