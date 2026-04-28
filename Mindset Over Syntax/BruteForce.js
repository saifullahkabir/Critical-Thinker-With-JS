const arr = ["apple", "banana", "mango", "apple"];

//* Bruit Force
//* Time Complexity = O(n2)
const removeDupArr = (arr) => {
  const newArr = [];

  arr.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};

console.log(removeDupArr(arr));

//* Set implementation
//* Time Complexity = O(n)
const removeDupSet = (arr) => {
  const set = new Set(arr);

  return Array.from(set);
};

console.log(removeDupSet(arr));
