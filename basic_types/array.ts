const names: string[] = ["Tania", "German", "Bahtiar"]

names.push("Eva")


for (let name of names) {
  console.log(name.toUpperCase());

}
const result = names.filter(n => n !== "Tania")
  .map(n => n.length)
  .reduce((acc, cur) => acc += cur, 0)
console.log(result);
