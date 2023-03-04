const n = 10
const queries = [[1,5,3],[4,8,7],[6,9,1]]

let result = Array(10).fill(0)

queries.forEach(e => {
  
  for (let i = e[0]; i <= e[1]; i++) {
    result[i-1] += e[2]
  }
  
})
