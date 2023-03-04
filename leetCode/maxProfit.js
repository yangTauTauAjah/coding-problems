var maxProfit = function(prices) {
  let lastStart = 0
  let start = 0
  let profit = 0

  for (let t = 0; t < 2; t++) {
      start = prices[lastStart]
      let max = start
      for (let i = lastStart + 1; i < prices.length; i++) {
          if (prices[i] > max) {
              max = prices[i]
              lastStart = i + 1
          }
      }
      profit += max - start
      if (lastStart === prices.length) break
  }

  return profit
};

console.log(maxProfit([2,1,4]))