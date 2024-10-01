const quizData = [
  {
    question: "What is the Capital of France ?",
    answer: "Madrid",
  },
  {
    question: "Who wrote 'Hamlet'?",
    answer: "J.K. Rowling",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Earth"
  },

];


const QuestionElement = document.getElementById('question');
const AnswerElement = document.getElementById('answer');
document.getElementById('Next').addEventListener('click',NextQ);

let currentQ = 0;


function loadQuestion() {
  const Question = quizData[currentQ];
  QuestionElement.textContent = Question.question;
}


function NextQ(){
    if(quizData.length<=currentQ){
        alert("Quiz Complete");
        return;
    }


   const correct = quizData[currentQ].answer.trim().toLowerCase();
   const userAnswer = AnswerElement.value.trim().toLowerCase();


    if (userAnswer==correct){
        alert("Correct Answer !");
        currentQ++;
        
    }else{
        alert("Try Again");
    }

    AnswerElement.value='';
    if (currentQ < quizData.length) {
     loadQuestion();
    }else{
        alert("Quiz Complete!")
    }
}

loadQuestion()