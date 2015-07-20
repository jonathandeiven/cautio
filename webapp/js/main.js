window.onload = function () {
	

	var lux = prompt("What is the lux reading?");
	if (lux > 10) {
		$("#offlineimage").css("visibility", "hidden");
	}

	/*
	Parse.initialize(
      	'JfYHydBR8zdHhTE854UErMW1ZfOHQlbZTW2lD4xO',
      	'zow8PB5qZhXxPe4FxGQSZZmRRIrmEE4LgNiA9ms3')

	var SensorTagReading = Parse.Object.extend("SensorTagReading");
	var query = new Parse.Query(SensorTagReading);
	var lightReading;

	var test = query.get("8JOhlYEcM8", {
      	success: function(sensorTagReading) {
        	lightReading = sensorTagReading.get('Light');
      	}, error: function(object, error) {
        	//error
      	}


      console.log(lightReading)
    });*/


	

}

