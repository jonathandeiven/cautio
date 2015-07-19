document.ready = function () {

		CanvasJS.addColorSet("Shades",
                [//colorSet Array

                "#C24642",
                "#369EAD",
                "#92D050"                
                ]);

		// dataPoints
		var LUMdataPoints1 = [];
		var LUMline1 = "x";

		var LUMchart = new CanvasJS.Chart("chart-lum",{
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

		var LUMupdateInterval = 1000;
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
		LUMupdateChart(30);	
		 
		// update chart after specified interval 
		setInterval(function(){LUMupdateChart()}, LUMupdateInterval);
	}