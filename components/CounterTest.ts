import { Counter } from "./Counter";

test("incrementing 1 should be 1", () => {
  Counter.increment();
  expect(Counter.getCount()).toBe(1);
});
