import {
  Initializ,
  findObstacles,
  RotateLeft,
  RotateRight,
  moveForward,
  moveBackword,
  moveRover,
  Rover,
  obstacles,
} from "./marsRover.js"; // Adjust path as necessary

describe("Rover Initialization", () => {
  test("should initialize rover with default values", () => {
    const rover = Initializ();
    expect(rover).toEqual({ x: 0, y: 0, direction: "N" });
  });

  test("should initialize rover with specified values", () => {
    const rover = Initializ(3, 9, "W");
    expect(rover).toEqual({ x: 3, y: 9, direction: "W" });
  });

  test("should return empty object for invalid inputs", () => {
    const rover = Initializ("a", 9, 123);
    expect(rover).toEqual({});
  });
});

describe("Obstacle Detection", () => {
  test("should return true if rover is at obstacle position", () => {
    const rover = Initializ(1, 4, "w"); // Initialize rover at obstacle position
    expect(findObstacles(rover)).toBe(true); // Pass rover to findObstacles
  });

  test("should return false if rover is not at obstacle position", () => {
    const rover = Initializ(0, 0, "N"); // Rover not at obstacle
    expect(findObstacles(rover)).toBe(false); // Should not detect obstacle
  });
});

describe("Rover Rotation", () => {
  test("should rotate left correctly", () => {
    Initializ(3, 9, "N");
    RotateLeft();
    expect(Rover.direction).toBe("W");

    RotateLeft();
    expect(Rover.direction).toBe("S");

    RotateLeft();
    expect(Rover.direction).toBe("E");

    RotateLeft();
    expect(Rover.direction).toBe("N");
  });
  console.log("🚀 ~ test ~ Rover:", Rover);
  console.log("🚀 ~ test ~ Rover:", Rover);

  test("should rotate right correctly", () => {
    Initializ(3, 9, "N");
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
    Initializ(3, 9, "N");
    moveForward();
    expect(Rover.y).toBe(10);

    Initializ(3, 9, "E");
    moveForward();
    expect(Rover.x).toBe(4);
  });

  test("should move backward correctly", () => {
    Initializ(3, 9, "N");
    moveBackword();
    expect(Rover.y).toBe(8);

    Initializ(3, 9, "W");
    moveBackword();
    expect(Rover.x).toBe(4);
  });

  test("should move rover based on commands", () => {
    const result = moveRover("FFRFFLBB");
    expect(result).toEqual({ x: 4, y: 11, direction: "W" }); // Adjust based on actual commands
  });

  test("should stop when obstacle is found", () => {
    Initializ(1, 4, "N");
    const result = moveRover("FFF");
    expect(findObstacles()).toBe(true); // Confirm obstacle detection
  });
});
