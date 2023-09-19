"use strict";
const person = {
    name: "Bahtiar",
    age: 30,
    surname: "Talyshinskiy",
    address: {
        city: "SPB",
        street: "Kyshelevskay"
    }
};
function fullname(obj) {
    return obj.name + " " + obj.surname;
}
console.log(fullname(person));
