var quiz = [
    {
        question : "HTML stands for?",
        option1 : "Hyper Text Markup Language",
        option2 : "High Text Markup Language",
        option3 : "Hyper Tabular Markup Language",
        option4 : "None of these",
        trueAns : "Hyper Text Markup Language"
    } ,
    {
        question : "which of the following tag is used to mark a begining of paragraph ?",
        option1 : "<TD>",
        option2 : "<br>",
        option3 : "<p>",
        option4 : "<TR>",
        trueAns : "<p>"
    } ,
    {
        question : "From which tag descriptive list starts ?",
        option1 : "<LL>",
        option2 : "<DD>",
        option3 : "<DL>",
        option4 : "<DS>",
        trueAns : "<DL>"
    } ,
    {
        question : "Correct HTML tag for the largest heading is",
        option1 : "<head>",
        option2 : "<h6>",
        option3 : "<heading>",
        option4 : "<h1>",
        trueAns : "<h1>"
    } ,
    {
        question : "The attribute of <form> tag",
        option1 : "Method",
        option2 : "Action",
        option3 : "Both Action & Method",
        option4 : "none of these",
        trueAns : "Both Action & Method"
    },
    {
        question : "Markup tags tell the web browser",
        option1 : "How to organise the page",
        option2 : "How to display the page",
        option3 : "How to display message box on page",
        option4 : "none of these",
        trueAns : "How to display the page"
    },
    {
        question : "www is based on which model?",
        option1 : "Local-server",
        option2 : "Client-server",
        option3 : "3-tier",
        option4 : "none of these",
        trueAns : "Client-server"
    },
    {
        question : "What are Empty elements and is it valid?",
        option1 : "No, there is no such terms as Empty Element",
        option2 : "Empty elements are element with no data",
        option3 : "No, it is not valid to use Empty Element",
        option4 : "none of these",
        trueAns : "Empty elements are element with no data"
    },
    {
        question : "Which of the following attributes of text box control allow to limit the maximum character?",
        option1 : "size",
        option2 : "len",
        option3 : "maxlength",
        option4 : "all of these",
        trueAns : "maxlength"
    },
    {
        question : "Web pages starts with which ofthe following tag?",
        option1 : "<Body>",
        option2 : "<Title>",
        option3 : "<HTML>",
        option4 : "<Form>",
        trueAns : "<HTML>"
    }
]

var usrName = document.getElementById('usrname');
var questionPara = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var fname = document.getElementById('name');


function start(){
    if (fname.value == '') {
        alert("please insert your name to start quiz");
    } else {
        document.getElementById('main-enter').style.display = 'none';
        document.getElementById('mainQ').style.display = 'block';
        usrName.innerHTML = document.getElementById('name').value;
        questionPara.innerHTML = quiz[0].question;
        option1.innerHTML = quiz[0].option1;
        option2.innerHTML = quiz[0].option2;
        option3.innerHTML = quiz[0].option3;
        option4.innerHTML = quiz[0].option4;
    }
}



var trueAnswerIndex = 0;
var counter = 0;
var clickedOption = false;
function trueoption(e){
    if(e.innerText == quiz[trueAnswerIndex].trueAns){
            e.style.backgroundColor = 'green';
            e.style.color = 'white';
            document.getElementById('option1').disabled = true;
            document.getElementById('option2').disabled = true;
            document.getElementById('option3').disabled = true;
            document.getElementById('option4').disabled = true;
            counter += 10;
            clickedOption = true; 
        } else if(e.innerText !== quiz[trueAnswerIndex].trueAns){
            e.style.backgroundColor = 'red';
            e.style.color = 'white';
            var a = document.getElementById('option1');
            var b = document.getElementById('option2');
            var c = document.getElementById('option3');
            var d = document.getElementById('option4');
            if(a.innerText == quiz[trueAnswerIndex].trueAns){
                a.style.backgroundColor = 'green';
                a.style.color = 'white';
            } else if(b.innerText == quiz[trueAnswerIndex].trueAns){
                b.style.backgroundColor = 'green';
                b.style.color = 'white';
            } else if(c.innerText == quiz[trueAnswerIndex].trueAns){
                c.style.backgroundColor = 'green';
                c.style.color = 'white';
            } else if(d.innerText == quiz[trueAnswerIndex].trueAns){
                d.style.backgroundColor = 'green';
                d.style.color = 'white';
            }
            document.getElementById('option1').disabled = true;
            document.getElementById('option2').disabled = true;
            document.getElementById('option3').disabled = true;
            document.getElementById('option4').disabled = true;
            clickedOption = true;
        }
    trueAnswerIndex++;
}



var quizIndex = 1;

function next(){
    if(clickedOption == true){

        if (quizIndex <= quiz.length - 1) {
            questionPara.innerText = quiz[quizIndex].question;
            option1.innerText = quiz[quizIndex].option1;
            option2.innerText = quiz[quizIndex].option2;
            option3.innerText = quiz[quizIndex].option3;
            option4.innerText = quiz[quizIndex].option4;
            quizIndex++;
        } else if (quizIndex > quiz.length - 1){
            document.getElementById('mainQ').style.display = 'none'
            document.getElementById('score-box').style.display = 'block';
        }
        document.getElementById('option1').style.backgroundColor = 'white';
        document.getElementById('option1').style.color = 'black';
        document.getElementById('option2').style.backgroundColor = 'white';
        document.getElementById('option2').style.color = 'black';
        document.getElementById('option3').style.backgroundColor = 'white';
        document.getElementById('option3').style.color = 'black';
        document.getElementById('option4').style.backgroundColor = 'white';
        document.getElementById('option4').style.color = 'black';
        document.getElementById('option1').disabled = false;
        document.getElementById('option2').disabled = false;
        document.getElementById('option3').disabled = false;
        document.getElementById('option4').disabled = false;
        clickedOption = false;

    } else if (clickedOption == false){
        alert("please choose any option");
    }

    document.getElementById('score').innerHTML = counter;
    
}




    






