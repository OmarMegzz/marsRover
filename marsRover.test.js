import {
  Initializ,
  Rover,
  findObstacles,
  RotateLeft,
  RotateRight,
  moveForward,
  moveBackword,
  moveRover,
} from "./marsRover";

describe("Rover Initialization", () => {
  test("should initialize rover with default values", () => {
    const rover = Initializ();
    expect(rover).toEqual({ x: 0, y: 0, direction: "N" });
  });

  test("should initialize rover with specified values", () => {
    const rover = Initializ(3, 5, "E");
    expect(rover).toEqual({ x: 3, y: 5, direction: "E" });
  });

  test("should return an empty object for invalid inputs", () => {
    const rover = Initializ("invalid", 10, 123);
    expect(rover).toEqual({});
  });
});

describe("Obstacle Detection", () => {
  test("should return true if rover is at obstacle position", () => {
    Rover.x = 1;
    Rover.y = 4;
    expect(findObstacles()).toBe(true);
  });

  test("should return false if rover is not at obstacle position", () => {
    Rover.x = 0;
    Rover.y = 0;
    expect(findObstacles()).toBe(false);
  });
});

describe("Rover Rotation", () => {
  test("should rotate left correctly", () => {
    Rover.direction = "N";
    RotateLeft();
    expect(Rover.direction).toBe("W");

    RotateLeft();
    expect(Rover.direction).toBe("S");

    RotateLeft();
    expect(Rover.direction).toBe("E");

    RotateLeft();
    expect(Rover.direction).toBe("N");
  });

  test("should rotate right correctly", () => {
    Rover.direction = "N";
    RotateRight();
    expect(Rover.direction).toBe("E");

    RotateRight();
    expect(Rover.direction).toBe("S");

    RotateRight();
    expect(Rover.direction).toBe("W");

    RotateRight();
    expect(Rover.direction).toBe("N");
  });
});

describe("Rover Movement", () => {
  test("should move forward correctly", () => {
    Rover.x = 3;
    Rover.y = 9;
    Rover.direction = "N";
    moveForward();
    expect(Rover.y).toBe(10);

    Rover.direction = "E";
    moveForward();
    expect(Rover.x).toBe(4);
  });

  test("should move backward correctly", () => {
    Rover.x = 3;
    Rover.y = 9;
    Rover.direction = "N";
    moveBackword();
    expect(Rover.y).toBe(8);

    Rover.direction = "W";
    moveBackword();
    expect(Rover.x).toBe(4);
  });
});

describe("Rover Command Execution", () => {
  test("should move rover based on command sequence", () => {
    Rover.x = 0;
    Rover.y = 0;
    Rover.direction = "N";
    const result = moveRover("FFRFF");
    expect(result).toEqual({ x: 2, y: 2, direction: "E" });
  });
});
