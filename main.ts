// TODO: Change this function to make all the tests pass
export function stair(num: number) {
  const result: string[][] = [];

  for (let i = 1; i <= num; i++) {
    const row: string[] = [];

    for (let j = 1; j <= i - 1; j++) {
      row.push(" ");
    }

    for (let k = i; k <= num; k++) {
      row.push("*");
    }

    result.push(row);
  }
  return result;
}
