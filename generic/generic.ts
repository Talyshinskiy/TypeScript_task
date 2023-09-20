// generic


const array: Array<string> = ["a", "b", "c"]

const array2: Array<number | string | boolean> = [1, 2, 3, 4, false, "string"]

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('promise has been resolved')
  }, 1000);
})

promise.then(value => console.log(value))

// 2. Функции с generic

function double<T>(array: T[]): T[] {
  return array.concat(array)
}

function fill<T>(array: any[], value: T): T[] {
  return array.fill(value)
}



const res1 = double(['a', 'b', 'c'])
const res2 = double([1, 2, 3])

const res3 = fill(['a', 'b', 'c'], 1)
const res4 = fill(['a', 'b', 'c'], true)


function merge<T, R>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

const res5 = merge({ a: 1 }, { b: 2, c: { d: 3 } })

res5.c.d

function log<T extends string | number>(data: T): T {
  console.log(data);
  return data
}

let res6 = <string>log('String')
let res7 = log(42) as number
