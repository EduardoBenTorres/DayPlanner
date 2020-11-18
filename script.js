//Using moment.js to grab and append current date to id "currentDay"
var date = moment().format("MMM Do YY");

$("#currentDay").append(date);

console.log(date);

//Creating currentTime variable to be in 24 hour format
var timenow = moment().format("k");



//Creating a loop that color coordinates hours based on their Id's
for ( i =9; i<=17; i++){
    if (i<timenow){
    $("#" + i).addClass("past")
    }
    else if (i > timenow){
        $("#" + i).addClass("future")
    }
    else{
        $("#" + i).addClass("present")
    }

   
}

//Attempt at creating a save function which stores users input into Local Storage and displays it 
$(".saveBtn").on("click",function(){
   





})
