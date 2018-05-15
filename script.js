/**
This is a javascript file for perfect timing project

@author Aditi Joshi
*/

var userTime = 0; // user's provided time
var countdownTime = 0; // current countdown time
var countupTime = 0; // current count up time


/** This method is called when submit button is clicked.
	It is made sure that the timer is reset for both stopwatch if previously used. 
	All the stopwatch controls are enabled.
	The time for both stopwatch is updated every second.
*/
function initFunction(){
	if (typeof countup_clock !== 'undefined' &&  countdown_clock !== 'undefined') {
		clearInterval(countdown_clock);
		clearInterval(countup_clock);
	}

	userTime = document.getElementById("time").value;
	countdownTime = userTime;
	countupTime = 0;

	document.getElementById("countdown_startAndPause").src = "img/pause_100.png";
	document.getElementById("countup_startAndPause").src = "img/pause_100.png";

	document.getElementById("countdown_button_startAndPause").disabled = false; // startAndPause button for countdown clock is enabled 
	document.getElementById("countdown_button_reset").disabled = false; // reset button for countdown clock is enabled 
	document.getElementById("countup_button_startAndPause").disabled = false; // startAndPause button for count up clock is enabled 
	document.getElementById("countup_button_reset").disabled = false; // reset button for count up clock is enabled 

	startFunction("initial");
	countdown_clock = setInterval("countdown_updateTime()", 1000); // countdown clock is updated every second
	countup_clock = setInterval("countup_updateTime()", 1000); // count up clock is updated every second
}

/** Days, hours, minutes and seconds are set for both stopwatches
	The type variable can be "countdown", "countup" or "initial". 
*/

function startFunction(type){

	if(type === "countdown" || type == "initial"){
	//For countdown clock
	var countdown_days = Math.floor(countdownTime/86400);
	var countdown_daysRemainder = countdownTime % 86400;
	var countdown_hours = Math.floor((countdown_daysRemainder)/3600);
	var countdown_hoursRemainder = (countdown_daysRemainder) % 3600;
	var countdown_minutes = Math.floor((countdown_hoursRemainder)/60);
	var countdown_minutesRemainder = (countdown_hoursRemainder)%60;
	var countdown_seconds = countdown_minutesRemainder;

	document.getElementById("countdown_days").innerHTML = countdown_days;
	document.getElementById("countdown_hours").innerHTML = countdown_hours;
	document.getElementById("countdown_minutes").innerHTML = countdown_minutes;
	document.getElementById("countdown_seconds").innerHTML = countdown_seconds;
	}
	else if(type === "countup" || type == "initial"){

	//For count up clock
	var countup_days = Math.floor(countupTime/86400);
	var countup_daysRemainder = countupTime % 86400;
	var countup_hours = Math.floor((countup_daysRemainder)/3600);
	var countup_hoursRemainder = (countup_daysRemainder) % 3600;
	var countup_minutes = Math.floor((countup_hoursRemainder)/60);
	var countup_minutesRemainder = (countup_hoursRemainder)%60;
	var countup_seconds = countup_minutesRemainder;

	document.getElementById("countup_days").innerHTML = countup_days;
	document.getElementById("countup_hours").innerHTML = countup_hours;
	document.getElementById("countup_minutes").innerHTML = countup_minutes;
	document.getElementById("countup_seconds").innerHTML = countup_seconds;
	}
}

/** This function is called when reset button for countdown clock is clicked. 
	If the button is enabled it resets the countdown clock to initial time provided by the user and
	enables start/pause button for countdown clock. 
	If it is disabled, user's are notified about it. 
*/
function countdown_reset(){
	if(document.getElementById("countdown_button_reset").disabled == false){
		countdownTime = userTime;
		document.getElementById("countdown_button_startAndPause").disabled = false;
		startFunction("countdown");
	}else{
		window.alert("The Reset Button is disabled!");
	}
}

/** This function is called when reset button for count up clock is clicked. 
	If the button is enabled it resets the count up clock to initial time provided by the user and
	enables start/pause button for count up clock. 
	If it is disabled, user's are notified about it. 
*/
function countup_reset(){
	if(document.getElementById("countup_button_reset").disabled == false){
		countupTime = 0;
		document.getElementById("countup_button_startAndPause").disabled = false;
		startFunction("countup");
	}else{
		window.alert("The Reset Button is disabled!");
	}
}

/**This function is called when start/pause button for countdown clock is clicked.
	If the button is enabled, it stops the timer if paused and it start the timer if started.
	If it is disabled, user's are notified about it. 
*/
function countdown_startPause(){
	if(document.getElementById("countdown_button_startAndPause").disabled == false){
		if(document.getElementById("countdown_startAndPause").src.indexOf("img/start_100.png") >= 0){
			document.getElementById("countdown_startAndPause").src = "img/pause_100.png";
			countdown_clock = setInterval("countdown_updateTime()", 1000);

		}else{
			document.getElementById("countdown_startAndPause").src = "img/start_100.png";
			clearInterval(countdown_clock);
		}
	}else{
		window.alert("The Start/Pause Button is disabled!");
	}
}

/**This function is called when start/pause button for count up clock is clicked.
	If the button is enabled, it stops the timer if paused and it start the timer if started.
	If it is disabled, user's are notified about it. 
*/
function countup_startPause(){
	if(document.getElementById("countup_button_startAndPause").disabled == false){
		if(document.getElementById("countup_startAndPause").src.indexOf("img/start_100.png") >= 0){
			document.getElementById("countup_startAndPause").src = "img/pause_100.png";
			countup_clock = setInterval("countup_updateTime()", 1000);

		}else{
			document.getElementById("countup_startAndPause").src = "img/start_100.png";
			clearInterval(countup_clock);
		}
	}else{
		window.alert("The Start/Pause Button is disabled!");
	}
}

/** This function is called every second. It updates the count down clock by decreasing the time by 1 second every second. 
	When the Countdown reaches its target, which is 0, then the start/pause button for count down clock is disabled and 
	the timer is reset.
*/
function countdown_updateTime(){
	if(countdownTime > 0){
		countdownTime = countdownTime - 1;
		startFunction("countdown");
	}else{
		clearInterval(countdown_clock);
		document.getElementById("countdown_button_startAndPause").disabled = true;
		document.getElementById("countdown_startAndPause").src = "img/start_100.png";
	}
}

/** This function is called every second. It updates the count up clock by increasing the time by 1 second every second. 
	When the Countup reaches its target, which is the time provided by user, then the start/pause button for count up clock
	 is disabled and the timer is reset.
*/
function countup_updateTime(){
	if(countupTime < userTime){
		countupTime = countupTime + 1;
		startFunction("countup");
	}else{
		clearInterval(countup_clock);
		document.getElementById("countup_button_startAndPause").disabled = true;
		document.getElementById("countup_startAndPause").src = "img/start_100.png";
	}
}