window.addEventListener("load", function() {
	var trigger_dropdown = document.querySelectorAll(".trigger-dropdown"),
	trigger_dropdown_hover = document.querySelectorAll(".trigger-dropdown-hover"),
	mssearch = document.getElementById("mssearch");

	for (var i = 0; i < trigger_dropdown.length; i++) {
		trigger_dropdown[i].addEventListener("click", function(event){
			var element = event.target;
			var dropdown = element.nextSibling;
			if (dropdown.style.display.length > 0 && dropdown.style.display !== "none") {
				dropdown.style.display = "none";
			} else{
				dropdown.style.display = "block";
			};
		});
	};

	for (var i = 0; i < trigger_dropdown_hover.length; i++) {
		trigger_dropdown_hover[i].addEventListener("mouseover", function(event){
			var element = event.target;
			var dropdown = element.nextSibling;
			if (dropdown.style.display.length > 0 && dropdown.style.display !== "none") {
				dropdown.style.display = "none";
			} else{
				dropdown.style.display = "block";
			};
		});
	};
	
	mssearch.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			window.open(getMsUrl(this.value));
		};
	})
})

function getMsUrl(search){
	return "https://www.microsoft.com/uk-ua/search/result.aspx?q="+search+"&form=apps";
}