"use strict";
// generic
const array = ["a", "b", "c"];
const arra2 = [1, 2, 3, 4, false, "string"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('promise has been resolveds');
    }, 1000);
});
promise.then(value => console.log(value));
