// const rana = {userName: "Rana"};
// const rony = {userName: "Rony"};
// const farhin = {userName: "Farhin"};

// const set = new Set();  //* set remove duplicate

// set.add(rana);
// set.add(rony);
// set.add(farhin);
// set.add(rana);

// console.log(set);

const arr = ["apple", "banana", "mango", "apple"];

const set = new Set(arr);

const test = Array.from(set);

test.push("orange")

console.log(test);
