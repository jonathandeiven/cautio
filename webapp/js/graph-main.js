document.ready = function () {

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
			backgroundColor: "#105ea7",
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
				labelFontColor: "#FFF",
				//title: "Time"
				//interval: 1
				gridColor: "#FFF"
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "FFF",
				gridColor: "FFF",
				includeZero: false,
				gridDashType: "dot",
				minimum: 0,
				maximum: 200 //FIX WITH ACTUAL MAX VALUE
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


				// generating random values
				var LUMdeltaY1 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				LUMyValue1 = Math.round((LUMyValue1 + LUMdeltaY1)*100)/100;
				
				// pushing the new values
				LUMdataPoints1.push({
					x: LUMtime,
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
			backgroundColor: "#105ea7",
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
				//title: "Time"
				//interval: 1
				labelFontColor: "FFF",
				gridColor: "FFF"
			},
			axisY:{
				//title: "Acceleration",
				includeZero: false,
				gridDashType: "dot",
				minimum: -5,
				maximum: 5, //FIX WITH ACTUAL MAX VALUE	
				labelFontColor: "FFF",	
				gridColor: "FFF"		
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


				// generating random values
				var ACCELdeltaY1 = .5 + Math.random() *(-.5-.5);
				var ACCELdeltaY2 = .5 + Math.random() *(-.5-.5);
				var ACCELdeltaY3 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				ACCELyValue1 = Math.round((ACCELyValue1 + ACCELdeltaY1)*100)/100;
				ACCELyValue2 = Math.round((ACCELyValue2 + ACCELdeltaY2)*100)/100;
				ACCELyValue3 = Math.round((ACCELyValue3 + ACCELdeltaY3)*100)/100;
				
				// pushing the new values
				ACCELdataPoints1.push({
					x: ACCELtime,
					y: ACCELyValue1
				});
				ACCELdataPoints2.push({
					x: ACCELtime,
					y: ACCELyValue2
				});
				ACCELdataPoints3.push({
					x: ACCELtime,
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
			backgroundColor: "#105ea7",
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
				fontColor: "FFF"
			},
			axisX: {
				//title: "Time"
				//interval: 1
				labelFontColor: "FFF",
				gridColor: "FFF"
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "FFF",
				gridColor: "FFF",
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


				// generating random values
				var TEMPdeltaY1 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				TEMPyValue1 = Math.round((TEMPyValue1 + TEMPdeltaY1)*100)/100;
				
				// pushing the new values
				TEMPdataPoints1.push({
					x: TEMPtime,
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
			backgroundColor: "#105ea7",
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
				fontColor: "FFF"
			},
			axisX: {
				//title: "Time"
				//interval: 1
				labelFontColor: "FFF",
				gridColor: "FFF",
			},
			axisY:{
				//title: "Acceleration",
				labelFontColor: "FFF",
				includeZero: false,
				gridDashType: "dot",
				minimum: -200,
				maximum: 200, //FIX WITH ACTUAL MAX VALUE
				gridColor: "FFF",
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


				// generating random values
				var GYROdeltaY1 = .5 + Math.random() *(-.5-.5);
				var GYROdeltaY2 = .5 + Math.random() *(-.5-.5);
				var GYROdeltaY3 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				GYROyValue1 = Math.round((GYROyValue1 + GYROdeltaY1)*100)/100;
				GYROyValue2 = Math.round((GYROyValue2 + GYROdeltaY2)*100)/100;
				GYROyValue3 = Math.round((GYROyValue3 + GYROdeltaY3)*100)/100;
				
				// pushing the new values
				GYROdataPoints1.push({
					x: GYROtime,
					y: GYROyValue1
				});
				GYROdataPoints2.push({
					x: GYROtime,
					y: GYROyValue2
				});
				GYROdataPoints3.push({
					x: GYROtime,
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