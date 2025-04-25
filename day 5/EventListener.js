/*
eventListener = Listen for specific events to create interactive web pages:
Events:mouseout,mouseover,input,keydown,keyup etc...
syntax:
.addEventListener(event,callback)
*/
//mouseover
const box = document.getElementById("myBox");
const button = document.getElementById("myButton");
button.addEventListener("mouseover",()=>{
    box.textContent ="hey guys"
    box.style.color ="red"

})
//click
button.addEventListener("click",()=>{
    box.textContent ="welcome cse"
    box.style.color ="white"
    box.style.borderRadius ="50%"
})
//mouseout():
button.addEventListener("mouseout",()=>{
    box.textContent ="thank you(❁´◡`❁)"
    box.style.color ="deeppink"
    box.style.borderRadius ="1% 50%"
})

//keyup
document.addEventListener("keyup",(e)=>{
    console.log(e.key);
})
