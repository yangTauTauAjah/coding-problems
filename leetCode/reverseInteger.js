var reverse = function(x) {
  if (x < -(2**31) || x > 2**31 - 1) return 0
  return (-1)**(x < 0) * Number.parseInt((x).toString().split('').reverse().join(''))
};

const Int = reverse(1534236469)
console.log(Int)