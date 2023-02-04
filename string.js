let newStr = ''
let counter = 0
while (newStr.length <= inputLen) {
  newStr += inputStr
}
newStr = newStr.slice(0, inputLen)
console.log(newStr)
console.log(newStr.split('').filter(e => e === 'a').length)
