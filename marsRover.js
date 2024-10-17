export const obstacles = [
  [1, 4],
  [3, 5],
  [7, 4],
];

//       INITIALIZ

export const Initializ = (x = 0, y = 0, dir = "N") => {
  if (isNaN(x) || isNaN(y) || typeof dir !== "string") {
    return {};
  }
  return { x: x, y: y, direction: dir.toUpperCase() };
};

export const Rover = Initializ(3, 9);

//       FIND OBSTACLES

export const findObstacles = () => {
  for (let obstacle of obstacles) {
    const [x, y] = obstacle;

    if (Rover.x === x && Rover.y === y) {
      return true;
    }
  }
  return false;
};

//       ROTATE LEFT

export const RotateLeft = () => {
  if (Rover.direction === "N") {
    Rover.direction = "W";
  } else if (Rover.direction === "W") {
    Rover.direction = "S";
  } else if (Rover.direction === "S") {
    Rover.direction = "E";
  } else if (Rover.direction === "E") {
    Rover.direction = "N";
  } else {
    console.log("This is not a direcrion");
    return;
  }
};

//       ROTATE RIGHT

export const RotateRight = () => {
  if (Rover.direction === "N") {
    Rover.direction = "E";
  } else if (Rover.direction === "E") {
    Rover.direction = "S";
  } else if (Rover.direction === "S") {
    Rover.direction = "W";
  } else if (Rover.direction === "W") {
    Rover.direction = "N";
  } else {
    console.log("This is not a direcrion");
    return;
  }
};

//       MOVE  FORWARD

export const moveForward = () => {
  if (Rover.direction === "N") {
    Rover.y = Rover.y + 1;
  } else if (Rover.direction === "W") {
    Rover.x = Rover.x - 1;
  } else if (Rover.direction === "S") {
    Rover.y = Rover.y - 1;
  } else if (Rover.direction === "E") {
    Rover.x = Rover.x + 1;
  } else {
    console.log("This is not a direcrion");
    return;
  }
};

//       MOVE BACKWORD

export const moveBackword = () => {
  if (Rover.direction === "N") {
    Rover.y = Rover.y - 1;
  } else if (Rover.direction === "W") {
    Rover.x = Rover.x + 1;
  } else if (Rover.direction === "S") {
    Rover.x = Rover.x + 1;
  } else if (Rover.direction === "E") {
    Rover.x = Rover.x - 1;
  } else {
    console.log("This is not a direcrion");
    return;
  }
};

//       MOVE ROVER

export const moveRover = (commands) => {
  for (let command of [...commands]) {
    if (findObstacles()) {
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
    } else {
      console.log("This is not a valid command");
      return "\n";
    }
  }
  return Rover;
};

const newRover = moveRover("FFFFRLLBR");

console.log(newRover);
