document.ready = function () {

		CanvasJS.addColorSet("Shades",
                [//colorSet Array

                "#C24642",
                "#369EAD",
                "#92D050"                
                ]);

		// dataPoints
		var dataPoints1 = [];
		var dataPoints2 = [];
		var dataPoints3 = [];
		var line1 = "x";
		var line2 = "y";
		var line3 = "z";

		var chart = new CanvasJS.Chart("chart-accel",{
			colorSet: "Shades",
			backgroundColor: "#f1f1f1",
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
				fontColor: "dimGrey"
			},
			axisX: {
				//title: "Time"
			},
			axisY:{
				//title: "Acceleration",
				includeZero: false,
				gridDashType: "dot" 
			}, 
			data: [{ 
				// dataSeries1
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: line1 ,
				dataPoints: dataPoints1
			},
			{				
				// dataSeries2
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: line2 ,
				dataPoints: dataPoints2
			},
			{				
				// dataSeries3
				type: "line",
				xValueType: "number",
				showInLegend: true,
				name: line3 ,
				dataPoints: dataPoints3
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
              chart.render();
            }
          }
		});

		var updateInterval = 1000;
		// initial value
		var yValue1 = 0; 
		var yValue2 = 0;
		var yValue3 = 0;

		var time = 0;
		/*time.setHours(9);
		time.setMinutes(30);
		time.setSeconds(00);
		time.setMilliseconds(00);*/
		// starting at 9.30 am

		var updateChart = function (count) {
			count = count || 1;

			// count is number of times loop runs to generate random dataPoints. 

			for (var i = 0; i < count; i++) {
				
				// add interval duration to time				
				time++;


				// generating random values
				var deltaY1 = .5 + Math.random() *(-.5-.5);
				var deltaY2 = .5 + Math.random() *(-.5-.5);
				var deltaY3 = .5 + Math.random() *(-.5-.5);

				// adding random value and rounding it to two digits. 
				yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
				yValue2 = Math.round((yValue2 + deltaY2)*100)/100;
				yValue3 = Math.round((yValue3 + deltaY3)*100)/100;
				
				// pushing the new values
				dataPoints1.push({
					x: time,
					y: yValue1
				});
				dataPoints2.push({
					x: time,
					y: yValue2
				});
				dataPoints3.push({
					x: time,
					y: yValue3
				});

				// Delete old data to prevent build up
				if (dataPoints1.length > 30) {
					dataPoints1.shift();
				}
				if (dataPoints2.length > 30) {
					dataPoints2.shift();
				}
				if (dataPoints3.length > 30) {
					dataPoints3.shift();
				}

			};

			
			
			
			/*// updating legend text with  updated with y Value 
			chart.options.data[0].legendText = line1 + "  $" + yValue1;
			chart.options.data[1].legendText = line2 + "  $" + yValue2; 
			chart.options.data[2].legendText = line3 + "  $" + yValue3; */

			chart.render();

		};

		// generates first set of dataPoints 
		updateChart(30);	
		 
		// update chart after specified interval 
		setInterval(function(){updateChart()}, updateInterval);
	}