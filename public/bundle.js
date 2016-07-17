window.addEventListener("load", function() {
	document.getElementById("button").addEventListener("click", function() {
		window.location = "https://dropbox.com/business/try";
	})
})
console.log("footer")
window.addEventListener("load", function() {
	var trigger_dropdown = document.querySelectorAll(".dropdown-wrapper"),
		trigger_dropdown_hover = document.querySelectorAll(".dropdown-link.trigger"),
		mssearch = document.getElementById("mssearch"),
		prev_trigger_dropdown,
		prev_trigger_content;

	for (var i = 0; i < trigger_dropdown.length; i++) {
		trigger_dropdown[i].addEventListener("click", function(event) {
			if (prev_trigger_dropdown) {
				prev_trigger_dropdown.style.display = "none";
				prev_trigger_dropdown = undefined;
				return;
			}
			var dropdown = prev_trigger_dropdown = this.childNodes[1];
			if (dropdown.style.display.length > 0 && dropdown.style.display !== "none") {
				dropdown.style.display = "none";
			} else{
				dropdown.style.display = "block";
			};
		});
	};

	for (var i = 0; i < trigger_dropdown_hover.length; i++) {
		trigger_dropdown_hover[i].addEventListener("mouseover", function(event) {
			if (prev_trigger_content) {
				prev_trigger_content.style.display = "none";
			}
			var target = event.target.dataset.triggerTarget,
				dropdown = prev_trigger_content = document.getElementById(target);
			if (dropdown.style.display.length > 0 && dropdown.style.display !== "none") {
				dropdown.style.display = "none";
			} else {
				dropdown.style.display = "block";
			};
		});
	};
	
	mssearch.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			window.open(getMsUrl(this.value));
		};
	})
})

function getMsUrl(search){
	return "https://www.microsoft.com/uk-ua/search/result.aspx?q="+search+"&form=apps";
}
console.log("special")
window.addEventListener("load", function() {
	var form = document.forms[0],
		elementsList = form.elements,
		emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	
	form.addEventListener("submit", function(event) {
		var isNotValid = false;

		for (var i = 0; i < elementsList.length; i++) {
			var element = elementsList[i];

			if (element.type !== "submit" && element.value.length <= 0) {
				isNotValid = true;
				element.classList.add("error");
			} else {
				element.classList.remove("error");
			}
		};

		if(isNotValid) {
			event.preventDefault();
		}
	})

	elementsList.email.addEventListener("blur", function () {
		var val = this.value;
		if (emailPattern.test(val)) {
			this.classList.remove("error");
		} else {
			this.classList.add("error");
		}
	})
})