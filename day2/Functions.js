
// function greeting() {
//   console.log('Hello, World!');
// }
// greeting()

//addition
function add(a, b) {
  let total = a + b;
  console.log(total);
}
add(5,6);


//multiplication
function mul(x, y) {
    return x * y + 20;
}
let store = mul(10,20);
console.log(store);

//Anonymous function

let greet = function(platform){
    console.log("welcome", platform);
}
greet("to the hell");

//arrow function
const sum = (a, b) => {
    return a + b;
}
total = sum(10, 20);
console.log(total);


// IIFE
(function cse(){
    console.log("Welcome here");
})();