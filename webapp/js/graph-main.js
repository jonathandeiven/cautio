document.ready = function () {
	var lightReading = 0;
	var temperatureReading = 0;
	var accelReadingX = 0;
	var accelReadingY = 0;
	var accelReadingZ = 0;
	var gyroReadingX = 0;
	var gyroReadingY = 0;
	var gyroReadingZ = 0;
	var timer = 0;

	setInterval(function(){ 
		lightReading = parseInt(dataArr[dataArr.length - 1].Light);
		temperatureReading = parseFloat(dataArr[dataArr.length - 1].Temperature);
		accelReadingX = parseFloat(dataArr[dataArr.length - 1].AccelX) * 9.8;
		accelReadingY = parseFloat(dataArr[dataArr.length - 1].AccelY) * 9.8;
		accelReadingZ = parseFloat(dataArr[dataArr.length - 1].AccelZ) * 9.8 + 9.8;
		gyroReadingX = parseInt(dataArr[dataArr.length - 1].GyroX);
		gyroReadingY = parseInt(dataArr[dataArr.length - 1].GyroY);
		gyroReadingZ = parseInt(dataArr[dataArr.length - 1].GyroZ);
		timer = dataArr[dataArr.length - 1].Time - dataArr[0].Time;
	}, 50);

	CanvasJS.addColorSet("Shades",
        [//colorSet Array
        "#f34f4f",
        "#fc9733",
        "#3cf439"                
        ]);
	CanvasJS.addColorSet("LightShades",
        [//colorSet Array
        "#ffee80",
        "#fc9733",
        "#3cf439"                
        ]);
	// How often the graphs update
	var updateInterval = 1000;

	// LUX METER DATA
		// dataPoints
		var LUMdataPoints1 = [];
		var LUMline1 = "x";

		var LUMchart = new CanvasJS.Chart("chart-lum",{
			colorSet: "LightShades",
			backgroundColor: "#0a60b1",
			zoomEnabled: true,
			toolTip: {
			shared: true	
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "#FFF"
			},
			axisX: {
				labelFontColor: "#0a60b1",
				//title: "Time"
				//interval: 1
				gridColor: "#FFF"
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "#FFF",
				gridColor: "#FFF",
				includeZero: false,
				gridDashType: "dot",
				minimum: 0,
				maximum: 600, //FIX WITH ACTUAL MAX VALUE
				stripLines:[
				{
					
					startValue:10,
					endValue:10.1,                
					color:"#d8d8d8"					}
				]
			}, 
			data: [{ 
				// dataSeries1
				type: "spline",
				xValueType: "number",
				name: LUMline1 ,
				dataPoints: LUMdataPoints1
			}],
          legend:{
			dockInsidePlotArea: true,
			horizontalAlign: "right",
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              LUMchart.render();
            }
          }
		});

		//var LUMupdateInterval = 1000;
		// initial value
		var LUMyValue1 = 0; 

		var LUMtime = 0;

		var LUMupdateChart = function (LUMcount) {
			LUMcount = LUMcount || 1;

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < LUMcount; i++) {
				
				// add interval duration to time				
				LUMtime++;

				//LumValueX = dataArr[dataArr.length - 1].Time
				//LUMyValue1 = parseInt(dataArr[dataArr.length - 1].Light);

				// generating random values
				var LUMdeltaY1 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				LUMyValue1 = lightReading;
				
				// pushing the new values
				LUMdataPoints1.push({
					x: timer,
					y: LUMyValue1
				});

				// Delete old data to prevent build up
				if (LUMdataPoints1.length > 30) {
					LUMdataPoints1.shift();
				}

			};

			LUMchart.render();

		};

		// generates first set of dataPoints 
		LUMupdateChart(1);	
		 
		// update chart after specified interval 
		setInterval(function(){LUMupdateChart()}, updateInterval);

	// ACCELEROMETER DATA
		// dataPoints
		var ACCELdataPoints1 = [];
		var ACCELdataPoints2 = [];
		var ACCELdataPoints3 = [];
		var ACCELline1 = "x";
		var ACCELline2 = "y";
		var ACCELline3 = "z";

		var ACCELchart = new CanvasJS.Chart("chart-accel",{
			colorSet: "Shades",
			backgroundColor: "#0a60b1",
			zoomEnabled: true,
			toolTip: {
				shared: true
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "#FFF"
			},
			axisX: {
				labelFontColor: "#0a60b1",
				//title: "Time"
				//interval: 1
				gridColor: "#FFF"
			},
			axisY:{
				//title: "Acceleration",
				includeZero: false,
				gridDashType: "dot",
				minimum: -12,
				maximum: 12, //FIX WITH ACTUAL MAX VALUE	
				labelFontColor: "#FFF",	
				gridColor: "#FFF"		
			}, 
			data: [{ 
				// dataSeries1
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: ACCELline1 ,
				dataPoints: ACCELdataPoints1
			},
			{				
				// dataSeries2
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: ACCELline2 ,
				dataPoints: ACCELdataPoints2
			},
			{				
				// dataSeries3
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: ACCELline3 ,
				dataPoints: ACCELdataPoints3
			}],
          legend:{
          	fontColor: "#f1f1f1",
			dockInsidePlotArea: true,
			horizontalAlign: "right",
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              ACCELchart.render();
            }
          }
		});

		//var ACCELupdateInterval = 1000;
		// initial value
		var ACCELyValue1 = 0; 
		var ACCELyValue2 = 0; 
		var ACCELyValue3 = 0; 

		var ACCELtime = 0;

		var ACCELupdateChart = function (ACCELcount) {
			ACCELcount = ACCELcount || 1;

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < ACCELcount; i++) {
				
				// add interval duration to time				
				ACCELtime++;

				// adding random value and rounding it to two digits. 
				ACCELyValue1 = accelReadingX;
				ACCELyValue2 = accelReadingY;
				ACCELyValue3 = accelReadingZ;
				
				// pushing the new values
				ACCELdataPoints1.push({
					x: timer,
					y: ACCELyValue1
				});
				ACCELdataPoints2.push({
					x: timer,
					y: ACCELyValue2
				});
				ACCELdataPoints3.push({
					x: timer,
					y: ACCELyValue3
				});

				// Delete old data to prevent build up
				if (ACCELdataPoints1.length > 30) {
					ACCELdataPoints1.shift();
				}
				if (ACCELdataPoints2.length > 30) {
					ACCELdataPoints2.shift();
				}
				if (ACCELdataPoints3.length > 30) {
					ACCELdataPoints3.shift();
				}

			};

			ACCELchart.render();

		};

		// generates first set of dataPoints 
		ACCELupdateChart(1);	
		 
		// update chart after specified interval 
		setInterval(function(){ACCELupdateChart()}, updateInterval);
		
	// TEMPERATURE DATA
		// dataPoints
		var TEMPdataPoints1 = [];
		var TEMPline1 = "x";

		var TEMPchart = new CanvasJS.Chart("chart-temp",{
			colorSet: "Shades",
			backgroundColor: "#0a60b1",
			zoomEnabled: true,
			toolTip: {
				shared: true
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "#FFF"
			},
			axisX: {
				labelFontColor: "#0a60b1",
				//title: "Time"
				//interval: 1
				gridColor: "#FFF"
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "#FFF",
				gridColor: "#FFF",
				includeZero: false,
				gridDashType: "dot",
				minimum: -20,
				maximum: 40 //FIX WITH ACTUAL MAX VALUE
			}, 
			data: [{ 
				// dataSeries1
				type: "spline",
				xValueType: "number",
				name: TEMPline1 ,
				dataPoints: TEMPdataPoints1
			}],
          legend:{
			dockInsidePlotArea: true,
			horizontalAlign: "right",
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              TEMPchart.render();
            }
          }
		});

		//var TEMPupdateInterval = 1000;
		// initial value
		var TEMPyValue1 = 0; 

		var TEMPtime = 0;

		var TEMPupdateChart = function (TEMPcount) {
			TEMPcount = TEMPcount || 1;

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < TEMPcount; i++) {
				
				// add interval duration to time				
				TEMPtime++;

				// adding random value and rounding it to two digits. 
				TEMPyValue1 = temperatureReading;
				
				// pushing the new values
				TEMPdataPoints1.push({
					x: timer,
					y: TEMPyValue1
				});

				// Delete old data to prevent build up
				if (TEMPdataPoints1.length > 30) {
					TEMPdataPoints1.shift();
				}

			};

			TEMPchart.render();

		};

		// generates first set of dataPoints 
		TEMPupdateChart(1);	
		 
		// update chart after specified interval 
		setInterval(function(){TEMPupdateChart()}, updateInterval);

	// GYROSCOPE DATA
		// dataPoints
		var GYROdataPoints1 = [];
		var GYROdataPoints2 = [];
		var GYROdataPoints3 = [];
		var GYROline1 = "x";
		var GYROline2 = "y";
		var GYROline3 = "z";

		var GYROchart = new CanvasJS.Chart("chart-gyro",{
			colorSet: "Shades",
			backgroundColor: "#0a60b1",
			zoomEnabled: true,
			toolTip: {
				shared: true
				
			},
			legend: {
				verticalAlign: "top",
				horizontalAlign: "center",
                                fontSize: 14,
				fontWeight: "bold",
				fontFamily: "calibri",
				fontColor: "#FFF"
			},
			axisX: {
				labelFontColor: "#0a60b1",
				//title: "Time"
				//interval: 1
				gridColor: "#FFF"
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "#FFF",
				includeZero: false,
				gridDashType: "dot",
				minimum: -200,
				maximum: 200, //FIX WITH ACTUAL MAX VALUE
				gridColor: "#FFF",
			}, 
			data: [{ 
				// dataSeries1
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: GYROline1 ,
				dataPoints: GYROdataPoints1
			},
			{				
				// dataSeries2
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: GYROline2 ,
				dataPoints: GYROdataPoints2
			},
			{				
				// dataSeries3
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: GYROline3 ,
				dataPoints: GYROdataPoints3
			}],
          legend:{
          	fontColor: "#f1f1f1",
			dockInsidePlotArea: true,
			horizontalAlign: "right",
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              GYROchart.render();
            }
          }
		});

		//var GYROupdateInterval = 1000;
		// initial value
		var GYROyValue1 = 0; 
		var GYROyValue2 = 0; 
		var GYROyValue3 = 0; 

		var GYROtime = 0;

		var GYROupdateChart = function (GYROcount) {
			GYROcount = GYROcount || 1;

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < GYROcount; i++) {
				
				// add interval duration to time				
				GYROtime++;

				// adding random value and rounding it to two digits. 
				GYROyValue1 = gyroReadingX;
				GYROyValue2 = gyroReadingY;
				GYROyValue3 = gyroReadingZ;
				
				// pushing the new values
				GYROdataPoints1.push({
					x: timer,
					y: GYROyValue1
				});
				GYROdataPoints2.push({
					x: timer,
					y: GYROyValue2
				});
				GYROdataPoints3.push({
					x: timer,
					y: GYROyValue3
				});

				// Delete old data to prevent build up
				if (GYROdataPoints1.length > 30) {
					GYROdataPoints1.shift();
				}
				if (GYROdataPoints2.length > 30) {
					GYROdataPoints2.shift();
				}
				if (GYROdataPoints3.length > 30) {
					GYROdataPoints3.shift();
				}

			};

			GYROchart.render();

		};

		// generates first set of dataPoints 
		GYROupdateChart(1);	
		 
		// update chart after specified interval 
		setInterval(function(){GYROupdateChart()}, updateInterval);
}