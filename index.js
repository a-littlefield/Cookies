$(document).ready(function () {
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
		chocolateCookie();
	});
	chocolateCookie();
	$('#sugar').click(function () {
		if(Cookies.get('sugar')==undefined){
			Cookies.set('sugar', 0);
		}
		Cookies.set('sugar', parseInt(Cookies.get('sugar'))+1);
		sugarCookie();
	});
	sugarCookie();
	$('#lemon').click(function () {
		if(Cookies.get('lemon')==undefined){
			Cookies.set('lemon', 0);
		}
		Cookies.set('lemon', parseInt(Cookies.get('lemon'))+1);
		lemonCookie();
	});
	lemonCookie();
});