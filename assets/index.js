// pseudocode map
/* 
    start with global variables, incl the queryselectors
    create functions 
        
        function startQuiz()
        event listener on mainpageButton to show the question div and start the timer

        function startTimer()

        function buildQuestion()

        function validateAnswer()
            if else statement
            if correct, run buildQuestion()
            else, decrement timer
            
            function run buildquestion till all questions through
        
        function to show a win screen/scorepage
        function to build a highscore page,
        function for if they run out of time to boot them back to the main page
        function to save scores and name pairs to local storage
        

            
*/
var JSONarray = []
var savedScores = []
var savedNames = []
var questionCounter = 0
var score = 0
var maxTime = 20
var timer  

var totalhighscores = document.querySelector('#totalhighscores');

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
var highscorePageLink = document.body.querySelector('a');
var answerValue
var lastQuestion

var headerScore = document.querySelector("p");

function hideScore() {
headerScore.setAttribute('class', 'hidden')
}

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

function showIntroPage() {
    introPage.removeAttribute('class', 'hidden');
}
function loseQuiz(){
    alert("You lost! Try again!");
    location.reload();

}

function validateAnswer(event) {
    lastQuestion = questionCounter-1;
    if( answerValue == listOfQuestionsAndAnswers[lastQuestion].correct ) {
        score = score+5;
        headerScore.textContent = `Current Score ${score}`;

    } else { 
        maxTime = maxTime-5;
    }
    if( questionCounter != listOfQuestionsAndAnswers.length ) {
        
        buildQuestion()
    } else {
        clearInterval(timer);
        showScorecardPage()
        WinGameScorecard()
        //scorecardInfo()
        //savedScores = score;
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

function WinGameScorecard(){
    var namePrompt = prompt("Please enter a name for your score");
    //savedNames.push(namePrompt);
    JSONarray = JSON.parse(localStorage.getItem('high scores'));
    if(JSONarray == null) {
        JSONarray = []
    }
    var object = { name: namePrompt, score: score }
    JSONarray.push(object);
    console.log(JSONarray);
    scorecardName.textContent = object.name;
    //var score = savedScores;
    //savedScores.push(score);
    //console.log(savedScores)
    highscore.textContent = object.score;
    //var savedWinData = savedNames + savedScores;
    localStorage.setItem('high scores', JSON.stringify(JSONarray));
    //localStorage.getItem('array', JSON.parse(JSONarray));
}



function showScorecardPage() {
    scorecardPage.removeAttribute('class', 'hidden')
    hideQuestions()
    hideIntroPage()
    
    /*var namePrompt = prompt("Please enter a name for your score");
    savedNames.push(namePrompt);
    scorecardName.textContent = namePrompt;
    savedWinData.push(savedNames);
    highscore.textContent = score;
    savedWinData.push(score);
    window.localStorage.setItem('User High Score', JSON.stringify(savedWinData));
    console.log(localStorage.getItem('User High Score'));
    */
}

function highscorePageInfo(){
    //showScorecardPage()
    JSONarray = JSON.parse(localStorage.getItem('high scores'));
    totalhighscores.innerHTML = "";
    for(var i = 0; i < JSONarray.length; i++ ) {
        console.log(JSONarray);
        var previoushighscores = document.createElement('ul');
        var previoushighscoresLi = document.createElement('li');
        var previoushighscoresnameLi = document.createElement('li');
        previoushighscoresnameLi.textContent = JSONarray[i].name;
        previoushighscoresLi.textContent = JSONarray[i].score;
        totalhighscores.appendChild(previoushighscores);
        previoushighscores.appendChild(previoushighscoresnameLi);
        previoushighscores.appendChild(previoushighscoresLi);
    }
    
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
            headerScore.removeAttribute('class', 'hidden')
            headerScore.textContent = `Current Score ${score}`;
        }
    }  
)    
}


returntoMainPageButton.addEventListener('click', function(event){
    if( event.target.matches( '#returnToIntroPageButton' )) {
        location.reload();
    }    
})

hideScore()
hidescoreCardPage()
hideQuestions()
startQuiz()

highscorePageLink.addEventListener('click', function(event){
    if(event.target.matches( 'a' )) {
        showScorecardPage();
        highscorePageInfo();
    }
})