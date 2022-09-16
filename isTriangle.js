const angleInput = document.querySelectorAll(".angle-input");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output-div");


function checkBtnHandler(){
    const angle1 = Number(angleInput[0].value);
    const angle2 = Number(angleInput[1].value);
    const angle3 = Number(angleInput[2].value);

    if(angle1 > 0 && angle2 > 0 && angel3 > 0){
        if(angle1 === 90 && angle2 === 90){
        output.innerText = "A triangle can have only one 90 degree angle!";
    }else if(angle2 === 90 && angle3 === 90){
        output.innerText = "A triangle can have only one 90 degree angle!";
    }else if(angle1 === 90 && angle3 === 90){
        output.innerText = "A triangle can have only one 90 degree angle!";
    }else{
        isTriangle(angle1,angle2,angle3);
    }
    }else{
      output.innerText = "Triangle's angles should be positive!";
    }
};

function calculateSumOfAngles(a,b,c){
    let sumOfAngles = a + b + c;
    return sumOfAngles
};

function isTriangle(x,y,z){
    var sumOfAngles = calculateSumOfAngles(x,y,z)
    if(sumOfAngles === 180){
        output.innerText = "Yay! it's a triangle😇"
    }else{
        output.innerText = "Oops! it's not a triangle😭"
    }
};

btnCheck.addEventListener("click",checkBtnHandler)
