module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': './src/Redux/reducer/reducer.test.ts', // Modify this to match your project's source directory
  },
};
