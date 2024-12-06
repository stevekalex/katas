const parity = (n) => {
  if (n === 0) return "Even";
  if (n === 1) return "Odd";
  else return parity(n - 2)
}

console.log(parity(4))
console.log(parity(100))
console.log(parity(3))
console.log(parity(301))
