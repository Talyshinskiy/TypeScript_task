"use strict";
let string = 'Hello TypeScript';
function transform(str, uppercase) {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLocaleLowerCase();
}
const arrowTransform = (str, uppercase) => {
    if (uppercase) {
        return str.toUpperCase();
    }
    return str.toLocaleLowerCase();
};
let isUppercase = true;
console.log(transform(string, isUppercase));
console.log(arrowTransform(string, false));
