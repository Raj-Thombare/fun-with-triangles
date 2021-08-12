const angleInput = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output-div");


function checkBtnHandler(){
    const angle1 = Number(angleInput[0].value);
    const angle2 = Number(angleInput[1].value);
    const angle3 = Number(angleInput[2].value);
    const sumOfAngles = calculateSumOfAngles(angle1,angle2,angle3);
    if(sumOfAngles === 180){
        output.innerText = "Yay! it's a triangle😇"
    }else{
        output.innerText = "Oops! it's not a triangle😭"
    }
};

function calculateSumOfAngles(a,b,c){
    let sumOfAngles = a + b + c;
    return sumOfAngles
};



btnCheck.addEventListener("click",checkBtnHandler)