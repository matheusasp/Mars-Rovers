- Mars Rover Simulation

- Overview

The Mars Rover Simulation is a project that simulates the movement of robotic rovers on the surface of Mars. It allows NASA to explore the terrain of Mars by sending instructions to the rovers and observing their final positions.

- Components
The simulation consists of the following components:

1. Plateau
The plateau represents the grid-like surface of Mars where the rovers move.
It is defined by its width and height, and the default size is 5x5.
2. Rover
The rover is a robotic vehicle deployed on the plateau.
Each rover is characterized by its initial position (x, y, heading) and its orientation (North, South, East, West).
The possible instructions for the rover are 'L' (turn left), 'R' (turn right), and 'M' (move forward).
The rover can move within the plateau, change direction, and report its final position.
Required Libraries and Dependencies
To run the Mars Rover Simulation, you'll need the following libraries and dependencies:

Node.js: The JavaScript runtime environment that allows you to execute the simulation code.
Jest: A JavaScript testing framework used to run unit tests for the simulation code.
ES6 Modules: The simulation code is written using ES6 modules, so ensure that your Node.js environment supports ES6 module syntax.
You can install Jest and other dependencies using npm (Node Package Manager). Here are the commands to install them:

npm init -y

npm install --save-dev jest

npm install esm

- Run:
http-server on the terminal of the root folder of the project  


- Simulation Workflow

The simulation follows these steps:

Initialize the plateau with a default size of 5x5.
Deploy one or more rovers on the plateau, specifying their initial positions.
Provide a sequence of instructions for each rover to navigate the plateau.
The rovers execute the instructions one by one.
After completing the instructions, the rovers report their final positions.


- Rover Movements

To turn left ('L'), the rover rotates 90 degrees counterclockwise.
To turn right ('R'), the rover rotates 90 degrees clockwise.
To move forward ('M'), the rover advances one grid point in the direction it's facing.


- Here's an example of how the simulation works:

Input
Plateau Size: 5x5
Rover 1: Landing Position (1, 2, N), Instructions: LMLMLMLMM
Rover 2: Landing Position (3, 3, E), Instructions: MRRMMRMRRM
Output
Rover 1 Final Position: (1, 3, N)
Rover 2 Final Position: (2, 3, S)

- Testing
 The code includes tests written using Jest to ensure that the rover and plateau classes function correctly. The tests cover various scenarios, including rover movements and plateau constraints.

- Conclusion
The Mars Rover Simulation provides a versatile platform for exploring the Martian surface using robotic rovers. It allows for easy customization of plateau sizes and rover deployments and offers a clear understanding of rover movements through simple instructions.
