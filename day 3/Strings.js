let str1 = " Strive not to be success  ";
let str2 = "but rather to be of value";
console.log(str1);
console.log(str2);

//slice
console.log(str2.slice(4,10));
console.log(str2.slice(4));

//negative index value
console.log(str2.slice(-5));

//substring
console.log(str2.substring(4,10));

//substr
console.log(str2.substr(4,10));

//replace
console.log(str1.replace("Strive","Aim"));

//Uppercase
let Upper = str1.toUpperCase();
console.log(Upper);

//Lowercase
let Lower = str1.toLowerCase();
console.log(Lower);

//trim():
// console.log(str1);
// console.log(str1.trimStart());
// console.log(str1.trimEnd());

//padEnd():
let bill = "Rs.10";
console.log(bill);
console.log(bill.padEnd(7,"*"));

//padStart():
let text = "6";
console.log(text.padStart(4,0));

//charAt():
console.log(str2.charAt(19));

//charCodeAt():
console.log(str2.charCodeAt(19));

//indexOf():
console.log(str2.indexOf("u"));

//lastIndexOf():
console.log(str2.lastIndexOf("e"));

//includes():
console.log(str1.includes("not"));
console.log(str1.includes("nott"));

//search():
console.log(str1.search("not"));
console.log(str1.search("nottt"));

//startsWith():
console.log(str2.startsWith("b"));
console.log(str2.startsWith("1"));

//endsWith():
console.log(str2.endsWith("e"));
console.log(str2.endsWith("z"));



