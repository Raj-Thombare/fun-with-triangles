const sideA = document.querySelector("#side-a")
const sideB = document.querySelector("#side-b")
const btnCalculate = document.querySelector("#btn-calculate")
const output = document.querySelector("#output-div") 

function btnCalculateHandler(){
    const a = Number(sideA.value);
    const b = Number(sideB.value);
    const c = calculateHypotenuse(a,b);
    output.innerText = `Hypotenuse is ${c} cm`;
};

function calculateHypotenuse(a,b){
    const result = Math.sqrt(a*a + b*b);
    return result
};

btnCalculate.addEventListener("click",btnCalculateHandler)
