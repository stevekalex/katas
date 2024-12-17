const reverseInPlace = (arr) => {
  const reverseUntil = Math.floor(arr.length / 2)

  for (let i = 0; i < reverseUntil; i++) {
    temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
 
  return arr
}
