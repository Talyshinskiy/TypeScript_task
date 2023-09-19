const person: {
  name: string,
  age: number,
  surname: string,
  address: {
    city: string,
    street: string
  }
} = {
  name: "Bahtiar",
  age: 30,
  surname: "Talyshinskiy",
  address: {
    city: "SPB",
    street: "Kyshelevskay"
  }

}

function fullname(obj: { name: string, surname: string }): string {
  return obj.name + " " + obj.surname
}

console.log(fullname(person))