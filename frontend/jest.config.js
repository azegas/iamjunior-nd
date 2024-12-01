export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // collectCoverage: true, // this makes Jest always calculate coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Specify which files to collect coverage from
    '!src/**/*.test.{js,jsx,ts,tsx}', // Exclude test files
  ],
};
