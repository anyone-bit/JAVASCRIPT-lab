let box = document.querySelector("div");
let inputBox = document.querySelector("input");

inputBox.addEventListener("input",()=>{
    box.style.background = inputBox.value;
    box.style.borderRadius =inputBox.value;
})
