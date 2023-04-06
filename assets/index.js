// pseudocode map
/* 
    start with global variables, incl the queryselectors
    create functions 
        
        function startQuiz()
        event listener on mainpageButton to show the question div and start the timer

        function startTimer()

        function showQuestion()

        function validateAnswer()
            if else statement
            if correct, run showQuestion()
            else, decrement timer
        
        function 

*/
var maxTime = 10
var timeLeft = document.querySelector("#timerTopRight");
var introPage = document.getElementById("#introPage");
var letsGoButton = document.querySelector(".mainpageButton");
var questionPages = document.querySelector(".question-container");
var questionNames = document.querySelector(".questionTitles");
var answerButton1 = document.querySelector("#answer1");
var answerButton2 = document.querySelector("#answer2");
var answerButton3 = document.querySelector("#answer3");
var answerButton4 = document.querySelector("#answer4");
var scorecardPage = document.querySelector(".scorePageContainer");
var scorecardHeader = document.querySelector(".scorecardHeader");
var scorecardName = document.querySelector("#scorecardName");
var highscore = document.querySelector("#highscore");
var allAnswerButtons = document.querySelector(".answerButtons");
var ListOfanswers

var ListOfanswers = [

    question1answerset = {

        answerButton1: true,

        answerButton2: false,

        answerButton3: false,

        answerButton4: false
    },

    question2answerset = {

        answerButton1: false,

        answerButton2: true,

        answerButton3: false,

        answerButton4: false
    },

    question3answerset = {

        answerButton1: false,

        answerButton2: false,

        answerButton3: false,

        answerButton4: true
    },

    question4answerset = {

        answerButton1: false,

        answerButton2: true,

        answerButton3: false,
        
        answerButton4: false
    },

    question5answerset = {

        answerButton1: false,

        answerButton2: false,

        answerButton3: true,

        answerButton4: false
    },

]

function hideQuestions() {
    questionPages.setAttribute("class", "hidden");

}

function showQuestion() {
    if( questionPages.visibility = true) {
        console.log("its hidden")
    } questionPages.removeAttribute("class", "hidden");
}

function validateAnswer() {
    if( answerButton1 === true ) [

    ]
}

function startTimer() {
    setInterval(function () {
        if (maxTime >= 0) {
          timeLeft.textContent = "Time Remaining: " + maxTime;
          maxTime--;
        } else if (max = 0) {
          maxTime.textContent = "Time Remaining: " + maxTime;
          maxTime--;
          
        } else {
          maxTime.textContent = '';
          clearInterval(timeLeft);
          loseGame();
        }
      }, 1000);
}

function startQuiz() {
    letsGoButton.addEventListener("click", function(event) {
        if( event.target.matches('.mainpageButton') ) {
            showQuestion()
            startTimer()
        }
    }  
)    
}
hideQuestions()
startQuiz()