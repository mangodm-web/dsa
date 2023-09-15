/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const rowFound = {};
    const columnFound = {};
    const subBoxFound = {};
    const subBoxSize = 3;

    for (let j = 0; j < board[i].length; j++) {
      const rowElement = board[i][j];
      const columnElement = board[j][i];
      const subBoxElement =
        board[
          subBoxSize * Math.floor(i / subBoxSize) + Math.floor(j / subBoxSize)
        ][subBoxSize * (i % subBoxSize) + (j % subBoxSize)];

      if (rowElement in rowFound && rowElement !== ".") {
        return false;
      }

      if (columnElement in columnFound && columnElement !== ".") {
        return false;
      }

      if (subBoxElement in subBoxFound && subBoxElement !== ".") {
        return false;
      }

      rowFound[rowElement] = 1;
      columnFound[columnElement] = 1;
      subBoxFound[subBoxElement] = 1;
    }
  }

  return true;
};
