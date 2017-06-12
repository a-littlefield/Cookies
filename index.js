$(document).ready(function () {
	let update = function(){ 
		let chocolateCount = parseInt(Cookies.get('chocolate')) ;
		let sugarCount = parseInt(Cookies.get('sugar'));
		let lemonCount = parseInt(Cookies.get('lemon'));
		$('#total').html(chocolateCount + sugarCount + lemonCount);
		if(chocolateCount + sugarCount + lemonCount === 25){
			alert('Alright thats enough, you can stop now')
		}else if(chocolateCount + sugarCount + lemonCount === 50){
			alert('Stop or I\'m gonna puke!')
		}else if (chocolateCount + sugarCount + lemonCount === 100){
			$('body').css("background", "url(http://www.signspotting.com/wp-content/main/2011_10/7397%201500.jpg)");
			$('#image').remove();
		};
	};	
	$('#delete').click(function () {
		Cookies.set('chocolate', 0);
		Cookies.set('sugar', 0);
		Cookies.set('lemon', 0);
		update();
		chocolateCookie();
		sugarCookie();
		lemonCookie();
	});
	function chocolateCookie() {
		$('#chocDiv').html('<h3>Chcolate Chip</h3> Cookie Count: ' + Cookies.get('chocolate'));
	};
	function sugarCookie() {
		$('#sugDiv').html('<h3>Sugar</h3> Cookie Count: ' + Cookies.get('sugar'));
	};
	function lemonCookie() {
		$('#lemDiv').html('<h3>Lemon</h3> Cookie Count: ' + Cookies.get('lemon'));
	}

	$('#chocolate').click(function () {
		if(Cookies.get('chocolate')==undefined){
			Cookies.set('chocolate', 0);
		}
		Cookies.set('chocolate', parseInt(Cookies.get('chocolate'))+1);
		update();
		chocolateCookie();
	});
	chocolateCookie();
	$('#sugar').click(function () {
		if(Cookies.get('sugar')==undefined){
			Cookies.set('sugar', 0);
		}
		Cookies.set('sugar', parseInt(Cookies.get('sugar'))+1);
		update();
		sugarCookie();
	});
	sugarCookie();
	$('#lemon').click(function () {
		if(Cookies.get('lemon')==undefined){
			Cookies.set('lemon', 0);
		}
		update();
		Cookies.set('lemon', parseInt(Cookies.get('lemon'))+1);
		lemonCookie();
	});
	lemonCookie();
	update();

});