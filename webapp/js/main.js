var dataArr = new Array();

window.onload = function () {
	Parse.initialize(
      	'JfYHydBR8zdHhTE854UErMW1ZfOHQlbZTW2lD4xO',
      	'zow8PB5qZhXxPe4FxGQSZZmRRIrmEE4LgNiA9ms3')

	setInterval(function(){ 
		getLatestObj();
		setTimeout(function () {
			var light = parseInt(dataArr[dataArr.length - 1].Light);
			var btnPush = dataArr[dataArr.length - 1].Btn;
			console.log(light)
			checkTrigger(light, btnPush);
    	}, 100);
	}, 100);

}

function getLatestObj(){
	var SensorTagReading = Parse.Object.extend("SensorTagReading");
	var query = new Parse.Query(SensorTagReading);
	
	query.descending("updatedAt");
	query.limit(1);
	var latestSessionID;

	query.find({
            success: function (results) {
            	dataArr.push(results[0].attributes);
            },
            error: function (error) {
                ("Error: " + error.code + " " + error.message);
            }
    });
}

function checkTrigger(light, btnPush){
	if (light > 10) {
		$("#offlineimage").css("visibility", "hidden");
		$(".navbar").css("border-bottom-color", "#4d8cc5");
		$("#blankaccel").css("visibility", "hidden");
		$("#blankgyro").css("visibility", "hidden");
		$("#blanklum").css("visibility", "hidden");
		$("#blanktemp").css("visibility", "hidden");
	}

	if (light <= 10 || btnPush) {
		$("#offlineimage").css("visibility", "visible");
		$(".navbar").css("border-bottom-color", "#da1b1b");
		$("#blankaccel").css("visibility", "visible");
		$("#blankgyro").css("visibility", "visible");
		$("#blanklum").css("visibility", "visible");
		$("#blanktemp").css("visibility", "visible");
	}
}

function getCurrentLight(){
	var light = parseInt(dataArr[dataArr.length - 1].Light)
	checkTrigger(light);
}

