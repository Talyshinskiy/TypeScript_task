let string = 'Hello TypeScript'


function transform(str: string, uppercase: boolean): string {
  if (uppercase) {
    return str.toUpperCase()

  }
  return str.toLocaleLowerCase()
}

const arrowTransform = (str: string, uppercase: boolean): string => {
  if (uppercase) {
    return str.toUpperCase()

  }
  return str.toLocaleLowerCase()
}

let isUppercase = true



console.log(transform(string, isUppercase))
console.log(arrowTransform(string, false))
