const b = document.querySelector("#base")
const h = document.querySelector("#height")
const btnCalculate = document.querySelector("#btn-calculate")
const output = document.querySelector("#output-div")

function areaIs(){
    const base = Number(b.value);
    const height = Number(h.value);
    const area = (base * height)/2;
    output.innerText = `The area of triangle is ${area} cm`;
}

btnCalculate.addEventListener("click", areaIs)