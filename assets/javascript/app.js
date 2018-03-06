
$(document).ready(function () {
    var timer = "";
    var counter = 0;
    var correctans = 0;
    var button = "";
    var wrongans = 0;
    var userselect = 0;
    var interval = 0;



    var Questions = [{
        question: "What is the only state in America that begins with the letter p?",
        answer: ["Prague", "Pago Pago", "Philadlephia", "Pennsylvania"],
        correctans: "Pennsylvania"
    },
    {
        question: "What is the worlds largest island?",
        answer: ["Fiji", "Greenland", "Madagascar", "Borneo"],
        correctans: "Greenland"
    },

    {
        question: "What is the diameter of the Earth?",
        answer: ["8,000 miles", "20,000 miles", "6,000 miles", "100,000 miles"],
        correctans: "8,000 miles"
    },


    {
        question: "What is the worlds largest ocean?",
        answer: ["Atlantic", "Arctic", "Pacific", "Indian"],
        correctans: "Pacific"
    },

    {
        question: "What is the capital of Armenia",
        answer: ["Tel-aviv", "Yerevan", "Moscow", "Mexico-city"],
        correctans: "Yerevan"
    },

    {
        question: "What country is Prague in?",
        answer: ["Czech-Republic", "Russia", "Mexico", "India"],
        correctans: "Czech-Republic"


    },

    {
        question: "What color is a Welsh Poppy Flower?",
        answer: ["Red", "Pink", "Orange", "Yellow"],
        correctAns: "Yellow"
    },

    {
        question: "Name the three primary colours?",
        answer: ["Yellow, Orange, Green", "Blue, Red, Yellow", "Brown, White, Red", "Yellow, Blue, Green"],
        correctAns: "Blue, Red, Yellow"
    }

    ]
 
    $("#submit").click(function Start() {
        $(".questions").html("<h1>" + Questions[0].question + "</h1>"); //working
        console.log(Questions);
        
        $(".answers").html("<h1>"+ Questions[0].answer + "</h1>");
        function fivemin(){
        setTimeout(fivemin, 10000 * 5);
        }

        function radiobutton() {
            Questions.forEach(function (answerObj)
             {for (var i = 0; i < answer.length; i++) {
                result.append('<label><input type="radio" name="usernames" value="' + answer[i] + '" /> ' + usernames[i] + '</label>');
              
         Start();   
        }
        } 
            )};  
        });
        //call the function

    
        
        //call the function

  
    


});
