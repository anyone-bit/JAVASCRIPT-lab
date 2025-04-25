//forEach() method
//The forEach() method calls a function once for each element in an array, in order.

const lang =["html","css","js"];
console.log(lang);

function demo(item,index){
    console.log(index,item);
}
lang.forEach(demo);
// console.log(lang);

//map() method
//The map() method creates a new array with the results of calling a function for every array element.

const num =[4,9,16,25];
const newArray = num.map((x)=> x*2);
console.log(newArray);

//filter() method
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
const ages = [32,33,16,40,18,10];

const checkAdult = ages.filter((age)=> age>=18);
console.log(checkAdult);

//reduce() method
//The reduce() method reduces the array to a single value.

const num2 = [175,50,25];
const reduced = num2.reduce((total,num)=> total - num);
console.log(reduced);