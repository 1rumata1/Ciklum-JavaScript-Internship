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