const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const questions = document.getElementById('questions');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
var numCorrect = 0;
var numWrong = 0
var myQuestions = [
                { 
                    question: "What is 10/2?",
                    answers: {
                        a: '3',
                        b: '5',
                        c: '115',
                    },
                    correctAnswer: 'b'
                },
                {
                    question: "What is 30/3?",
                    answers: {
                        a: '3',
                        b: '5',
                        c: '10',
                    },
                    correctAnswer:'c'
                }
    
            ];


quizContainer.style.display ="none";
resultsContainer.style.display="none";
let cQuestion = 0;
option1.addEventListener("click",showResults)
option2.addEventListener("click",showResults)
option3.addEventListener("click",showResults)
// function generateQuiz(questions, quizContainer, resultsContainer, submit){














    function showQuestions(){
      option1.innerText=myQuestions[cQuestion].answers.a
      option2.innerText=myQuestions[cQuestion].answers.b
      option3.innerText=myQuestions[cQuestion].answers.c
      questions.innerText=myQuestions[cQuestion].question
        
    }

//         outpust.push(
//             '<div class="question">' + questions [i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         );
        


//     quizContainer.innerHTML = output.join('');

//         }
        
    
        
        
//         

    function showResults(){

        

        var userAnswer = this.getAttribute("data-value");
        

        console.log(userAnswer)
        if(userAnswer==myQuestions[cQuestion].correctAnswer){
            numCorrect++
        }
        else{
            numWrong++
        }
        if(cQuestion<myQuestions.length-1){
            cQuestion++
            showQuestions()
        }
        else{
            console.log(numWrong,numCorrect)
        }
    }
// 
// //show the questions
//     showQuestions(questions, quizContainer);

//when user clicks submit, show results
submitButton.onclick = function(){
  console.log("On click start button")
  quizContainer.style.display ="block";
  submitButton.style.display="none"
  showQuestions()
}

