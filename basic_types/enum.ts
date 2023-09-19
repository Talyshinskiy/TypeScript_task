// const ROLES = {
//   ADMIN: "admin",
//   USER: "user"
// }

enum Roles {
  admin = 42,
  user
}

const person1 = {
  role: Roles.admin
}

const person2 = {
  role: Roles.user
}

function check(person: { role: Roles }) {
  if (person.role === Roles.admin) {
    console.log("user is admin")
  } else {
    console.log("user is user");
  }
}
const temp = {
  role: "star wars"
}


check(person1)
check(person2)
// check(temp) error