//this is a simple javascript function to toggle the display on/off for the dropdown menu
function showDropdown(elm){
	//grab the correct dropdown content element based on it's ID
	var drop = document.getElementById(elm.id+'Dropdown'); 

	//console.log is your best friend for debugging!
	console.log(elm, drop, drop.style.display); 

	//toggle the display style
	if (drop.style.display == "block" ){
		drop.style.display = "none";
	}else{
		drop.style.display = "block";
	}

}