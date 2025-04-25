//Arrays

let cities =["Vadodara","surat","mumbai"];
console.log(cities);

//accessing array elements
console.log(cities[1]);
//length
console.log(cities.length);
//mix of int and string
let arr = [5,6,7,1,"a","abc",[4,5]];
console.log(arr);
console.log(arr[5][0]);

//Matrix Array
let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]
];

console.log(matrix);
console.log(matrix[1][2]);
console.log(matrix[2][1]);

//Array Methods
let array = ["a","b","c","d","e"];
console.log(array);
//push
array.push("f");
console.log(array);
//pop

console.log(array.pop());
console.log(array);

//shift
console.log(array.shift());
console.log(array);

//unshift
array.unshift("a");
console.log(array);

//delete
delete array[2];
console.log(array);

//splice

array.splice(2,3);
console.log(array);
array.splice(1,1,"m");
console.log(array);

array.splice(1,2,"x","y");
console.log(array);

array.splice(1,0,"b");
console.log(array);

//reverse
array.reverse();
console.log(array);

//join()- converts array to string
let str = array.join();
console.log(str);

//split()- converts string to array
let str1 = "a,b,c,d,e";
let str2 = str1.split(",");
console.log(str2);

//concat()- joins two arrays
let firstArray =[1,2,3];
let secondArray = [4,5,6];
console.log(firstArray);
console.log(secondArray);
let joinArray = firstArray.concat(secondArray);
console.log(joinArray);

//spread operator(...)

let mergeArray =[...firstArray,...secondArray];
console.log(mergeArray);
