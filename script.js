

const questionElement=document.getElementById("question");
const formElement=document.getElementById("form");
const inputEl=document.getElementById("input")
const scoreElement=document.getElementById("score")
///////////////////////////////////////////////
const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const correctAnswer=num1*num2;
///////////////////////////////////////////////
questionElement.innerText=`What is ${num1} multiplied by ${num2}?`
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreElement.innerText=`score: ${score}`
///////////////////////////////////////////////////
formElement.addEventListener("submit",()=>{
const userAns=+inputEl.value;
if(userAns===correctAnswer){
    score++;
    updateLocalStorage();
}else {
    score--;
    updateLocalStorage();
};
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}