var timer = "";
var counter = 0;
var correctans = 0;
var button = "";
var wrongans = 0;
var userselect = 0;



var Questions = [{
    question: "What is the only state in America that begins with the letter p?",
    answer: ["Prague", "Pago Pago", "Philadlephia", "Pennsylvania"],
    correctans: [3].answer
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
console.log(Questions)
//works

//wrapt this in the $(document).ready test
$(document).ready(function() {

    //function radiobutton() {
        //test your values
        //console.log(Questions.answer.length);
        //for(Questions.keys(answer.length).forEach(function (keys) {
            //Questions.append('<label><input type="radio" name="questions" value=""/></label>');


//      }

    function Start() {

                //Use console.log like this to show which parts of your code is running.
                console.log("start called");
                //submit buttons is responsive but not working as expected yet
                $("#submit").click(function () {
                    $("#pleasework").data(Questions);
                     console.log(Questions);
                     //it logs them but wont append
                    // setTimeout(fivemin, 10000 * 5);
                    setTimeout(fivemin, 10000 * 5); // is working as expected!

                    console.log("Timeout done")

                    function fivemin() {
                        $("#timer").append("<h1>You have five minutes<h1>")

                    }

                })
            }
    //call the function
Start();
//call the function


        });
