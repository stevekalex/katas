// Write a program that creates a string that represents an 8×8 grid
// using newline characters to separate lines. At each position of the
// grid there is either a space or a "#" character. The characters should form a chessboard.

const renderChessboard = (n) => {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Size must be a positive integer");
  }

  let chessboard = "";

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n - 1; j++) {
      row += (i + j) % 2 === 0 ? " " : "#";
    }
    
    chessboard += `${row}\n`
  }

  console.log(chessboard)
}

renderChessboard(10)
