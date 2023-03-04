function fillVertical(matrix, col, rowStart, rowEnd, elements) {

    if (rowStart < rowEnd) {
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][col] = elements[i-rowStart]
      }
    } else {
      for (let i = rowStart; i >= rowEnd; i--) {
        matrix[i][col] = elements[Math.abs(i-rowStart)]
      }
    }

}

function fillHorizontal(matrix, row, colStart, colEnd, elements) {

  if (colStart < colEnd) {
    for (let i = colStart; i <= colEnd; i++) {
        matrix[row][i] = elements[i-colStart]
    }
  } else {
    for (let i = colStart; i >= colEnd; i--) {
        matrix[row][i] = elements[Math.abs(i-colStart)]
    }
  }

}

const Matrix = [
  [1, 2, 3, 4, 5 ],
  [6, 7, 8, 9, 10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
]

const Matrix2 = [
  [[0,0],[0,1],[0,2],[0,3],[0,4]],
  [[1,4],[2,4],[3,4],[4,4],[4,3]],
  [[4,2],[4,1],[4,0],[3,0],[2,0]],
  [[1,0],[1,1],[1,2],[1,3],[2,3]],
  [[3,3],[3,2],[3,1],[2,1],[2,2]],
]



const NUMBER_OF_ROWS = Matrix.length
const NUMBER_OF_COLS = Matrix[0].length
const NewMatrix = Array.apply(null, Array(5)).map(e => [])

fillHorizontal(NewMatrix, 0, 0, 4, [0,1,2,3,4])
fillVertical(NewMatrix, 4, 1, 4, [5,6,7,8])

fillHorizontal(NewMatrix, 4, 3, 0, [9,10,11,12])
fillVertical(NewMatrix, 0, 3, 1, [13,14,15])

fillHorizontal(NewMatrix, 1, 1, 3, [16,17,18])
fillVertical(NewMatrix, 3, 2, 3, [19,20])

fillHorizontal(NewMatrix, 3, 2, 1, [21,22])
fillVertical(NewMatrix, 1, 2, 2, [23])

fillHorizontal(NewMatrix, 2, 2, 2, [24])

console.log(NewMatrix)