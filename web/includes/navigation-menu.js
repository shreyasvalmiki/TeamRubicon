/*
To use this function, add what you want to be visible inside the string.
e.g. to add a link:
	navmenu_add_entry('<a href="path">Link to page</a>')
To add a header:
	navmenu_add_entry('<a href="path">Link to page</a>', true)
*/
function navmenu_add_entry(str, is_header) {
	// Entries are not headers by default
	if (is_header === undefined)
		is_header = false
	
	var output_str = "<li"
	if (is_header)
		output_str += " data-role=\"list-divider\""
	
	output_str += '>'+str+'</li>'
	document.write(output_str)
}

navmenu_add_entry("Team Rubicon", true);
navmenu_add_entry("<a href=\"./\">Inventory</a>");
navmenu_add_entry('<a href="./select_inventory.html">Change Inventory</a>');
navmenu_add_entry("<a href=\"login.html\" data-rel=\"dialog\">Sign In</a>");