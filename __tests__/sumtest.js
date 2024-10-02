// Define the sum function
function sum(a, b) {
  return a + b;
}

// verifcar se é 4

// teste com vários valores
describe('sum function', () => {
  test('adds 2 + 2 to equal 4', () => {
      expect(sum(2, 2)).toBe(4);     
  });

  test('adds 1 + 3 to equal 4', () => {
      expect(sum(1, 3)).toBe(4);
  });

  test('adds 0 + 4 to equal 4', () => {
      expect(sum(0, 4)).toBe(4);
  });

  test('adds -1 + 5 to equal 4', () => {
      expect(sum(-1, 5)).toBe(4);
  });
});
