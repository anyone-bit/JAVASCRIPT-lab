//step 1 CREATE THE ELEMENT:
const newH1 = document.createElement('h1');
//step 2 ADD ATTRIBUTES / PROPERTIES:
newH1.textContent = 'Parul University';
newH1.id = "College";
newH1.className = "Cse cse-4";
//step 3 APPEND TO THE DOM:
// document.body.append(newH1);
document.body.prepend(newH1);
newH1.style.color = "red";
newH1.style.backgroundColor = "black";
document.getElementById("box2").prepend(newH1);
const box = document.getElementById("box3");
document.body.insertBefore(newH1,box);
//REMOVE HTML ELEMENT
document.getElementById("box2").remove(newH1);

console.log(newH1);
