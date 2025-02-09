const quizData = [
  {
    question: "What is the Capital of France ?",
    answer: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Who wrote 'Hamlet'?",
    answers: ["J.K. Rowling", "Shakespeare", "Charles Dickens", "Mark Twain"],
    correct: 1,
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1,
  },
];

let currentQuestion = 0 ;
let score = 0 ;

const questionElement = document.getElementById('question');
const answerElement = document.querySelectorAll('.answer');

function loadQ(){
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answerElement.forEach((element,index)=>{
        element.textContent = currentQuiz.answer[index];
    });
}

function checkAnswer(selectedAnswer){
    const correctAnswer = quizData[currentQuestion].correct;
    if (selectedAnswer==correctAnswer){
        score++;
        alert('Correct!');
    }else{
        alert('Wrong !')
    }
    currentQuestion++;
    if(currentQuestion<quizData.length){
        loadQ();
    }else{
        alert(`Quiz Over! Your score is ${score}/${quizData.length}`);
    }
}

loadQ()