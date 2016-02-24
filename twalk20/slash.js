function(name, url) {
	if (!url) url = window.location.href;
	var myCar = new Object();
	myCar.year = 1969;
	myCar.text = "Everything works, cool";

	return JSON.stringify(myCar);
}