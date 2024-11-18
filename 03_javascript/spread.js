const word1 = "abc";
const word2 = "xyz";

const result = [...word1, ...word2];
console.log(result);

///

class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
}

const arr2 = ["red", "orange"];
[item1, item2, item3 = "peach"] = arr2;
console.log(item3);
