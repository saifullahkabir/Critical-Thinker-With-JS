// console.time("task");

// for(let i = 0; i <= 500000; i++){
//     console.log(i);
// }

// console.timeEnd("task");

//* O(n)
const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
  if (i < 300000) {
    firstArray.push(i);
  }
  secondArray.push(i);
}

console.log("first array", firstArray.length);
console.log("second array", secondArray.length);

// console.time("map1");
const firstUserList = firstArray.map((number) => ({ userId: number }));
// console.timeEnd("map1");

// console.time("map2");
const secondUserList = secondArray.map((number) => ({ userId: number }));
// console.timeEnd("map2");


console.time("find");
//* worst case
//* Time Complexity = O(n)
// const user = secondUserList.find((user) => user.userId === 500000);

//* direct index access
//* Time Complexity = O(1)
const user = secondUserList[500000];
console.timeEnd("find")
