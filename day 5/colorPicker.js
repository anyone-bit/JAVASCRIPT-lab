document.getElementById("colorPicker").addEventListener("input",()=>{
    let color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
    document.getElementById("box").value =color;
});
