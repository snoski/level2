document.addEventListener("DOMContentLoaded", function(event) {
	
	//REQUIREMENT FOR HOLBERTON
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
		if (thumbnailElement.className == "") {
			thumbnailElement.className = "small";
		} else {
			thumbnailElement.className = "";
		}
	});

	//MY CODE
	//SETTING INITIAL VALUES
	var monthNums = [9,9,9,9];
	var allMonths = [false,false,false,false];

	//CODE FOR ITERATING THROUGH AND RESIZING HISTOGRAMS

	var arrows = document.getElementsByClassName("arrows");
	for (let i = 0; i < arrows.length; i++)	{
		arrows[i].addEventListener("click", function () {
			var elemID = this.id;
			var incr = 0;
			var sign = elemID.substr(0,4);
			if (sign === 'prev') {
				incr = -1;
			} else {
				incr = 1;
			}
			var imageSet = elemID.substr(elemID.length -1,1);
			var oldMonth = monthNums[imageSet - 1];
			var newMonth = incrMonth(incr,imageSet);
			console.log("old month = ",oldMonth);
			console.log("new month = ",newMonth);
			document.getElementById("img_"+imageSet+"-"+oldMonth).style.display = "none";
			document.getElementById("img_"+imageSet+"-"+newMonth).style.display = "inline";
		});
	}

	var histograms = document.getElementsByClassName("histograms");
	for (let i = 0; i < histograms.length; i++)	{
		histograms[i].addEventListener("click", function () {
			var elemID = this.id;
			var imageSet = elemID.substr(4,1);
			if (allMonths[imageSet - 1]) {
				allMonths[imageSet - 1] = false;
				this.style.display = "none";
				var month = monthNums[imageSet - 1];
				document.getElementById("img_" + imageSet + "-" + month).style.display = "inline";
				document.getElementById("prev-arrow-" + imageSet).style.display = "inline";
				document.getElementById("next-arrow-" + imageSet).style.display = "inline";
			} else {
				allMonths[imageSet - 1] = true;
				this.style.display = "none";
				document.getElementById("img_" + imageSet + "-all").style.display = "inline";
				document.getElementById("prev-arrow-" + imageSet).style.display = "none";
				document.getElementById("next-arrow-" + imageSet).style.display = "none";
			}
		});
	}


	function incrMonth(incr,imageSet) {
		monthNums[imageSet - 1] += incr;
		if (monthNums[imageSet - 1] === 13) {
				monthNums[imageSet - 1] = 1;
		}
		if (monthNums[imageSet - 1] === 0) {
				monthNums[imageSet - 1] = 12;
		}
		return monthNums[imageSet - 1];
	}

	//CODE FOR CUMULATIVE PERCENTAGE CHART
	var cumul = document.getElementById("cumul-1");
	cumul.addEventListener("click", function() {
		this.style.display = "none";
		document.getElementById("cumul-2").style.display = "inline";
		document.getElementById("admonishment").style.display = "none";
		document.getElementById("cumul-p").style.display = "block";
	});

	//CODE FOR MEAN TOGGLE
	var cumul = document.getElementById("mean-toggle");
	cumul.addEventListener("click", function() {	
		if (this.innerHTML === 'Toggle Mean On') {
			this.innerHTML = 'Toggle Mean Off';
			oldImageSet = 3;
			imageSet = 4;					
			monthNums[3] = monthNums[2];
			allMonths[3] = allMonths[2];
		} else {
			this.innerHTML = 'Toggle Mean On';
			oldImageSet = 4;
			imageSet = 3;				
			monthNums[2] = monthNums[3];
			allMonths[2] = allMonths[3];			
		}
		var month = monthNums[imageSet - 1];
		console.log("allMonths",allMonths[imageSet - 1]);
		if (allMonths[imageSet - 1]) {
			document.getElementById("img_" + oldImageSet + "-all").style.display = "none";
			document.getElementById("img_" + imageSet + "-all").style.display = "inline";
			document.getElementById("prev-arrow-" + imageSet).style.display = "none";
			document.getElementById("next-arrow-" + imageSet).style.display = "none";
		} else {
			document.getElementById("img_" + oldImageSet + "-" + month).style.display = "none";
			document.getElementById("prev-arrow-" + oldImageSet).style.display = "none";
			document.getElementById("next-arrow-" + oldImageSet).style.display = "none";
			document.getElementById("img_" + imageSet + "-" + month).style.display = "inline";
			document.getElementById("prev-arrow-" + imageSet).style.display = "inline";
			document.getElementById("next-arrow-" + imageSet).style.display = "inline";
		}
	});

	//CODE FOR BETTERGRAPHS
	var quartile = document.getElementById("quartile");
	quartile.addEventListener("click", function() {	
		document.getElementById("bettergraph-1").style.display = "inline";
		document.getElementById("bettergraph-2").style.display = "none";
		document.getElementById("bettergraph-3").style.display = "none";
	});
	var quartilesd = document.getElementById("quartilesd");
	quartilesd.addEventListener("click", function() {	
		document.getElementById("bettergraph-1").style.display = "none";
		document.getElementById("bettergraph-2").style.display = "inline";
		document.getElementById("bettergraph-3").style.display = "none";
	});
	var quartile2sd = document.getElementById("quartile2sd");
	quartile2sd.addEventListener("click", function() {	
		document.getElementById("bettergraph-1").style.display = "none";
		document.getElementById("bettergraph-2").style.display = "none";
		document.getElementById("bettergraph-3").style.display = "inline";
	});
});