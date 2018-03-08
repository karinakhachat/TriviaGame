
$(document).ready(function () {
    var timer = 50000;
    var unchecked = 0;
    var correctans = 0;
    var wrongans = 0;
    var interval;



    var Questions = [{
        question: "What is the only state in America that begins with the letter p?",
        answer: ["Prague", "Pago Pago", "Philadlephia", "Pennsylvania"],
        correctAns: "Pennsylvania"
    },
    {
        question: "What is the worlds largest island?",
        answer: ["Fiji", "Greenland", "Madagascar", "Borneo"],
        correctAns: "Greenland"
    },

    {
        question: "What is the diameter of the Earth?",
        answer: ["8,000 miles", "20,000 miles", "6,000 miles", "100,000 miles"],
        correctAns: "8,000 miles"
    },


    {
        question: "What is the worlds largest ocean?",
        answer: ["Atlantic", "Arctic", "Pacific", "Indian"],
        correctAns: "Pacific"
    },

    {
        question: "What is the capital of Armenia",
        answer: ["Tel-aviv", "Yerevan", "Moscow", "Mexico-city"],
        correctAns: "Yerevan"
    },

    {
        question: "What country is Prague in?",
        answer: ["Czech-Republic", "Russia", "Mexico", "India"],
        correctAns: "Czech-Republic"


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
    function start() {

        for (var i = 0; i < Questions.length; i++) {
            $(".questions").append("<p>" + Questions[i].question + "<p>"); //working
            console.log(Questions);
            for (var k = 0; k < Questions[i].answer.length; k++) {
                $(".questions").append("<input type='radio' class='question' name='question-" + i + "'value='" + Questions[i].answer[k] + "''>" + Questions[i].answer[k]);

            }
        }
        interval= setInterval(10000 * 5); //doing weird stuff               
        $("#timer").text(interval)
        $("#submit").hide();
        var btn = $("<button>");
        btn.attr("id", "button")
        btn.text("Submit")
        $("#results").append(btn); 
    }    
    

    //call the function
    $("#submit").click(function () {
        start();
        //working successfully as expected!   
    })

    //compares the correctans with user
    function compare() { 
        console.log("i am function")
    
        console.log($(".questions"));//working
        
        $.each($("input[class='question']:checked"), function (i) {
            var value = $(this).val()
            if ( value === Question.correctAns) {
                correctans++;
            }
            console.log(correctans);
            if ( value === 0) {
                unchecked++;
            }
            console.log(unchecked);

            if ( value != Question.correctAns) {
                wrongans++;
                console.log(wrongans);
            }        

        })

         //the only working part of the function   
        $(".questions").empty();
        $("#results").empty();
    }
    $(document).on('click', '#button' , function(){
        compare();
console.log("click")
    
    })





});