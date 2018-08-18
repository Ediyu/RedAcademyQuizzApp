var score = 0;
var questionIndex = 0;


var content = document.getElementById("content");
var title = document.getElementById("title");
var button = document.getElementById("abs-quiz-btn");
var button1 = document.getElementById("dev-quiz-btn");
var quizContent = document.getElementById("quiz-content");
var questionContent = document.getElementById("questionContent");
var answerone = document.getElementById("answer1");
var option1 = document.getElementById("optionOne-btn");
var option2 = document.getElementById("optionTwo-btn");
var option3 = document.getElementById("optionThree-btn");
var option4 = document.getElementById("optionFour-btn");
var score1 = document.getElementById("score");
var nextButton = document.getElementById('next-btn');
var nextButton1 = document.getElementById('next-btn1');
var resultPage = document.getElementById('resultPage');

function showScore() {
    var _this= this;
    score1.innerText = "score: "+ _this.score;
};
function hide (name){
    name.style.display = 'none';
};
function show(name1){
    name1.style.display = 'block';
};


function showAbstractQuiz(questionIndex) {
    var questionIndex = 0;
    var options = [option1, option2, option3, option4];
    hide(button);
    hide(button1);
    show(nextButton);
    hide(content);

    title.innerText = info.quizzes[0].questions[questionIndex]["question"];
    for (let i =0; i<options.length; i++){ 
        options[i].textContent = info.quizzes[0].questions[questionIndex].answers[i]["content"];    
            show(options[i]);
            for (let j =0; j<options.length; j++){
                options[j].addEventListener('click', function () {
                    var correctAnswer = info.quizzes[0].questions[questionIndex].answers[j]["value"];
                    if (correctAnswer === false) {
                        questionContent.innerHTML = "Incorrect";
                        options[j].className = 'btn btn-danger';
                        }
                    else {content.innerHTML = "Correct";
                    options[j].classList = 'btn btn-success';
                    score++;
                        }
                    showScore(); 
                    })
                };    
    }

    return;
}

function nextbutton() {
    var options = [option1, option2, option3, option4];
    questionIndex++;
    title.textContent = info.quizzes[0].questions[questionIndex]["question"];
    for (let i =0; i<options.length; i++){ 
        options[i].textContent = info.quizzes[0].questions[questionIndex].answers[i]["content"];    
            show(options[i]);
            options[i].className = 'btn btn-info';
        
    }
    if (questionIndex == 2){
        nextButton.textContent = "Finished!";
            nextButton.addEventListener('click', function() {
                show(resultPage);
                hide(nextButton);
                hide(option1);
                hide(option2);
                hide(option3);
                hide(option4);
                if (score > 5){
                    var result = ".Congratulations! You Passed";
                }
                else {
                    var result = ".I am sorry you Failed"
                }
                    

                resultPage.innerText = "Your Score: " + score +" " + result;
            })
    }
    
}

function showDevQuiz(questionIndex) {
    var questionIndex = 0;
    var options = [option1, option2, option3, option4];
    hide(button);
    hide(button1);
    show(nextButton1);
    hide(content);

    title.innerText = info.quizzes[1].questions[questionIndex]["question"];
    for (let i =0; i<options.length; i++){ 
        options[i].textContent = info.quizzes[1].questions[questionIndex].answers[i]["content"];    
            show(options[i]);
            for (let j =0; j<options.length; j++){
                options[j].addEventListener('click', function () {
                    var correctAnswer = info.quizzes[1].questions[questionIndex].answers[j]["value"];
                    if (correctAnswer === false) {
                        content.innerHTML = "Incorrect";
                        options[j].className = 'btn btn-danger';
                        }
                    else {content.innerHTML = "Correct";
                    options[j].classList = 'btn btn-success';
                    score++;
                        }
                    showScore(); 
                    })
                };    
    }

    return;
}



function nextbutton1() {
    var options = [option1, option2, option3, option4];
    questionIndex++;
    title.textContent = info.quizzes[1].questions[questionIndex]["question"];
    for (let i =0; i<options.length; i++){ 
        options[i].textContent = info.quizzes[1].questions[questionIndex].answers[i]["content"];    
            show(options[i]);
            options[i].className = 'btn btn-info';
        
    }
    if (questionIndex == 2){
        nextButton1.textContent = "Finished!";
            nextButton1.addEventListener('click', function() {
                show(resultPage);
                hide(nextButton1);
                hide(option1);
                hide(option2);
                hide(option3);
                hide(option4);
                if (score > 5){
                    var result = ".Congratulations! You Passed";
                }
                else {
                    var result = ".I am sorry you Failed"
                }
                    

                resultPage.innerText = "Your Score: " + score +" " + result;
            })
    }
    
}


