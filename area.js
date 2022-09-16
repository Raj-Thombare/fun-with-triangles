const b = document.querySelector("#base")
const h = document.querySelector("#height")
const btnCalculate = document.querySelector("#btn-calculate")
const output = document.querySelector("#output-div")

function areaIs(){
    const base = Number(b.value);
    const height = Number(h.value);
    const area = (base * height)/2;
    
    if(area && height){
       if(area > 0 & height > 0){
          output.innerText = `The area of triangle is ${area} cm`;
       }else{
        output.innerText = "Base and Height of triangle should be positive";
       }
    }else{
     output.innerText = "Please enter base and height of triangle!";
    }
}

btnCalculate.addEventListener("click", areaIs)
