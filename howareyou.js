$.ajax("howareyou.json", {
	success: function (data) {
		document.getElementByID("home-info").textContent = `${data.home-info}`;

	}
});
