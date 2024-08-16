const  button = document.getElementById('button')
let clicked = false;

const precioOriginal1 = document.getElementById("value1").innerHTML;
const precioOriginal2 = document.getElementById("value2").innerHTML;
const precioOriginal3 = document.getElementById("value3").innerHTML;

const nuevoPrecio = 19.00;
const nuevoPrecio2 = 24.00;
const nuevoPrecio3 = 39.00;

button.addEventListener("click", () => {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let value3 = document.getElementById("value3");
    
    if(clicked){
        value1.innerHTML = precioOriginal1;        
        value2.innerHTML = precioOriginal2;
        value3.innerHTML = precioOriginal3;
        clicked=false;
    }else{
        value1.innerHTML = `<p class="dollar"><span>&dollar;</span>${nuevoPrecio.toFixed(2)}</p>`;         
        value2.innerHTML = `<p class="dollar"><span>&dollar;</span>${nuevoPrecio2.toFixed(2)}</p>`; 
        value3.innerHTML = `<p class="dollar"><span>&dollar;</span>${nuevoPrecio3.toFixed(2)}</p>`; 
        clicked = true;
    }
});

