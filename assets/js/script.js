/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
	
	If you're not using Grunt, or want to know how to use grunt, then have a read of the following post for more info.
	http://shaneprendergast.co.uk/css/a-guide-to-base/
*/

// JS EXAMPLE

var Base = Base || {};

Base.Masonry = function() {

	$(window).load(function() {
      
      	var container = document.querySelector('.masonry-active');
	    var msnry = new Masonry( container, {
	      // options
	      itemSelector: '.masonry-item'
	    });
      
	});
    
};

Base.InfoBox = function() {
	
	var infoBox = $('.information-box');
	var infoBoxContent = $('.information-box__content-p');
	var infoBtn = $('.facts-section__fact .fa-info-circle');

	function init() {

		$('.no-js-box').remove();
		infoBtn.click(showInfo);
		infoBox.click(hideInfo);

	}
	
	function showInfo() {
	
		var info = $(this).data('info');
		infoBoxContent.empty();
		infoBoxContent.append(info);
		infoBox.fadeIn();
	
	}
	
	function hideInfo() {
	
		infoBox.fadeOut();
	
	}

	init();
	
};

Base.submitInfo = function() {
	
	var formSubmit = $('.sign-in-section__submit');
	var nameInput = $('.sign-in-section__name');
	var nameInputVal;

	function init() {

		formSubmit.click(checkName);

	}

	function checkName() {
	
		nameInputVal = nameInput.val();
		var nameInputValTrim = $.trim(nameInputVal);
		
		if(nameInputValTrim < 1) {
		
			$('.error-msg').empty();
            nameInput.addClass('error').next('.error-msg').append("Name not entered incorrect");
            
      	}
      	
      	else {
      		
      		nameInput.removeClass('error').next('.error-msg').hide();
      		checkDate();
      		
      	}

	}
	
	function checkDate() {
	
		var dobDay = $('.dob-day');
		var dobDayValue = $('.dob-day').val();
		var dobMonthValue = $('.dob-month').val();
		var dobYearValue = $('.dob-year').val();
		var dobSelects = $('.dob-select');
		var DOBValue;
		
		console.log('DOB ' + dobDayValue);
		
		if (dobDayValue == 0) {
   			
   			$('.error-msg').empty();
   			dobDay.addClass('error').next('.error-msg').append("Name not entered incorrect");
   			
		}
		
		if (dobDayValue == 0 || dobMonthValue == 0 || dobYearValue == 0) {
   			
   			$('.error-msg').empty();
   			dobSelects.addClass('error').next('.error-msg').append("Date not entered incorrect");
   			
		}
		
		else {
		
			DOBValue = dobYearValue + "/" + dobMonthValue + "/" + dobDayValue;
			new Base.LifeNumbers(nameInputVal, DOBValue);
			$('body').removeClass('noscroll');
		
		}
	
	}

	init();
	
};

