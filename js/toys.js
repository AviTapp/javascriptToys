function enterData() {
	var fname = document.getElementById('first').value;
	var data = document.getElementById('data');
	data.append(fname);

}

$(document).ready(function enterData (fname, lname, bdate) {
	var fname = getElementById('fname').value;
	var lname = getElementById('lname').value;
	var bdate = getElementById('bdate').value;
	$('#data').append("<p>"+fname+lname+bdate+"</p>")
});