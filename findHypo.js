const sideA = document.querySelector("#side-a")
const sideB = document.querySelector("#side-b")
const btnCalculate = document.querySelector("#btn-calculate")
const output = document.querySelector("#output-div") 

function btnCalculateHandler(){
    const a = Number(sideA.value);
    const b = Number(sideB.value);

    if(a > 0){
        if(b > 0){
            const c = calculateHypotenuse(a,b);
            output.innerText = `Hypotenuse is ${c} cm`;
        }else{
            output.innerText = "Negative (-) values are not valid!";
        }  
    }else{
        output.innerText = "Negative (-) values are not valid!";
    }
    
};

function calculateHypotenuse(a,b){
    const result = Math.sqrt(a*a + b*b);
    return result
};

btnCalculate.addEventListener("click",btnCalculateHandler)
