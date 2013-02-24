/* Global Variables */
var WAREHOUSE_ID = -1;

/* Main entry point */
$(function () {
    /* Load any relevant information from local storage... */
    // WAREHOUSE_ID = localStorage.warehouseID;
    populate_inventory_entries();
})

/*  view_item(itemData)
Purpose:
    Redirects the user to the item info page.
Arguments:
    itemData: The itemData object representing the item to display.
Side Effects:
    Sets the localStorage.itemID to the passed in ID.
Returns:
    None
*/
function view_item(itemData) {
    localStorage.itemData = JSON.stringify(itemData);
    window.location = "./item.html";
}


/*
Purpose:
    Displays what is in the current inventory.
Arguments:
    None
Side Effects:
    Connects to the local database and retrieves the relevant inventory 
    information.
Returns:
    None
*/
function populate_inventory_entries() {
    add_inventory_entry({
        'id': 1, 'name': 'Axe', 'category': null, 'quantity': 100,
        'isBulk': true, 'is_working': true, 'description': "Ssssssssslice!",
        'comment': 'Needs some sharpening...'
    });
    add_inventory_entry({
        'id': 2, 'name': 'Bucket', 'category': null, 'quantity': 50,
        'isBulk': true, 'is_working': true, 'description': "Loads and loads of buckets.",
        'comment': "They're really dirty though!"
    });
    add_inventory_entry({
        'id': 3, 'name': 'Chainsaw EX 9000', 'category': 'Chainsaw', 'quantity': 1,
        'isBulk': false, 'is_working': true, 'description': "Todd's tool of choice.",
        'comment': 'Uses a lot of oil.'
    });
}

/*
Purpose:
    Adds one item to the inventory list. 
Arguments:
    itemData: The item assoc. array that contains all info about the item.
Side Effects:
    A new row will be added to the inventory table.
    The itemData will be inserted into the row's node data.
    [ [ID CELL] [NAME CELL] ]
Returns:
    None
*/
function add_inventory_entry(itemData) {
    var item_row = document.createElement('tr')
    var item_id_cell = document.createElement('td')
    var item_name_cell = document.createElement('td')
    var item_quantity_cell = document.createElement('td')
    
    // Load up the values...
    $(item_id_cell).text(itemData.id);
    $(item_name_cell).text(itemData.name);
    $(item_quantity_cell).text(itemData.quantity);
    

    // Pack everything together...
    $(item_row).append([item_id_cell, item_name_cell, item_quantity_cell])
    // When the user clicks on this row, it should link them to the item page.
    .click(function () {
        view_item(itemData);
    })
    /* End of row preparation */

    // Add the row to the table! 
    // We can't add it directly because we need access to the <tbody> item
    // that is within the table.
    $('#inventory_table_header').parent().append(item_row)
}