Base.LifeNumbers = function(name, DOB) {	

	$('.sign-in-section').fadeOut();
	$('.username').text(name);
	
	var birthDate = new Date(DOB);
	var today = new Date();
	var oneDay = 24*60*60*1000;
	
	var minsAlive;
	var hoursAlive;
	var daysAlive;
	var weeksAlive;
	var monthsAlive;
	var yearsAlive;

	function init() {
		
		calBirthdate();
		calAge();
		calNumberMins()
		calNumberDays();
		calNumberWeeks()
		calNumberMonths();
		calNumberHeartBeats();
		calNumberBreaths();
		calNumberBlink();
		calNumberSleep();
		calNumberWalk();
		calNumberFood();
		calNumberPints();
		calNumberToilet();
		calBushTeeth();
		calNumKiss();
		calNumHair();
		calNumQueue();
		calNumWords();
		calPennyADay();
		calFiftyADay();
		calTenAWeek();
		calHundredMonth();
		calNumFart();
		calNumShoes();
		calNumYearsLeft();
		
		var container = document.querySelector('.masonry-active');
	    var msnry = new Masonry( container, {
	      // options
	      itemSelector: '.masonry-item'
	    });
		
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
		yearsAlive = Math.round(monthsAlive / 12);
		
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
	
		// Going off 14 breaths a min
		var breaths = minsAlive * 14;
		var breaths = addCommas(breaths);
		
		$('.num-breaths').html(breaths);
		
	}

	function calNumberBlink() {

		var numBlinksPerDay = 10;
	
		var blinks = minsAlive * numBlinksPerDay;
		var blinksComma = addCommas(blinks);

		// 480 mins in 8 hours
		var numMinAsleep = daysAlive * 480;
		var numMinAsleep = numMinAsleep * numBlinksPerDay;
		var numMinAsleep = blinks - numMinAsleep;
		var numMinAsleepComma = addCommas(numMinAsleep);
		
		$('.num-blink').html(blinksComma);
		$('.num-blink-sleep').html(numMinAsleepComma);
		
	}

	function calNumberSleep() {

		var numHoursSleepPerDay = 8;
	
		var numHoursSleep = daysAlive * numHoursSleepPerDay;
		var numDaysSleep = numHoursSleep / 24;
		var numDaysSleep = Math.floor(numDaysSleep);
		var numYearsSleep = numDaysSleep / 365;
		var numYearsSleep = Math.floor(numYearsSleep);
		
		$('.num-time-asleep').html(numDaysSleep);
		$('.num-years-asleep').html(numYearsSleep)
		
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
		var pintsComma = addCommas(pints);
		
		if (pints < 0) {
			
			$('.num-pints').html(0);
			
		}
		
		else {
		
			$('.num-pints').html(pintsComma);
		
		}	
		
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

	function calNumKiss() {

		// 16 x 52 == 832
		var legalAge = weeksAlive - 832;
	
		var kisses = weeksAlive * 1;
		var kisses = kisses - 832;
		var kissesWithCommas = addCommas(kisses);
		
		if (kisses < 0) {
			
			$('.num-kiss').html(0);
			
		}
		
		else {
		
			$('.num-kiss').html(kissesWithCommas);
		
		}

	}
	
	function calNumHair() {

		// 6 inches hair per year
		var inchesOfHair = yearsAlive * 6;
		var inchesOfHair = addCommas(inchesOfHair);
		
		$('.num-hair').html(inchesOfHair);

	}
	
	function calNumQueue() {

		// 108 hours in queue per year
		var hoursInQueue = yearsAlive * 108;
		var hoursInQueue = hoursInQueue / 24;
		var hoursInQueue = addCommas(hoursInQueue);
		
		$('.num-queue').html(hoursInQueue);

	}
	
	function calNumWords() {

		// 7k words per day
		// Start talking when one.
		var startAtOne = daysAlive - 365
		var numWords = startAtOne * 7000;
		var numWords = addCommas(numWords);
		
		$('.num-words').html(numWords);

	}
	
	function calPennyADay() {

		var pennyDay = daysAlive;
		var pennyDay = pennyDay / 100;
		var pennyDay = addCommas(pennyDay);
		
		$('.num-pennyday').html(pennyDay);
		
		var yearlySaving = 3.65;
		var yearlyInterest = 1.05;
		var years = yearsAlive;
		var runningTotal = 0;
		
		for (var i = 1; i <= years; i++) {
		
			// Add the 365p to each year
			runningTotal = (runningTotal + yearlySaving);
			
			// ...and add the 5% to to the amount
			runningTotal = runningTotal * yearlyInterest;
			
		}
		
		var daysLeftOver = yearsAlive * 365;
		var dayLeftOverSum = daysAlive - daysLeftOver;
		var dayLeftOverSum = dayLeftOverSum / 100;
		var totalAmount = runningTotal + dayLeftOverSum;
		var totalAmount = Math.round(totalAmount);
		var totalAmount = addCommas(totalAmount);
		
		$('.num-pennyday-interest').html(totalAmount);

	}
	
	function calFiftyADay() {

		var fiftyDay = daysAlive * 0.50;
		var fiftyDay = Math.round(fiftyDay);
		var fiftyDay = addCommas(fiftyDay);
		
		$('.num-fiftyday').html(fiftyDay);
		
		var yearlySaving = 182.5;
		var yearlyInterest = 1.05;
		var years = yearsAlive;
		var runningTotal = 0;
		
		for (var i = 1; i <= years; i++) {
		
			// Add the 365p to each year
			runningTotal = (runningTotal + yearlySaving);
			
			// ...and add the 5% to to the amount
			runningTotal = runningTotal * yearlyInterest;
			
		}
		
		var daysLeftOver = yearsAlive * 365;
		var dayLeftOverSum = daysAlive - daysLeftOver;
		var dayLeftOverSum = dayLeftOverSum * 0.50;
		var totalAmount = runningTotal + dayLeftOverSum;
		var totalAmount = Math.round(runningTotal);
		var totalAmount = addCommas(totalAmount);
		
		$('.num-fiftyday-interest').html(totalAmount);

	}
	
	function calTenAWeek() {

		var tenWeek = weeksAlive * 10;
		var tenWeek = addCommas(tenWeek);
		
		$('.num-tenweek').html(tenWeek);
		
		var yearlySaving = 520;
		var yearlyInterest = 1.05;
		var years = yearsAlive;
		var runningTotal = 0;
		
		for (var i = 1; i <= years; i++) {
		
			// Add the 365p to each year
			runningTotal = (runningTotal + yearlySaving);
			
			// ...and add the 5% to to the amount
			runningTotal = runningTotal * yearlyInterest;
			
		}
		
		var daysLeftOver = yearsAlive * 365;
		var dayLeftOverSum = daysAlive - daysLeftOver;
		var dayLeftOverSum = dayLeftOverSum / 7;
		var dayLeftOverSum = dayLeftOverSum * 10;
		var totalAmount = runningTotal + dayLeftOverSum;
		var totalAmount = Math.round(totalAmount);
		var totalAmount = addCommas(totalAmount);
		
		$('.num-tenweek-interest').html(totalAmount);

	}
	
	function calHundredMonth() {

		var hundredMonth = monthsAlive * 100;
		var hundredMonth = addCommas(hundredMonth);
		
		$('.num-hundredmonth').html(hundredMonth);
		
		var yearlySaving = 1200;
		var yearlyInterest = 1.05;
		var years = yearsAlive;
		var runningTotal = 0;
		
		for (var i = 1; i <= years; i++) {
		
			// Add the 365p to each year
			runningTotal = (runningTotal + yearlySaving);
			
			// ...and add the 5% to to the amount
			runningTotal = runningTotal * yearlyInterest;
			
		}
		
		var monthsLeftOver = yearsAlive * 12;
		var monthsLeftOverSum = monthsAlive - monthsLeftOver;
		var monthsLeftOverSum = monthsLeftOverSum * 100;
		var totalAmount = runningTotal + monthsLeftOverSum;
		var totalAmount = Math.round(totalAmount);
		var totalAmount = addCommas(totalAmount);
		
		$('.num-hundredmonth-interest').html(totalAmount);

	}
	
	function calNumFart() {

		var farty = daysAlive * 14;
		var farty = addCommas(farty);
		
		$('.num-fart').html(farty);

	}

	function calNumShoes() {

		// Based on 5 shoes per year
		var numShoes = yearsAlive * 5;
		var numShoes = addCommas(numShoes);
		
		$('.num-shoes').html(numShoes);

	}
	
	function calNumYearsLeft() {

		// Based on 81 being life expectancy
		var yearsLeft = 81 - yearsAlive;
		
		$('.num-years-left').html(yearsLeft);

	}
	
	// Function to add commas to the numbers
	function addCommas(num) {
	
		return num.toLocaleString('en')
	
	}

	init();
};


// ON DOC READY
$(function() {
	
	new Base.submitInfo();
	new Base.InfoBox();
	
});

