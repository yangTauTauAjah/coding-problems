let result = []

for (let i = 0; i < (inputMatrix.length - 2); i++) {
  
  let row = []
  
  for (let j = 0; j < (inputMatrix[i].length - 2); j++) {
    
    row.push(
        inputMatrix[i+0][j+0]
      + inputMatrix[i+0][j+1]
      + inputMatrix[i+0][j+2]
      + inputMatrix[i+1][j+1]
      + inputMatrix[i+2][j+0]
      + inputMatrix[i+2][j+1]
      + inputMatrix[i+2][j+2]
    )
    
  }
  
  result.push(row.reduce((a,b) => a > b ? a : b, 0))
  
}

result.reduce((a,b) => a > b ? a : b, 0)
