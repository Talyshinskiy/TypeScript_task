"use strict";
function log(data) {
    console.log(data);
}
function sumAB(a, b, callback) {
    const result = a + b;
    callback(result);
    return result;
}
let fn;
fn = sumAB;
log(fn(3, 6, log));
