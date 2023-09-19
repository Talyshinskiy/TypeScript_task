
function log(data: any): void {
  console.log(data);

}

function sumAB(a: number, b: number, callback: (d: any) => void): number {
  const result = a + b
  callback(result)
  return result
}

let fn: (n1: number, n2: number, cb: (d: any) => void) => number

fn = sumAB

log(fn(3, 6, log));
