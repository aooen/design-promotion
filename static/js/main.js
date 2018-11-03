$(document).ready(function () {
	setInterval(function () {
		$('#banner-container').css('left', '-=100%');
		if ($('#banner-container').css('left') == "-300%") {
			$('#banner-container').css('left', '0');
		}
	}, 500);
});