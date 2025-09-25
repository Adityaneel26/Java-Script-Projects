// Questions data
const questions = [
    {
        question:"Which is the largest animal in the world?",   
        answers : [
            {text:"Shark", correct: false},
            {text:"Elephant", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Dog", correct: false}
        ]
    },
    {
        question:"What is the full form of HTTP?",   
        answers : [
            {text:"Hyper Text Transfer Protocol", correct: true},
            {text:"Hyper Text Transfer", correct: false},
            {text:"Hyper Text Transport Protocol", correct: true},
            {text:"Hyper Text Transfer Protocol Secure", correct: false}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",   
        answers : [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false}
        ]
    }
];

// Get elements from HTML
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;

// Start quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show current question
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        // store correct value in dataset
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        // handle click
        button.addEventListener("click", selectAnswer);
    });
}

// Reset before showing new question
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handle answer selection
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    // Show correct answer
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

// Show score at the end
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Handle Next button
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

// Start the quiz first time
startQuiz();
