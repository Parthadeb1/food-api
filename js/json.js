
//make an object into  a stringified
const names = {name:'sakib', age: 23, address:'dhaka'};
const stringified = JSON.stringify(names);

// console.log(stringified);

//convert an object into parse that we can acces the data

const shop ={name:'robi center', profit:'24000', location:'dhanmondi'};
const stringifiedShop = JSON.stringify(shop);
const parseShop = JSON.parse(stringifiedShop);
// console.log(stringifiedShop);
console.log(parseShop);