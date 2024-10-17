module.exports = {
  transform: {
    "^.+\\.m?js$": "babel-jest", // Transform .mjs and .js files with babel-jest
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Handle file extensions properly
  },
};
