window.onload = function () {
	

	var lux = prompt("What is the lux reading?");
	if (lux > 10) {
		$("#offlineimage").css("visibility", "hidden");
	}

}