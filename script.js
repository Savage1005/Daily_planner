
$( document ).ready(function() {
    });

var dayOfTheWeek = document.getElementById("weekday")

var date = new Date();
var weekDay = getWeekDay(date);
var saveButton = $(".btn");
var currentHour = new Date().getHours();
var todayDate = Date(Date.now())

function getWeekDay(date){
    var weekdays = new Array(
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
   );
    var day = date.getDay();
    dayOfTheWeek.textContent ="Today is " + weekdays[day];
    return weekdays[day];
}



//this is to save into local storage
saveButton.on("click", function() {
    console.log($(this).val());
    var hourSlot = $(this).val();
    localStorage.setItem("hour" + hourSlot, $("#text" + hourSlot).val().trim());
    })

    
    //this is the loop to determine what color to make the textarea boxes in relation to the time
    for (let i = 9; i < 24; i++) {
        var currentHourText = localStorage.getItem("hour"+i)
       if(currentHourText !== null){
            $("#text"+i).val(currentHourText)
        }
        console.log(currentHour)
        
        if(currentHour>i){
            $("#text"+i).css("background-color", "gray");
        }
        
        else if (parseInt(currentHour)=== i){
            $("#text"+i).css("background-color", "red");
        }
        
        else {
            $("#text"+i).css("background-color", "green");
        }
    }




