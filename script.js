/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

Base.LifeNumbers = function() {	
	
	var birthDate = new Date(1986,7,17);
	var today = new Date();
	var oneDay = 24*60*60*1000;
	
	var minsAlive;
	var hoursAlive;
	var daysAlive;
	var weeksAlive;
	var monthsAlive;

	function init() {
		
		calBirthdate();
		calAge();
		calNumberMins()
		calNumberDays();
		calNumberWeeks()
		calNumberMonths();
		calNumberHeartBeats();
		calNumberBreaths();
		calBushTeeth();
		calNumberPints();
		calNumberToilet();
		calNumberFood();
		calNumberWalk();
		
	}
	
	function calBirthdate() {
		
		// Birthdate info
	    var curr_date = birthDate.getDate();
	    var curr_month = birthDate.getMonth() + 1; //Months are zero based
	    var curr_year = birthDate.getFullYear();
	    
	    // Creat month names array
	    // Get the month names
	    var monthNames = [ 
	    	"January", 
	    	"February", 
	    	"March", 
	    	"April", 
	    	"May", 
	    	"June", 
	    	"July", 
	    	"August", 
	    	"September", 
	    	"October", 
	    	"November", 
	    	"December"
	    ];
		var monthName = monthNames[birthDate.getMonth()];
		
		// Function to return th, nd, rd etc
		function dateLetterFunction(date) {
		  if(date>3 && date<21) return 'th';
		  switch (date % 10) {
		        case 1:  return "st";
		        case 2:  return "nd";
		        case 3:  return "rd";
		        default: return "th";
		    }
		}
		
		// Get the letter
		var dateLetter = dateLetterFunction(curr_date)
		
		// Output birthdate
		$('.num-birth-date').html(curr_date + dateLetter + " " + monthName + " " + curr_year);
		
	}
	
	// Help from http://stackoverflow.com/questions/7833709/calculating-age-in-months-and-days
	function calAge() {
		
    	function getAge(fromdate){
    	
		    var todate = today;
		
		    var age= [];
		    var fromdate= new Date(fromdate);
		    var y= [todate.getFullYear(), fromdate.getFullYear()];
		    var ydiff= y[0]-y[1];
		    var m= [todate.getMonth(), fromdate.getMonth()];
		    var mdiff= m[0]-m[1];
		    var d= [todate.getDate(), fromdate.getDate()];
		    var ddiff= d[0]-d[1];
		
		    if(mdiff < 0 || (mdiff=== 0 && ddiff<0))--ydiff;
		    if(mdiff<0) mdiff+= 12;
		    if(ddiff<0){
		        fromdate.setMonth(m[1]+1, 0);
		        ddiff= fromdate.getDate()-d[1]+d[0];
		        --mdiff;
		    }
		    if(ydiff> 0) age.push(ydiff+ ' year'+(ydiff> 1? 's ':' '));
		    if(mdiff> 0) age.push(mdiff+ ' month'+(mdiff> 1? 's':''));
		    if(ddiff> 0) age.push(ddiff+ ' day'+(ddiff> 1? 's':''));
		    if(age.length>1) age.splice(age.length-1,0,' and ');    
		    return age.join('');
		    
		}
		
		var ageNum = getAge(birthDate);
    	
    	// Output birthdate
		$('.num-age').html(ageNum);
	
	}

	function calNumberMins() {
	
		var difference = today.getTime() - birthDate.getTime();
		minsAlive = Math.round(difference / 60000);
	
	}


	function calNumberDays() {
	
		daysAlive = Math.round((today.getTime() - birthDate.getTime())/(oneDay));
		
		$('.num-days-alive').html(daysAlive);
	
	}
	
	function calNumberMonths() {
	
		var year1 = birthDate.getFullYear();
		var year2 = today.getFullYear();
		
		var month1 = birthDate.getMonth();
		var month2 = today.getMonth();
		
		if(month1 === 0) {
		
		  month1++;
		  month2++;
		  
		}
		
		monthsAlive = (year2 - year1) * 12 + (month2 - month1) + 1;
		
		$('.num-months-alive').html(monthsAlive);
	
	}
	
	function calNumberWeeks() {
	
		weeksAlive = Math.round((today.getTime() - birthDate.getTime())/(oneDay));
		
		weeksAlive = Math.floor(weeksAlive / 7);

		$('.num-weeks-alive').html(weeksAlive);
	
	}
	
	function calNumberHeartBeats() {
	
		var beats = minsAlive * 72;
		var beats = addCommas(beats);
		
		$('.num-heartbeats').html(beats);
		
	}

	function calNumberBreaths() {
	
		var breaths = minsAlive * 14;
		var breaths = addCommas(breaths);
		
		$('.num-breaths').html(breaths);
		
	}

	function calNumberWalk() {
	
		// That means it takes just over 2,000 steps to walk one mile, and 10,000 steps is close to 5 miles.
		// 7192 average male steps
		var numSteps = daysAlive * 7192;
		var mileSteps = numSteps / 2000;
		var mileSteps = Math.round(mileSteps);
		var mileSteps = addCommas(mileSteps);
		
		$('.num-step').html(mileSteps);
		
	}
	
	function calNumberFood() {
	
		// a person to eat per day is 10 to 20 percent of his body weight == 7.5kg
		var gramsfood = daysAlive * 7.5;
		var gramsfood = addCommas(gramsfood);
		
		$('.num-food').html(gramsfood);
		
	}
	
	function calNumberPints() {
	
		// 18 x 52 == 936
		var legalAge = weeksAlive - 936;
		var pints = legalAge * 8;
		var pints = addCommas(pints);
		
		$('.num-pints').html(pints);
		
	}
	
	function calNumberToilet() {
	
		var toiletVisit = daysAlive * 7;
		var toiletPint = toiletVisit * 0.4;
		var toiletPint = Math.floor(toiletPint);
		
		$('.num-toilet').html(toiletVisit);
		$('.num-toiletpint').html(toiletPint);
		
	}

	function calBushTeeth() {
	
		var brushes = daysAlive * 2;
		var brushesWithCommas = addCommas(brushes);
		
		$('.num-brusheteeth').html(brushesWithCommas);
		
		//1 g avergae brush size
		var kgtoothpaste = brushes / 1000;
		var kgtoothpaste = Math.round(kgtoothpaste);
		
		$('.num-gramtoothpaste').html(kgtoothpaste)
	}
	
	// Function to add commas to the numbers
	function addCommas(num) {
	
		return num.toLocaleString('en')
	
	}

	init();
};

// ON DOC READY
$(function()
{	
	new Base.LifeNumbers();
	
});

