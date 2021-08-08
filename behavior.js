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
			document.getElementById("img_"+imageSet+"-"+oldMonth).style.display = "none";
			document.getElementById("img_"+imageSet+"-"+newMonth).style.display = "inline";
		});
	}

	var histograms = document.getElementsByClassName("histograms");
	for (let i = 0; i < histograms.length; i++)	{
		histograms[i].addEventListener("click", function () {
			var elemID = this.id;
			var imageSet = elemID.substr(4,1);
			if (allMonths[imageSet]) {
				allMonths[imageSet] = false;
				this.style.display = "none";
				var month = monthNums[imageSet - 1];
				document.getElementById("img_" + imageSet + "-" + month).style.display = "inline";
				document.getElementById("prev-arrow-" + imageSet).style.display = "inline";
				document.getElementById("next-arrow-" + imageSet).style.display = "inline";
			} else {
				allMonths[imageSet] = true;
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

});