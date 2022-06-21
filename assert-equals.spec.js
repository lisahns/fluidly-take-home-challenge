const { TestScheduler } = require('jest')
const assertEquals = require('./assert-equals')

// describe('assertEquals', () => {
//   describe('when expected and actual are the same string', () => {
//     it('returns without throwing an error', () => {
//       expect(() => assertEquals('abc', 'abc')).not.toThrow()
//     })
//   })

//   describe('when expected and actual are different strings', () => {
//     it.todo('throws an error')
//   })
// })

test("compares two same strings", () => {
  const test = assertEquals("abc", "abc");
  expect(test)
})
test("compares to values that are not the same", () => {
  const test = assertEquals("abdef", "abc");
  expect(test)
})
test("compare type of", () => {
  const test = assertEquals("abc", 1);
  expect(test)
})
test("compares two same numbers", () => {
  const test = assertEquals(1, 1);
  expect(test)
})
test("compares array to different primitive", () => {
  const test = assertEquals(['a', 'b', 'c'], "abc");
  expect(test)
})
test("compares array length", () => {
  const test = assertEquals(['a', 'b', 'c'], ['a', 'b', 'c', 'd']);
  expect(test)
})
test("compares arrays", () => {
  const test = assertEquals(['a', 'b', 'c'], ['a', 'b', 'c']);
  expect(test)
})
test("compares arrays with partial different values", () => {
  const test = assertEquals(['a', 'b', 'c'], ['a', 'b', 'd']);
  expect(test)
})
test("boolean and number", () => {
  const test = assertEquals(true, 2);
  expect(test)
})
test("true and false", () => {
  const test = assertEquals(true, false);
  expect(test)
})