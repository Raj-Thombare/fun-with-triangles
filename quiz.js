const quizForm = document.querySelector(".quiz-form")
const btnSubmit = document.querySelector("#btn-submit")
const output = document.querySelector("#output-div")

const answersArray = ["30","Right angled triangle","Acute triangle","180","Obtuse triangle"];

function checkAnswers(e){
    e.preventDefault();
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm)
    for(let value of formResults.values()){
        if(value === answersArray[index]){
            score = score + 1;
        }index = index + 1;
    }
    output.innerText = "Your score is " + score;
};



btnSubmit.addEventListener("click", checkAnswers)