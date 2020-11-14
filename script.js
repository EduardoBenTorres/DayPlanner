var date = moment().format("MMM Do YY");

$("#currentDay").append(date);

console.log(date);

var currentTime = moment().format("k");
console.log(currentTime);

for ( i =9; i<=17; i++){
    if (i<currentTime){
    $("#" + i + "todo").addClass("past")
    }
    else if (i > currentTime){
        $("#" + i + "todo").addClass("future")
    }
    else{
        $("#" + i + "todo").addClass("present")
    }

   
}


$(".saveBtn").on("click",function(){
    var time = $(this).attr("#i");
    var text = $("#" + time + "todo").val();
    console.log(text,time);





})
