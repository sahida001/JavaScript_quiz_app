const MyBtn = document.querySelector(".MyBtn button");
const RulesBox = document.querySelector(".RulesBox");
const exitButton = document.querySelector(".buttons .ExitButton");
const continueButton = document.querySelector(".buttons .ContinueButton");
const Question = document.querySelector(".Question");


MyBtn.onclick = () => {
    RulesBox.classList.add("activeInfo");
}

exitButton.onclick = () => {
    RulesBox.classList.remove("activeInfo");
}

continueButton.onclick = () => {
    RulesBox.classList.remove("activeInfo");
    Question.classList.add("activeQuiz");
    showQuestions(0)
}

const nextbtn = document.querySelector(".nextbtn");

let que_count = 0;

nextbtn.onclick = ()=>{
    if(que_count < questions.length -1){
        que_count ++
        showQuestions(que_count)
    }else{
        console.log("Tou have complete your task");
    }
}

function showQuestions(index){
    const que_text = document.querySelector('.text');
    let option_list = document.querySelector(".MyOptions");
    let option_tag = '<div class="options"><span>'+ questions[index].options[0] +'</span></div>'
                     +'<div class="options"><span>'+ questions[index].options[1] +'</span></div>'
                     +'<div class="options"><span>'+ questions[index].options[2] +'</span></div>'
                     +'<div class="options"><span>'+ questions[index].options[3] +'</span></div>'
                   
    
    let que_tag = "<span>" + questions[index].numb+ '.' + questions[index].question +"</span>";
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const total_ques= document.querySelector(".total_ques");
    let total_queTag = '<p>' +questions[index].numb + ' Of 5 </p>'
    total_ques.innerHTML = total_queTag;


   let option = option_list.querySelectorAll(".options ");
   for(let i=0; i<option.length; i++){
    option [i].setAttribute("onclick", "optionSelected(this)");
   }

}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
   
   

    if( userAns == correctAns){
     answer.classList.add("correct")  
     console.log("Answer is Correct");
   
    }else{
        answer.classList.add("Incorrect")
        console.log("Answer is wrong");
       
    }

}


