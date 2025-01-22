function sum1(a: number, b: number): void {
  console.log(a + b);
}

sum1(5, 11);

function sum2(...numbers: number[]): number {
  const totalSum = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
  return totalSum;
}

console.log(sum2(1, 2, 3, 4, 10));
