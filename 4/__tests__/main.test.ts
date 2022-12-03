import { helloWorld } from '../src/main.js';

describe('Hello world', () => {
  it('should return Hello World', () => {
    expect(helloWorld()).toBe("Hello World!");
  });
});