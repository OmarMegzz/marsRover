const obstacles = [
  [1, 4],
  [3, 5],
  [7, 4],
  [1, 1],
];
function Initializ(Rover) {
  return (Rover = { x: 0, y: 0, direction: "N" });
}

const Rover = Initializ();

function findObstacles() {
  for (let obstacle of obstacles) {
    const [x, y, direction] = obstacle;

    if (Rover.x === x && Rover.y === y && Rover.direction === direction) {
      console.log(`Obstacle found at (${x}, ${y}). Rover STOPPED.`);
      return true;
    }
  }
  return false;
}

function moveRover(commands) {
  for (let command of [...commands]) {
    if (findObstacles()) {
      console.log("Rover cannot move further due to an obstacle.");
      return;
    }
    if (command === "L") {
      RotateLeft();
    } else if (command === "R") {
      RotateRight();
    } else if (command === "F") {
      moveForward();
    } else if (command === "B") {
      moveBackword();
    }
  }
}

function RotateLeft() {
  if (Rover.direction === "N") {
    Rover.direction = "W";
  } else if (Rover.direction === "W") {
    Rover.direction = "S";
  } else if (Rover.direction === "S") {
    Rover.direction = "E";
  } else if (Rover.direction === "E") {
    Rover.direction = "N";
  }
}

function RotateRight() {
  if (Rover.direction === "N") {
    Rover.direction = "E";
  } else if (Rover.direction === "E") {
    Rover.direction = "S";
  } else if (Rover.direction === "S") {
    Rover.direction = "W";
  } else if (Rover.direction === "W") {
    Rover.direction = "N";
  }
}

function moveForward() {
  if (Rover.direction === "N") {
    Rover.y = Rover.y + 1;
  }
  if (Rover.direction === "W") {
    Rover.x = Rover.x - 1;
  }
  if (Rover.direction === "S") {
    Rover.y = Rover.y - 1;
  }
  if (Rover.direction === "E") {
    Rover.x = Rover.x + 1;
  }
}

function moveBackword() {
  if (Rover.direction === "N") {
    Rover.y = Rover.y - 1;
  } else if (Rover.direction === "W") {
    Rover.x = Rover.x + 1;
  } else if (Rover.direction === "S") {
    Rover.x = Rover.x + 1;
  } else if (Rover.direction === "E") {
    Rover.x = Rover.x - 1;
  }
}

moveRover("FFFFLLBR");
console.log(
  `Rover position: (x: ${Rover.x} , y: ${Rover.y}), facing ${Rover.direction}`
);
