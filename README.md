Mars Rover Simulation
Overview
The Mars Rover Simulation is a project that simulates the movement of robotic rovers on the surface of Mars. It allows NASA to explore the terrain of Mars by sending instructions to the rovers and observing their final positions.

Components
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
