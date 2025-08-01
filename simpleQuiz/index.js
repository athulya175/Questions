const questions=[
    {
        question:"which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
    ]
    },
    {
        question:" How many continents are there in the world?",
        answers:[
            {text:"5",correct:false},
            {text:"6",correct:false},
            {text:"7",correct:true},
            {text:"8",correct:false},
    ]
    },
    {
        question:" Which planet is known as the Red Planet?",
        answers:[
            {text:"Earth",correct:false},
            {text:"Mars",correct:true},
            {text:"Jupiter",correct:false},
            {text:"Venus",correct:false},
    ]
    },
    {
        question:"How many days are there in a leap year?",
        answers:[
            {text:"364",correct:false},
            {text:"365",correct:false},
            {text:"366",correct:true},
            {text:"367",correct:false},
    ]
    }   
]
const qstn=document.getElementById("question")
const ans=document.querySelector(".answerbtn")
const nxtbtn=document.querySelector(".nextbtn")
let currentindex=0
score=0
function startqz(){
    currentindex=0
    score=0
    nxtbtn.innerHTML="Next"
    showQuestion()
}
function showQuestion(){
    resetState()
    let currentqn=questions[currentindex]
    let qnsno=currentindex+1
    qstn.innerHTML=qnsno+"."+currentqn.question
    currentqn.answers.forEach(answer=>{
        const button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("Answers")
       ans.appendChild(button)
       if(answer.correct){
        button.dataset.correct=answer.correct
       }
       button.addEventListener("click",selectAnswer)
    })
}
function resetState(){
    nxtbtn.style.display="none"
    while(ans.firstChild){
        ans.removeChild(ans.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn=e.target
    const iscorrect =selectedBtn.dataset.correct==="true"
    if(iscorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(ans.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nxtbtn.style.display="block"
}
function showScore(){
    resetState()
    qstn.innerHTML=`you scored${score}out of${questions.length}!`
    nxtbtn.innerHTML="Play Again"
    nxtbtn.style.display="block"
}
function  handleNextButton(){
    currentindex++
    if(currentindex<questions.length){
        showQuestion()
    }else{
        showScore()
    }
}
nxtbtn.addEventListener("click",()=>{
    if(currentindex<questions.length){
        handleNextButton()
    }else{
        startqz()
    }
})
startqz()