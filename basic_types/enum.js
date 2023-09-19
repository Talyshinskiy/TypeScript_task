"use strict";
// const ROLES = {
//   ADMIN: "admin",
//   USER: "user"
// }
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 42] = "admin";
    Roles[Roles["user"] = 43] = "user";
})(Roles || (Roles = {}));
const person1 = {
    role: Roles.admin
};
const person2 = {
    role: Roles.user
};
function check(person) {
    if (person.role === Roles.admin) {
        console.log("user is admin");
    }
    else {
        console.log("user is user");
    }
}
const temp = {
    role: "star wars"
};
check(person1);
check(person2);
// check(temp) error
