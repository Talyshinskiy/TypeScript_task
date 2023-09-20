const obj = { a: 1, b: 2, c: "a" }
const obj2 = { test: 100 }

function getValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const res8 = getValue(obj, "b")
const res9 = getValue(obj2, "test")