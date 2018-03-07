
$(document).ready(function () {
    var timer = 50000;
    var counter = 0;
    var correctans = 0;
    var button = "";
    var wrongans = 0;
    var userselect = 0;
    var interval;



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
    function start(){

        for (var i = 0; i < Questions.length; i++) {
            $(".questions").append("<p>" + Questions[i].question + "<p>"); //working
            console.log(Questions);
            for (var k = 0; k < Questions[i].answer.length; k++) {
                $(".questions").append("<input type='radio' name='question-" + i + "'value='" + Questions[i].answer[k] + "''>" + Questions[i].answer[k]);

            }       
        }
                    interval= setInterval(10000 * 5);               
                $("#timer").text(interval)
                $("#submit").click(function (){
                    Compare();
                })
            }

    //call the function
    $("#submit").click(function () {
        start();
        

    })

    //compares the correctans with user
    function Compare() {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === questions[i].correctans) {
                counter.correct++;
            }
            else {
                counter.incorrect++;

                $.each($("input[name='question-0']:checked"), function () {
                    console.log($(this).val());
                });
            }
        })


    };


});
