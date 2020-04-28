
function getSpanTimes() {

const fullDate = new Date(); //new date format live

//components needed from fullDate
let hours = fullDate.getHours();
let minutes = fullDate.getMinutes();
let seconds = fullDate.getSeconds();

//make all 3 values 2 digits and use var or let to change them 
if (hours<10) {
    hours = "0" + hours;
}

if (minutes<10) {
    minutes = "0" + minutes;
}

if (seconds<10) {
    seconds = "0" + seconds;
}

//change html content in span tags for h,m,s to live
document.getElementById("hour").innerHTML = hours + " :";
document.getElementById("minute").innerHTML = minutes + " :";
document.getElementById("second").innerHTML = seconds;

}

//use setinterval to update DOM
setInterval(getSpanTimes, 100);