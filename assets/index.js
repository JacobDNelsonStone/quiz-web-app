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

var savedScores 
var questionCounter = 0
var score = 0
var maxTime = 20
var timer  
var timeLeft = document.querySelector("#timerTopRight");
var introPage = document.querySelector(".introPage");
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
var questionbuttontext = document.querySelector('.questionbuttonflexcolumn');
var returntoMainPageButton = document.querySelector('#returnToIntroPageButton');
var answerValue
var lastQuestion

var listOfQuestionsAndAnswers = [
    {
        question: `Who is the actor with the most 'Best Actor' awards at the Oscars?`,
        answers: [
            "Daniel Day Lewis", 
            "Joaquin Phoenix", 
            "Matthew McConaughey", 
            "Anthony Hopkins"
        ],
        correct: "Daniel Day Lewis"
    }, 

    {
        question: `What film is currently the most awarded film of all time?`,
        answers: [
            "LOTR: Return of the King",
            "Everything Everywhere All At Once",
            "Titanic",
            "Ben-Hur"
        ],
        correct: "Everything Everywhere All At Once"

    },

    {
        question: `Who is the cinematographer for the film "No Country for Old Men?`,
        answers: [
            "Emmanuel Lubezki",
            "Rodrigo Prieto",
            "Robert Richardson",
            "Roger Deakins"
        ],
        correct: "Roger Deakins"
    },

    {
        question: `When did the christmas classic "It's A Wonderful Life" come out?`,
        answers: [
            "1948",
            "1946",
            "1951",
            "1944"
        ],
        correct: "1946"
    },

    {
        question: `In the film "Prisoners", who plays detective Loki?`,
        answers: [
            "Jake Gyllenhaal",
            "Paul Dano",
            "Ethan Hawke",
            "Ben Affleck"
        ],
        correct: "Jake Gyllenhaal"
    }
]

questionbuttontext.addEventListener('click', function(event) {
    if( event.target.matches( '.answerButtons' )) {
        answerValue = event.target.innerText
        console.log(answerValue);
        validateAnswer();
    }
})

function validateAnswer(event) {
    lastQuestion = questionCounter-1;
    if( answerValue == listOfQuestionsAndAnswers[lastQuestion].correct ) {
        score = score+5;
        console.log(score);
    } else { 
        maxTime = maxTime-5;
    }
    if( questionCounter != listOfQuestionsAndAnswers.length ) {
        
        buildQuestion()
    } else {
        clearInterval(timer);
        showScorecardPage()
        savedScores = score
    }
}


function buildQuestion(){
    
    questionNames.textContent = listOfQuestionsAndAnswers[questionCounter].question;
    answerButton1.textContent = listOfQuestionsAndAnswers[questionCounter].answers[0];
    answerButton2.textContent = listOfQuestionsAndAnswers[questionCounter].answers[1];
    answerButton3.textContent = listOfQuestionsAndAnswers[questionCounter].answers[2];
    answerButton4.textContent = listOfQuestionsAndAnswers[questionCounter].answers[3];
    
    questionCounter = questionCounter+1
    //for( var i = 0; i < currQuestion.answers.length; i++ ){
        
        // for the correct button, add a custom attr for that button
        // append the button to the container
   //}
}



/*var ListOfanswers = [

    question1answerset = {

        answerButton1: true,

        answerButton1: textContent = 'Daniel Day Lewis',

        answerButton2: false,

        answerButton2: textContent = 'Joaquin Phoenix',

        answerButton3: false,

        answerButton3: textContent = 'Matthew McConaughey',

        answerButton4: false,

        answerButton4: textContent = 'Anthony Hopkins',
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
*/


function hideQuestions() {
    questionPages.setAttribute("class", "hidden");

}

function hideIntroPage() {
    introPage.setAttribute('class', 'hidden');

}

function hidescoreCardPage() {
    scorecardPage.setAttribute("class", "hidden")
}

function showScorecardPage() {
    scorecardPage.removeAttribute('class', 'hidden')
    hideQuestions()
    var savedNames = prompt("Please enter a name for your score");
    var savedScores = savedNames + ": " + savedScores;

}
//function populateQuestion1() {
    //var question1 = questionNames.textContent = `Who is the actor with the most "Best Actor" awards at the Oscars?`;


function showQuestion1() {
    if( questionPages.class = 'hidden') {
        console.log("its hidden")
    } questionPages.removeAttribute("class", "hidden");
    hideIntroPage();
    buildQuestion();
    
}

function startTimer() {
    timer = setInterval(function () {
        if (maxTime >= 0) {
          timeLeft.textContent = "Time Remaining: " + maxTime;
          maxTime--;
        } else if (max = 0) {
          maxTime.textContent = "Time Remaining: " + maxTime;
          maxTime--;
          
        } else {
          maxTime.textContent = '';
          clearInterval(timer);
          loseQuiz();
        }
      }, 1000);
}

function startQuiz() {
    letsGoButton.addEventListener("click", function(event) {
        if( event.target.matches('.mainpageButton') ) {
            showQuestion1()
            startTimer()
        }
    }  
)    
}

hidescoreCardPage()
hideQuestions()
startQuiz()