
$( document ).ready(function() {
    });

var dayOfTheWeek = document.getElementById("weekday")

var date = new Date();
console.log(date)
var weekDay = getWeekDay(date);

function getWeekDay(date){
    var weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
    var day = date.getDay();
    dayOfTheWeek.textContent ="Today is " + weekdays[day];
    return weekdays[day];
}




