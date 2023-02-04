const input = [0,1,0,0,0,1,0,0,1,0,1,0,0,1]
let counter = 0
let i = 0

while (true) {
  
  if (input[i += 2] === 1) {
    input[i -= 1]
  }
  
  if (i >= input.length) break
  
  counter++
  
}

console.log(counter)
