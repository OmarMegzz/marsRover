                                                 MARS ROVER

This application simulates a rover navigating on Mars, allowing it to move forward, backward, rotate left or right, and avoid obstacles. The rover's initial position and direction can be set, and it responds to a sequence of commands to control its movements.

Features:
1-Obstacle Detection: The rover avoids obstacles and stops if one is encountered.
2-Movement: The rover can move forward and backward based on its current direction.
3-Rotation: The rover can rotate left or right to change its direction.
4-Command Execution: A sequence of commands can be issued to control the rover's movement.

How to Use
Initialize the Rover: The rover is initialized with an initial position (x, y) and a direction (N, E, S, W). The default position is (0, 0) facing North.

const Rover = Initializ(0, 0, "N");

Commands: The rover accepts a string of commands:

L: Rotate Left
R: Rotate Right
F: Move Forward
B: Move Backward

Example:

const commands = "FFLBR";

Move the Rover: Call the moveRover() function, passing the command string as an argument. The rover will execute the commands one by one, stopping if it encounters an obstacle.

const newRoverState = moveRover(commands);
console.log(newRoverState);

Check for Obstacles: The rover checks for obstacles during its movement. If it encounters an obstacle, the rover stops and returns its current position.
