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
		var d = birthDate;
	    var curr_date = d.getDate();
	    var curr_month = d.getMonth() + 1; //Months are zero based
	    var curr_year = d.getFullYear();
	    
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
		var monthName = monthNames[d.getMonth()];
		
		// Function to return th, nd, rd etc
		function dateLetterFunction(d) {
		  if(d>3 && d<21) return 'th';
		  switch (d % 10) {
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
	
		var oneDay = 24*60*60*1000;
		var firstDate = today;
		var secondDate = birthDate;
		
		daysAlive = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
		
		$('.num-days-alive').html(daysAlive);
	
	}
	
	function calNumberMonths() {
	
		var date1 = birthDate;
		var date2 = today;
		
		var year1 = date1.getFullYear();
		var year2 = date2.getFullYear();
		
		var month1 = date1.getMonth();
		var month2 = date2.getMonth();
		
		if(month1===0) {
		
		  month1++;
		  month2++;
		  
		}
		
		monthsAlive = (year2-year1)*12+(month2-month1)+1;
		
		$('.num-months-alive').html(monthsAlive);
	
	}
	
	function calNumberWeeks() {
	
		var oneDay = 24*60*60*1000;
		var firstDate = today;
		var secondDate = birthDate;
		
		weeksAlive = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
		
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
	
	function calBushTeeth() {
	
		var brushes = daysAlive * 2;
		var brushesWithCommas = addCommas(brushes);
		
		$('.num-brusheteeth').html(brushesWithCommas);
		
		//1 g avergae brush size
		var kgtoothpaste = brushes / 1000;
		var kgtoothpaste = Math.round(kgtoothpaste);
		
		$('.num-gramtoothpaste').html(kgtoothpaste)
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
		
		$('.num-toilet').html(toiletVisit);
		$('.num-toiletpint').html(toiletPint);
		
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

