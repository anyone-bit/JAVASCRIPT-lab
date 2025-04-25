//Date Methods:

const date = new Date();
console.log(date);

//getFULLYear() method:

const d = new Date("2025-03-26");
console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getDate());
const d1 = new Date();
console.log(d1.getHours());

console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
console.log(d1.getTime());

const d2 = Date.now();
console.log(d2);
