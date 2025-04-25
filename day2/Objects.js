const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    mobile:123456789,
    skill:"stalker"
}
// console.log(person);
// // //dot method
// // console.log(person.mobile);
// // console.log(person.age);

// // //box method
// // console.log(person["skill"]);
// console.log(person["lastName"]);

//for-in loop
for (let key in person){
    console.log(key,person[key]);
}

//insert:
person.country = "India";
person.college = "Parul";
console.log(person);

//updation:
person.country = "USA";
person.age = "24"
console.log(person);

//deletion:
delete person.college;
console.log(person);

//Using new Keyword
const person1 = new Object();
person1.food = "Roti";
person1.place = "vadodara"; 
console.log(person1);

//Nested Object:
const person2 = {
    name: "John",
    age: 30,
    address: {
        city: "Vadodara",
        street:"main street",
        pincode:390001,
        country: {
            name: "India",
            code: "IND"
        }
    }
}
console.log(person2);
console.log(person2.address.city);
console.log(person2.address.country.name);

//box method
console.log(person2["address"]["country"]["code"]);

