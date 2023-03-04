/* var lengthOfLongestSubstring = function (s) {
  let found = []
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      const str = s.slice(i, j)
      for (let i = 0; i < str.length; i++) {
        const re = new RegExp(str[i], 'g')
        if (str.match(re).length > 1) break
        if (i === str.length - 1) found.push(str)
      }
    }
  }
  
  let max = 0

  found.forEach(e => {
    if (e.length > max) max = e.length
  })

  return max

}; */
const str = '('
console.log(str.search(new RegExp('\\(')));
