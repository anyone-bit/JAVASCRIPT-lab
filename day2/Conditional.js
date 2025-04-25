//Conditional Statements:
//if-else
let number = 21;
if (number % 2 == 0) {
    console.log(number,"Even Number");
}
else {
    console.log(number,"Odd Number");
}

//else-if statements
let age = 30;
if (age < 18) {
    console.log("You are a minor");
}
else if (age >= 18 && age < 21) {
    console.log("You are a young adult");
}
else {
    console.log("You are an adult");
}

//switch statement
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

let days ="Sunday"
switch (days){
    case "Monday":
        console.log("1st day of the week");
        break;
    case "Tuesday":
        console.log("2nd day of the week");
        break;
    case "Wednesday":
        console.log("3rd day of the week");
        break;
    default:
        console.log("Weekend");
}