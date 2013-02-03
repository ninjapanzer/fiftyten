// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var current_seconds = 0;

String.prototype.toHHMMSS = function () {
    sec_numb    = parseInt(this);
    var hours   = Math.floor(sec_numb / 3600);
    var minutes = Math.floor((sec_numb - (hours * 3600)) / 60);
    var seconds = sec_numb - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}
//Initializer
$(function(){
	document.getElementById("clock").innerHTML = (current_seconds+"").toHHMMSS();
});

//Clock Buttons
$(function(){
	//Start Button for Clock
	$("#start_clock").click(function(){
		var clock_control = displayClock("clock", current_seconds);
		
		//Stop Button for Clock
		$("#stop_clock").click(function(){
			window.clearInterval(clock_control);
			//Unbind when stop is hit
			$("#stop_clock").unbind('click');
		});
		
		//Reset Button for Clock
		$("#clear_clock").click(function(){
			//call stop to kill the timer and unbind the event
			$("#stop_clock").click();
			current_seconds = 0;
			//reset display
			document.getElementById("clock").innerHTML = (current_seconds+"").toHHMMSS();
			//unbind own event
			$("#clear_clock").unbind('click');
		});
	});
});

function displayClock(id, start_time){
	var elapsed = typeof start_time !== 'undefined' ? start_time : 0;
	var start = new Date().getTime() - (parseInt(elapsed)*1000);
	var clock = window.setInterval(function(){
    var time = (new Date().getTime() - start);
    elapsed = Math.floor(time / 1000);
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
    current_seconds = elapsed.split(".")[0];
    document.getElementById(id).innerHTML = current_seconds.toHHMMSS();
	}, 100);
	return clock;
}

function makeClock(){
	var minutes;
	var seconds;

}