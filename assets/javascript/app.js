
var timer = "";
var correctans = 0;
var wrongans = 0;
var userselect = 0;



var Questions = [
    {
        question: "What is the only state in America that begins with the letter p?",
        answer: ["Prague", "Pago Pago", "Philadlephia", "Pennsylvania"],
        correctans: answer[3]
    },
    {
        question: "What is the worlds largest island?",
        answer: ["Fiji", "Greenland", "Madagascar", "Borneo"],
        correctans: [2].answer
    },

    {
        question: "What is the diameter of the Earth?",
        answer: ["8,000 miles", "20,000 miles", "6,000 miles", "100,000 miles"],
        correctans: [1].answer
    },


    {
        question: "What is the worlds largest ocean?",
        answer: ["Atlantic", "Arctic", "Pacific", "Indian"],
        correctans: [3].answer
    },

    {
        question: "What is the capital of Armenia",
        answer: ["Tel-aviv", "Yerevan", "Moscow", "Mexico-city"],
        correctans: [2].answer
    },

    {
        question: "What country is Prague in?",
        answer: ["Czech-Republic", "Russia", "Mexico", "India"],
        correctans: [1].answer


    },

    {
        question: "What color is a Welsh Poppy Flower?",
        answer: ["Red", "Pink", "Orange", "Yellow"],
        correctans: [4].answer
    },

    {
        question: "Name the three primary colours?",
        answer: ["Yellow, Orange, Green", "Blue, Red, Yellow", "Brown, White, Red", "Yellow, Blue, Green"],
        correctans: [2].answer
    }

]
console.log(Questions.answer)
function button() {
    for (i = 0; i < answer.length; i++) {
        $(".container").append('<label><input type="radio" name="questions" value=""/></label>');
    }
}

//end of selector function


// function start() {
    $("#submit").on("click", function () { 
        // $(".container").append(Questions);
        console.log("hello");
    })
    
    //setTimeout(function(){ $(".container"), 3000;{
    //$("")

// }










//beginning

