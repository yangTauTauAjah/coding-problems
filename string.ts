const inputStr: string = 'abcab'
const expLen: number = 1000000

const ret: number = (
  inputStr
  .slice(0, expLen%inputStr.length)
  .split('')
  .filter(e => e === 'a')
  .length
) +
(
  inputStr
  .split('')
  .filter(e => e === 'a')
  .length * Math.floor(expLen/inputStr.length)
)
