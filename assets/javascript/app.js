
var timer="";
var question="";
var answer=[];
var correctans=[];
var userselect=0;

function selectors(){
var Questions = [
    {
        question: "What is the only state in America that begins with the letter p?",
        answer: ["Prague", "Pago Pago", "Philadlephia", "Pennsylvania"],
        correctans: [3].answer
    },
    {
        question: "What is the worlds largest island?",
        answer: ["Fiji", "Greenland", "Madagascar", "Borneo"],
        correctans: [2].answer
    },

    {   question: "What is the diameter of the Earth?",
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
    Questions.forEach(function(){
    $(".container").append('<label><input type="radio" name="questions" value=""/></label>');
    })

}
//end of selector function
selectors()

function start() 
{
    $("#submit").bind("click", function(){ $(".container").append(Questions)})
    setTimeout()
}




//beginning

