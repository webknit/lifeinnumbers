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

	function init() {
		
		calBirthdate();
		calNumberDays();
		
	}
	
	function calBirthdate() {
		
		var d = birthDate;
	    var curr_date = d.getDate();
	    var curr_month = d.getMonth() + 1; //Months are zero based
	    var curr_year = d.getFullYear();
	    $('.num-birth-date').html(curr_date + "-" + curr_month + "-" + curr_year);
		
	}

	function calNumberDays() {
	
		var oneDay = 24*60*60*1000;
		var firstDate = new Date();
		var secondDate = birthDate;
		
		var diffDays = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
		
		$('.num-days-alive').html(diffDays);
	
	}


	init();
};

// ON DOC READY
$(function()
{	
	new Base.LifeNumbers();
	
});

