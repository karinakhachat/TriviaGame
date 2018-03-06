
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
    console.log(Questions)
    //works


    //function radiobutton() {
        //Questions.forEach(function (answerObj)
         //{
           // $(".answers").append(answerObj.answer) for (i=0; 0 < answer.length; i++)
            //.append('<label><input type="radio" name="questions" value=""/></label>');
        //});
    //}

    function Start() {

        //Use console.log like this to show which parts of your code is running.
        console.log("start called");
        //submit buttons is responsive but not working as expected yet

        //it logs them but wont append
        // setTimeout(fivemin, 10000 * 5);
        setTimeout(fivemin, 10000 * 5); // is working as expected!

        console.log("Timeout done")
        radiobutton();
       
        function fivemin() {
            $("#timer").append("<h1>You have five minutes<h1>")

        }
    }

    $("#submit").click(function () {
        $(".questions").html("<h1>" + Questions.question.answer + "</h1>"); //currently super broken i have tried append, date, text
        console.log(Questions);
        //call the function

    
        Start();
        //call the function

    });
});
