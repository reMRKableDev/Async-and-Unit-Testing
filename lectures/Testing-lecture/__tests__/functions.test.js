const functions = require("../functions");

test("add", () => {
  expect(functions.add(2, 2)).toBe(4);
  expect(functions.add(2, 2)).toBeTruthy();
  expect(functions.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(functions.add(5, 10)).toBeLessThanOrEqual(15);
});

test("nameOfUser", () => {
  expect(functions.nameOfUser).toMatch("Wildo Coda");
  expect(functions.nameOfUser).not.toMatch("Kanye West");
  expect(functions.nameOfUser).toMatch(/ILD/i);
  expect(functions.nameOfUser).not.toMatch(/di/);
});

test("nullValue", () => {
  expect(functions.nullValue).toBeNull();
  expect(functions.nullValue).toBeFalsy();
  expect(functions.nullValue).toBeDefined();
});

test("undefinedValue", () => {
  expect(functions.undefinedValue).toBeUndefined();
  expect(functions.undefinedValue).not.toBeTruthy();
});

test("someUserObject", () => {
  expect(functions.someUserObject).toEqual({ name: "Wildo Coda", age: 30 });
});

test("groceryList", () => {
  expect(functions.groceryList).toContain("bread");
  expect(functions.groceryList).not.toContain("tea");
});

test("faultyFunc", () => {
  expect(functions.faultyFunc).toThrow();
  expect(functions.faultyFunc).toThrow(Error);
  expect(functions.faultyFunc).toThrow("problem");
  expect(functions.faultyFunc).toThrow(/ProB/i);
});

test("findAverage", () => {
  expect(functions.findAverage([1, 2, 3])).toBe(2);
  expect(functions.findAverage([1, 2, 4])).toBeCloseTo(2.3333);
});

test("addAsync", done => {
  functions.addAsyncCallback(10, 5, result => {
    expect(result).toBe(20);
    done();
  });
});

test("fetchApiData", () => {
  expect.assertions(1);
  return functions.fetchApiData().then(data => {
    expect(data.name).toBe("Leanne Graham");
  });
});
