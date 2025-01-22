function printSome<T>(x: T, y: T): T {
  console.log('x와 y', x, y);
  return x;
}

printSome<number>(1, 2);
printSome<string>('1', '2');
printSome<boolean>(true, false);
// printSome<boolean>(true, 'true');

// printSome('1', '2');
// printSome(true, false);

function printSome2<T, K>(x: T, y: K): T {
  console.log('x와 y', x, y);
  return x;
}

printSome2<number, string>(1, 'hello');

function arrLength<T>(arr: T[]): number {
  return arr.length;
}

function getValue<T>(val: T): T {
  return val;
}

console.log(arrLength<string>(['a', 'b']));
console.log(arrLength<string | number>([1, 2, 3, 'a', 'b']));
console.log(getValue('value'));
console.log(getValue<string[]>(['value']));

// interface generic 사용
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}

const iphone15: Phone<String> = {
  company: 'apple',
  createAt: new Date('2023-10-13'),
  option: 'black',
};

console.log(iphone15);

type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  company: 'apple',
  createAt: new Date('2024-10-06'),
  option: {
    color: 'silver',
    storage: 256,
  },
};

console.log(iphone16);
